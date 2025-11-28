import PostBreadcrumb from '@/components/Post/Breadcrumb';
import { portableComponents } from '@/components/Sanity/portableComponents';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { getGraduateBySlug, sanityUrlFor } from '@/lib/sanity';
import { formatDate, degreeConverter } from '@/lib/utils';
import { SanityGraduate } from '@/types/SanityGraduate.type';
import { PortableText } from 'next-sanity';
import Image from 'next/image';
import Link from 'next/link';

const language = "TR";

export const revalidate = 60;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const graduate = await getGraduateBySlug(slug, language);
    if (!graduate) {
        return {
            title: "Mezun bulunamadı",
            description: "Mezun bulunamadı",
        };
    }
    const mainDomain = process.env.NEXT_PUBLIC_MAIN_DOMAIN;

    const imageUrl = sanityUrlFor(graduate.image).width(1024).height(1024).quality(80).auto('format').url();

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        "headline": graduate.name,
        "description": graduate.description,
        "image": imageUrl,
        "author": {
            "@type": "Person",
            "name": graduate.name
        },
        "datePublished": graduate._createdAt,
        "dateModified": graduate._updatedAt,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `${mainDomain}/mezun/${graduate.slug.current}`
        }
    };

    return {
        title: graduate.name,
        description: graduate.description,
        openGraph: {
            title: graduate.name,
            description: graduate.description,
            type: "article",
            images: [
                imageUrl
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: graduate.name,
            description: graduate.description,
            images: [imageUrl],
        },
        alternates: {
            canonical: `${mainDomain}/mezun/${graduate.slug.current}`,
        },
        other: {
            "script:ld+json": JSON.stringify(jsonLd)
        }
    };
}

const GraduatePage = async ({ params }: { params: Promise<{ slug: string }> }) => {

    const { slug } = await params;
    const graduate = await getGraduateBySlug(slug, language)
    if (!graduate) {
        return <div className='max-w-7xl mx-auto px-4 py-12 space-y-10 text-center'>Mezun bulunamadı</div>;
    }

    const currentPosition = graduate.experience.find((experience: { endDate?: string }) => experience.endDate === undefined);

    return (
        <div>
            <div className="max-w-4xl mx-auto px-4 py-12 space-y-10">
                <PostBreadcrumb title={graduate.name} groupName="Mezun Portföyü" />
                <div className="space-y-4 flex items-center gap-4">
                    <div className='w-72 h-72 relative rounded-xl overflow-hidden'>
                        <Image src={sanityUrlFor(graduate.image).width(1024).height(1024).url() || ''} alt={graduate.name} fill className='object-cover' />
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold tracking-tight">
                            {graduate.name}
                        </h1>
                        {currentPosition && (
                            <p className="text-sm text-muted-foreground font-bold">
                                {currentPosition.company} - {currentPosition.position}
                            </p>
                        )}
                    </div>
                </div>
                <Separator className="my-6" />
                <article className="prose prose-neutral dark:prose-invert max-w-none mx-auto">
                    <PortableText value={graduate.content} components={portableComponents} />
                </article>
                <Separator className="my-6" />
                <h2 className="text-2xl font-bold tracking-tight">Eğitim</h2>
                <div className="space-y-4">
                    {graduate.education.map((education: SanityGraduate['education'][number]) => (
                        <div key={education._id}>
                            {/* tarih. year - year only. if end date is not defined, show start date - halen*/}
                            <p className="text-sm text-muted-foreground">
                                {formatDate(education.startDate, { year: "numeric" })} - {education.endDate ? formatDate(education.endDate, { year: "numeric" }) : "Halen"}
                            </p>
                            {education.degree && (
                                <div>
                                    <h3 className="text-lg font-bold tracking-tight">{degreeConverter(education.degree, language)}</h3>
                                </div>
                            )}
                            <p className="text-sm text-muted-foreground">
                                {education.institution} {education.department && `- ${education.department}`}
                            </p>
                        </div>
                    ))}
                </div>
                <Separator className="my-6" />
                <h2 className="text-2xl font-bold tracking-tight">Deneyim</h2>
                <div className="space-y-4">
                    {graduate.experience.map((experience: SanityGraduate['experience'][number]) => (
                        <div key={experience._id}>
                            <h3 className="text-lg font-bold tracking-tight">{experience.company} - {experience.position}</h3>
                            <p className="text-sm text-muted-foreground">
                                {formatDate(experience.startDate, { year: "numeric" })} - {experience.endDate ? formatDate(experience.endDate, { year: "numeric" }) : "Halen"}
                            </p>
                        </div>
                    ))}
                </div>
                <Separator className="my-6" />
                <h2 className="text-2xl font-bold tracking-tight">Projeler</h2>
                <div className="space-y-4">
                    {graduate.projects.map((project: SanityGraduate['projects'][number]) => (
                        <div key={project._id}>
                            <h3 className="text-lg font-bold tracking-tight">{project.title}</h3>
                            <p className="text-sm text-muted-foreground">{project.description}</p>
                            {project.url && (
                                <Link href={project.url} className="text-sm text-muted-foreground underline" target="_blank">
                                    Projeye Git
                                </Link>
                            )}
                        </div>
                    ))}
                </div>
                <Separator className="my-6" />
                <h2 className="text-2xl font-bold tracking-tight">Diller</h2>
                <div className="space-y-4 flex flex-wrap gap-2">
                    {graduate.languages.map((language: string) => (
                        <div key={language}>
                            <Badge variant="outline">
                                {language}
                            </Badge>
                        </div>
                    ))}
                </div>
                <Separator className="my-6" />
                <h2 className="text-2xl font-bold tracking-tight">Yetenekler</h2>
                <div className="space-y-4 flex flex-wrap gap-2">
                    {graduate.skills.map((skill: string) => (
                        <div key={skill}>
                            <Badge variant="outline">
                                {skill}
                            </Badge>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default GraduatePage
