import { getBlogBySlug, getMoreBlogs, sanityUrlFor } from '@/lib/sanity';
import { Badge } from '@/components/ui/badge';
import { Avatar } from '@/components/ui/avatar';
import { AvatarImage } from '@/components/ui/avatar';
import { AvatarFallback } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import { PortableText } from 'next-sanity';
import { portableComponents } from '@/components/Sanity/portableComponents';
import ShareButtons from '@/components/Post/ShareButtons';
import PostBreadcrumb from '@/components/Post/Breadcrumb';
import { calculateReadingTime } from '@/lib/utils';
import { SanityBlog } from '@/types/SanityBlog.type';
import Link from 'next/link';

const language = "TR";

export const revalidate = 60;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogBySlug(slug);

  const mainDomain = process.env.NEXT_PUBLIC_MAIN_DOMAIN;

  const imageUrl = sanityUrlFor(post.coverImage).width(1600).height(840).quality(80).auto('format').url();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "image": imageUrl,
    "author": {
      "@type": "Person",
      "name": post.author?.name
    },
    "datePublished": post.publishedAt,
    "dateModified": post.publishedAt,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${mainDomain}/blog/${post.slug.current}`
    }
  };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      images: [
        imageUrl
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [imageUrl],
    },
    alternates: {
      canonical: `${mainDomain}/blog/${post.slug.current}`,
    },
    other: {
      "script:ld+json": JSON.stringify(jsonLd)
    }
  };
}

const SuggestedBlogCard = ({ blog }: { blog: SanityBlog }) => {
  return (
    <Link
      href={`/blog/${blog.slug.current}`}
      className="group flex flex-col border rounded-xl overflow-hidden hover:shadow-lg shadow-md transition-shadow bg-white"
    >
      <div className="relative w-full aspect-video">
        <Image
          src={sanityUrlFor(blog.coverImage).width(900).height(500).quality(80).auto('format').url()}
          alt={`${blog.title} blog görseli`}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-4 space-y-2">
        <Badge variant="secondary" className="text-xs">
          {blog.category.title}
        </Badge>

        <h3 className="text-lg font-semibold group-hover:text-primary transition-colors line-clamp-2">
          {blog.title}
        </h3>

        <p className="text-sm text-muted-foreground line-clamp-2">
          {blog.excerpt}
        </p>

        <p className="text-xs text-primary underline mt-2">
          Okumaya devam et →
        </p>
      </div>
    </Link>
  );
};


const SuggestedBlogs = async ({ post }: { post: SanityBlog }) => {
  const moreBlogs = await getMoreBlogs(
    language,
    post.slug.current,
    post.category._id,
    post.tags,
    6
  );

  return (
    <div className="mt-6">
      <div className="flex gap-4 overflow-x-auto flex-nowrap pb-4">
        {moreBlogs.map((blog: SanityBlog) => (
          <div key={blog._id} className="w-xs shrink-0">
            <SuggestedBlogCard blog={blog} />
          </div>
        ))}
      </div>
    </div>
  );
};



const BlogPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const post = await getBlogBySlug(slug);

  const { minutes } = calculateReadingTime(post.content);

  return (
    <div>
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-10">
        <PostBreadcrumb title={post.title} groupName="Bloglar" />
        <div className="space-y-4">
          <Badge variant="secondary" className="text-sm">
            {post.category.title}
          </Badge>

          <h1 className="text-4xl font-bold tracking-tight">
            {post.title}
          </h1>

          {post.excerpt && (
            <p className="text-lg text-muted-foreground leading-relaxed">
              {post.excerpt}
            </p>
          )}

          <div className='flex justify-between items-center'>
            <div className="flex items-center gap-3 pt-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={sanityUrlFor(post.author?.avatar).url()} />
                <AvatarFallback>{post.author?.name[0]}</AvatarFallback>
              </Avatar>

              <div>
                <p className="font-medium">{post.author?.name}</p>
                <p className="text-xs text-muted-foreground">
                  {new Date(post.publishedAt).toLocaleDateString("tr-TR")}
                </p>
              </div>
            </div>
            <div className='flex items-center gap-2'>
              <p className='text-sm text-muted-foreground'>{minutes} dakika okuma süresi</p>
            </div>
            <div className='flex items-center gap-2'>
              <p className='text-sm text-muted-foreground'>Paylaş:</p>
              <ShareButtons link={`/blog/${post.slug.current}`} />
            </div>
          </div>
        </div>

        {post.coverImage && (
          <Image
            src={sanityUrlFor(post.coverImage)
              .width(1600)
              .height(840)
              .quality(80)
              .auto("format")
              .url()}
            alt={post.title}
            width={1600}
            height={840}
            priority
            sizes="100vw"
            className="rounded-xl object-cover w-full border"
          />
        )}

        <Separator className="my-6" />

        <article className="prose prose-neutral dark:prose-invert max-w-none mx-auto">
          <PortableText value={post.content} components={portableComponents} />
        </article>

        {post.tags?.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-6">
            {post.tags.map((tag: string) => (
              <Badge key={tag} variant="outline">
                #{tag}
              </Badge>
            ))}
          </div>
        )}
        <Separator className="my-6" />
      </div>
      <div className='max-w-7xl mx-auto px-4 py-12'>
        <h2 className="text-2xl font-bold">Diğer Blog Yazıları</h2>
        <SuggestedBlogs post={post} />
      </div>
    </div>
  )
}

export default BlogPage
