import PostBreadcrumb from "@/components/Post/Breadcrumb";
import ShareButtons from "@/components/Post/ShareButtons";
import { portableComponents } from "@/components/Sanity/portableComponents";
import { Separator } from "@/components/ui/separator";
import { getCourseBySlug, sanityUrlFor } from "@/lib/sanity";
import { formatDate } from "@/lib/utils";
import { PortableText } from "next-sanity";
import Image from "next/image";

export const revalidate = 60;

const language = "TR";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = await getCourseBySlug(slug, language);
  if (!course) {
    return {
      title: "Eğitim bulunamadı",
      description: "Eğitim bulunamadı",
    };
  }
  const mainDomain = process.env.NEXT_PUBLIC_MAIN_DOMAIN;

  const imageUrl = sanityUrlFor(course.coverImage).width(1600).height(840).quality(80).auto('format').url();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": course.title,
    "description": course.description,
    "image": imageUrl,
    "author": {
      "@type": "Person",
      "name": course.lecturer?.name
    },
    "datePublished": course.startDate,
    "dateModified": course.startDate,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${mainDomain}/egitim/${course.slug.current}`
    }
  };

  return {
    title: course.title,
    description: course.description,
    openGraph: {
      title: course.title,
      description: course.description,
      type: "article",
      images: [
        imageUrl
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: course.title,
      description: course.description,
      images: [imageUrl],
    },
    alternates: {
      canonical: `${mainDomain}/egitim/${course.slug.current}`,
    },
    other: {
      "script:ld+json": JSON.stringify(jsonLd)
    }
  };
}

export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = await getCourseBySlug(slug, language);
  if (!course) {
    return <div className='max-w-7xl mx-auto px-4 py-12 space-y-10 text-center'>Eğitim bulunamadı</div>;
  }
  return (
    <div>
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-10">
        <PostBreadcrumb title={course.title} groupName="Eğitimler" />
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">
            {course.title}
          </h1>

          <div className='flex justify-between items-center'>
            <div className="flex flex-col gap-3 pt-3">
              {/* location */}
              <p className='text-sm text-muted-foreground'>👨‍🏫: {course.lecturer?.name}</p>
              <p className='text-sm text-muted-foreground'>📅: {formatDate(course.startDate, { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" })} - {formatDate(course.endDate, { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" })}</p>
            </div>
            <div className='flex items-center gap-2'>
              <ShareButtons link={`/egitim/${course.slug.current}`} />
            </div>
          </div>
        </div>
        {course.coverImage && (
          <Image
            src={sanityUrlFor(course.coverImage)
              .width(1600)
              .height(840)
              .quality(80)
              .auto("format")
              .url()}
            alt={course.title}
            width={1600}
            height={840}
            priority
            sizes="100vw"
            className="rounded-xl object-cover w-full border"
          />
        )}

        <Separator className="my-6" />

        <article className="prose prose-neutral dark:prose-invert max-w-none mx-auto">
          <PortableText value={course.content} components={portableComponents} />
        </article>

        <Separator className="my-6" />

        <div className="flex flex-col gap-2">
          <h2 className='text-2xl font-bold tracking-tight'>Eğitmen Bilgileri</h2>
          <div className="flex flex-row gap-2 items-center p-4">
            <Image src={sanityUrlFor(course.lecturer?.avatar).width(100).height(100).quality(80).auto('format').url()} alt={course.lecturer?.name} width={100} height={100} className="rounded-full" />
            <div className="flex flex-col gap-2">
              <h3 className='text-lg font-bold tracking-tight'>{course.lecturer?.name}</h3>
              <p className='text-sm text-muted-foreground'>{course.lecturer?.title}</p>
              <p className='text-sm text-muted-foreground'>{course.lecturer?.bio}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}