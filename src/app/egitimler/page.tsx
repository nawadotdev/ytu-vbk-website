import { Badge } from "@/components/ui/badge";
import { getCourses, sanityUrlFor } from "@/lib/sanity";
import { formatDate } from "@/lib/utils";
import { SanityCourse } from "@/types/SanityCourse.type";
import Link from "next/link";
import Image from "next/image";

const language = "TR";

const CourseCard = ({ course, type }: { course: SanityCourse, type: 'active' | 'past' | 'upcoming' }) => {
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
                <Image src={sanityUrlFor(course.coverImage).width(1280).height(720).url() || ''} alt={course.title} fill className='object-cover' />
            </div>
            {/* title and excerpt */}
            <div className='p-4'>
                <h2 className='text-lg font-bold'>{course.title}</h2>
                <p className='text-sm text-muted-foreground'>{course.description}</p>
            </div>
            {/* date and lecturer */}
            <div className='pl-4'>
                <p className='text-sm text-muted-foreground'>📅: {formatDate(course.startDate, { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" })} - {formatDate(course.endDate, { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" })}</p>
                <p className='text-sm text-muted-foreground'>👨‍🏫: {course.lecturer.name}</p>
            </div>
            {/* redirect */}
            <div className='p-4'>
                <Link href={`/egitim/${course.slug.current}`} className='text-sm text-muted-foreground underline'>Detaylara Git</Link>
            </div>
        </div>
    )
}

export default async function CoursesPage() {
    const {active, upcoming, past} = await getCourses(language);
    return (
        <div className='max-w-7xl mx-auto'>
            <h1 className='text-2xl font-bold'>Eğitimler</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-4 max-w-7xl mx-auto'>
                {active.map((course: SanityCourse) => (
                    <CourseCard key={course._id} course={course} type="active" />
                ))}
                {upcoming.map((course: SanityCourse) => (
                    <CourseCard key={course._id} course={course} type="upcoming" />
                ))}
                {past.map((course: SanityCourse) => (
                    <CourseCard key={course._id} course={course} type="past" />
                ))}
            </div>
        </div>
    )
}