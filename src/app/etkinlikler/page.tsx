import { getEvents } from '@/lib/sanity';
import { SanityEvent } from '@/types/SanityEvent.type';
import Image from 'next/image';
import { sanityUrlFor } from '@/lib/sanity';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { formatDate } from '@/lib/utils';

const language = "TR";

const EventCard = ({ event, type }: { event: SanityEvent, type: 'active' | 'past' | 'upcoming' }) => {
    return (
        <div className='flex flex-col rounded-xl border md:w-sm w-full overflow-hidden shadow-md relative'>
            {/* type badge */}
            <div className='absolute top-2 right-2 z-10'>
                {type === 'active' && (
                    <Badge variant="secondary" className="text-xs bg-green-500 text-white">
                        Aktif
                    </Badge>
                )}
                {type === 'past' && (
                    <Badge variant="secondary" className="text-xs bg-gray-50-500 text-white">
                        Geçmiş
                    </Badge>
                )}
                {type === 'upcoming' && (
                    <Badge variant="secondary" className="text-xs bg-blue-500 text-white">
                        Yaklaşan
                    </Badge>
                )}
            </div>
            {/* image */}
            <div className='w-full h-48 relative'>
                <Image src={sanityUrlFor(event.coverImage).width(1280).height(720).url() || ''} alt={event.title} fill className='object-cover' />
            </div>
            {/* title and excerpt */}
            <div className='p-4'>
                <h2 className='text-lg font-bold'>{event.title}</h2>
                <p className='text-sm text-muted-foreground'>{event.description}</p>
            </div>
            {/* date and location */}
            <div className='pl-4'>
                <p className='text-sm text-muted-foreground'>📅: {formatDate(event.startDate, { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" })} - {formatDate(event.endDate, { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" })}</p>
                <p className='text-sm text-muted-foreground'>📍: {event.location}</p>
            </div>
            {/* tags */}
            <div className='pl-4 mt-5'>
                {event.tags.map((tag) => (
                    <Badge variant="secondary" className="text-xs" key={tag}>
                        {tag}
                    </Badge>
                ))}
            </div>
            {/* redirect */}
            <div className='p-4'>
                <Link href={`/etkinlik/${event.slug.current}`} className='text-sm text-muted-foreground underline'>Detaylara Git</Link>
            </div>
        </div>
    )
}

const EventListPage = async () => {
    const { active, past, upcoming } = await getEvents(language);
    return (
        <div className='max-w-7xl mx-auto'>
            <h1 className='text-2xl font-bold'>Etkinlikler</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-4 max-w-7xl mx-auto'>
                {active.map((event: SanityEvent) => (
                    <EventCard key={event._id} event={event} type="active" />
                ))}
                {past.map((event: SanityEvent) => (
                    <EventCard key={event._id} event={event} type="past" />
                ))}
                {upcoming.map((event: SanityEvent) => (
                    <EventCard key={event._id} event={event} type="upcoming" />
                ))}
            </div>
        </div>
    )
}

export default EventListPage
