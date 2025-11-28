import { getGraduates, sanityUrlFor } from '@/lib/sanity';
import React from 'react'
import { SanityGraduate } from '@/types/SanityGraduate.type';
import Image from 'next/image';
import Link from 'next/link';

const language = "TR";

const GraduateCard = ({ graduate }: { graduate: SanityGraduate }) => {
    console.log(graduate.experience);
    const currentPosition = graduate.experience.find((experience: { endDate?: string }) => experience.endDate === undefined);


    return (
        <div className='flex flex-col rounded-xl border md:w-sm w-full overflow-hidden shadow-md'>
            <div className='w-full h-96 relative'>
                <Image src={sanityUrlFor(graduate.image).width(1024).height(1024).url() || ''} alt={graduate.name} fill className='object-cover' />
            </div>
            {currentPosition && (
                <div className='pl-4 pt-2 font-bold'>
                    <p className='text-sm text-muted-foreground'>{currentPosition.company} - {currentPosition.position}</p>
                </div>
            )}
            <div className='p-4'>
                <h2 className='text-lg font-bold'>{graduate.name}</h2>
                <p className='text-sm text-muted-foreground'>{graduate.description}</p>
            </div>
            {/* redirect */}
            <div className='p-4'>
                <Link href={`/mezun/${graduate.slug.current}`} className='text-sm text-muted-foreground underline'>Detaylara Git</Link>
            </div>
        </div>
    )
}

const GraduatesPage = async () => {
    const graduates = await getGraduates(language);
    return (
        <div>
            <div className='max-w-7xl mx-auto'>
                <h1 className='text-2xl font-bold'>Mezun Portföyü</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-4 max-w-7xl mx-auto'>
                    {graduates.map((graduate: SanityGraduate) => (
                        <GraduateCard key={graduate._id} graduate={graduate} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default GraduatesPage
