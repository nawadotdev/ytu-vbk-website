import { getEventBySlug, sanityUrlFor } from '@/lib/sanity';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import { PortableText } from 'next-sanity';
import { portableComponents } from '@/components/Sanity/portableComponents';
import ShareButtons from '@/components/Post/ShareButtons';
import PostBreadcrumb from '@/components/Post/Breadcrumb';
import Link from 'next/link';
import { formatDate } from '@/lib/utils';
import { SanityEvent } from '@/types/SanityEvent.type';

const language = "TR";

export const revalidate = 60;

const SponsorCard = ({ sponsor }: { sponsor: SanityEvent['sponsors'][number] }) => {
  return (
    <div className='flex flex-col rounded-xl border overflow-hidden shadow-md'>
      <div className='w-full h-48 relative'>
        <Image src={sanityUrlFor(sponsor.image).width(1280).height(720).url() || ''} alt={sponsor.title} fill className='object-contain' />
      </div>
      <div className='p-4 text-center'>
        {sponsor.link ? (
          <Link href={sponsor.link} target='_blank'>
            <p className='text-sm text-muted-foreground underline'>{sponsor.title}</p>
          </Link>
        ) : (
          <p className='text-sm text-muted-foreground'>{sponsor.title}</p>
        )}
      </div>
    </div>
  )
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = await getEventBySlug(slug, language);

  const mainDomain = process.env.NEXT_PUBLIC_MAIN_DOMAIN;

  const imageUrl = sanityUrlFor(event.coverImage).width(1600).height(840).quality(80).auto('format').url();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": event.title,
    "description": event.description,
    "image": imageUrl,
    "author": {
      "@type": "Person",
      "name": event.author?.name
    },
    "datePublished": event.startDate,
    "dateModified": event.startDate,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${mainDomain}/etkinlik/${event.slug.current}`
    }
  };

  return {
    title: event.title,
    description: event.description,
    openGraph: {
      title: event.title,
      description: event.description,
      type: "article",
      images: [
        imageUrl
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: event.title,
      description: event.description,
      images: [imageUrl],
    },
    alternates: {
      canonical: `${mainDomain}/etkinlik/${event.slug.current}`,
    },
    other: {
      "script:ld+json": JSON.stringify(jsonLd)
    }
  };
}

const EventPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const event = await getEventBySlug(slug, language);

  return (
    <div>
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-10">
        <PostBreadcrumb title={event.title} groupName="Etkinlikler" />
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">
            {event.title}
          </h1>

          <div className='flex justify-between items-center'>
            <div className="flex flex-col gap-3 pt-3">
              {/* location */}
              <p className='text-sm text-muted-foreground'>📍: {event.location}</p>
              <p className='text-sm text-muted-foreground'>📅: {formatDate(event.startDate, { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" })} - {formatDate(event.endDate, { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" })}</p>
            </div>
            <div className='flex items-center gap-2'>
              <ShareButtons link={`/etkinlik/${event.slug.current}`} />
            </div>
          </div>
        </div>

        {event.coverImage && (
          <Image
            src={sanityUrlFor(event.coverImage)
              .width(1600)
              .height(840)
              .quality(80)
              .auto("format")
              .url()}
            alt={event.title}
            width={1600}
            height={840}
            priority
            sizes="100vw"
            className="rounded-xl object-cover w-full border"
          />
        )}

        <Separator className="my-6" />

        <article className="prose prose-neutral dark:prose-invert max-w-none mx-auto">
          <PortableText value={event.content} components={portableComponents} />
        </article>

        {event.tags?.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-6">
            {event.tags.map((tag: string) => (
              <Badge key={tag} variant="outline">
                #{tag}
              </Badge>
            ))}
          </div>
        )}
        <Separator className="my-6" />
        <div className='max-w-7xl mx-auto px-4 py-12'>
          <h2 className='text-2xl font-bold tracking-tight'>Sponsorlar</h2>
          <div className="mt-6">
            <div className="flex gap-4 overflow-x-auto flex-nowrap pb-4">
              {event.sponsors.map((sponsor: SanityEvent['sponsors'][number]) => (
                <div key={sponsor._id} className="w-xs shrink-0">
                  <SponsorCard sponsor={sponsor} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventPage
