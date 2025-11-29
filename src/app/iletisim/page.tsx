'use client'

import ContactForm from '@/components/Forms/ContactForm'
import { Separator } from '@/components/ui/separator'
import { Instagram, Linkedin, Twitter, Youtube } from 'lucide-react'
import Link from 'next/link'

const ContactPage = () => {

    return (
        <div className='max-w-4xl mx-auto px-4 py-12 space-y-10 flex flex-col items-center justify-center'>
            <h2 className='text-2xl font-bold text-center'>İletişim</h2>
            <Separator className='w-full' />
            <div className='w-full md:w-2/3'>
                <ContactForm />
            </div>
            <Separator className='w-full' />
            <div className='flex items-center gap-2'>
                {[
                    { href: "https://www.instagram.com/ytuveribilimi", label: "Instagram", Icon: Instagram },
                    { href: "https://x.com/veribilimiytu", label: "X", Icon: Twitter },
                    { href: "https://tr.linkedin.com/company/ytuveribilimi", label: "LinkedIn", Icon: Linkedin },
                    { href: "https://www.youtube.com/@ytudatascience7473", label: "YouTube", Icon: Youtube },
                ].map(({ href, label, Icon }) => (
                    <Link
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="h-10 w-10 inline-flex items-center justify-center rounded-full border hover:bg-accent"
                    >
                        <Icon className="h-4 w-4" />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default ContactPage