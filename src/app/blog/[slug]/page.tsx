import { getBlogBySlug, sanityUrlFor } from '@/lib/sanity';
import { Badge } from '@/components/ui/badge';
import { Avatar } from '@/components/ui/avatar';
import { AvatarImage } from '@/components/ui/avatar';
import { AvatarFallback } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import React from 'react'
import { PortableText } from 'next-sanity';
import { portableComponents } from '@/components/Sanity/portableComponents';
import Link from 'next/link';

const BlogPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const post = await getBlogBySlug(slug);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-10">
      <div><Link href="/blog" className='text-sm text-muted-foreground underline'>← Bloglara Dön</Link></div>
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
      </div>

      {post.coverImage && (
        <Image
          src={sanityUrlFor(post.coverImage).url()}
          alt={post.title}
          width={1200}
          height={600}
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
    </div>
  )
}

export default BlogPage
