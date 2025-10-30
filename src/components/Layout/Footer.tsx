import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const FooterGroups: { title: string, items: { label: string, href: string }[] }[] = [
    {
        title: "Sayfalar",
        items: [
            { label: "Ana Sayfa", href: "/" },
            { label: "Etkinlikler", href: "/etkinlikler" },
            { label: "Eğitimler", href: "/egitimler" },
            { label: "Blog", href: "/blog" },
            { label: "Hakkımızda", href: "/hakkimizda" },
            { label: "İletişim", href: "/iletisim" },
        ]
    },
    {
        title: "Etkinlikler",
        items: [
            { label: "YTÜ VBK Etkinlik 1", href: "/ytü-vbk-etkinlik-1" },
            { label: "YTÜ VBK Etkinlik 2", href: "/ytü-vbk-etkinlik-2" },
            { label: "YTÜ VBK Etkinlik 3", href: "/ytü-vbk-etkinlik-3" },
            { label: "YTÜ VBK Etkinlik 4", href: "/ytü-vbk-etkinlik-4" },
        ]
    },
    {
        title: "Eğitimler",
        items: [
            { label: "YTÜ VBK Eğitim 1", href: "/ytü-vbk-egitim-1" },
            { label: "YTÜ VBK Eğitim 2", href: "/ytü-vbk-egitim-2" },
            { label: "YTÜ VBK Eğitim 3", href: "/ytü-vbk-egitim-3" },
            { label: "YTÜ VBK Eğitim 4", href: "/ytü-vbk-egitim-4" },
        ]
    },
    {
        title: "Blog",
        items: [
            { label: "YTÜ VBK Blog 1", href: "/ytü-vbk-blog-1" },
            { label: "YTÜ VBK Blog 2", href: "/ytü-vbk-blog-2" },
            { label: "YTÜ VBK Blog 3", href: "/ytü-vbk-blog-3" },
            { label: "YTÜ VBK Blog 4", href: "/ytü-vbk-blog-4" },
        ]
    }
]

const Footer = () => {
    return (
        <footer className="bg-background backdrop-blur-[50px] font-bold lg:px-24 md:px-12 px-6 md:py-6 py-4 items-center justify-center flex flex-col md:flex-row">
            {/* Logo */}
            <div className='relative h-72 w-72 order-2 md:order-1'>
                <Link href="/">
                    <Image src="/logo-mobile.png" alt="VBK Logo" fill />
                </Link>
            </div>
            {/* Nav Items */}
            <div className="grid grid-cols-3 gap-x-4 gap-y-2 md:grid-cols-5 flex-1 order-1 md:order-2 text-xs md:text-base items-start">
                {FooterGroups.map((group) => (
                    <div key={group.title}>
                        <ul className="flex flex-col gap-2">
                            <h3 className="font-semibold text-muted-foreground">{group.title}</h3>
                            {group.items.map((item) => (
                                <Link href={item.href} key={item.href}>
                                    <li className='font-medium hover:underline transition-all duration-300 cursor-pointer truncate'>{item.label}</li>
                                </Link>
                            ))}
                        </ul>
                    </div>
                ))}
                <div>
                    <ul className='flex flex-col gap-2'>
                        <h3 className='font-semibold text-muted-foreground'>İletişim</h3>
                        <Link href="https://www.tiktok.com/@ytuveribilimikulubu" target='_blank'>
                            <p className='font-medium hover:underline transition-all duration-300 cursor-pointer truncate'>TikTok</p>
                        </Link>
                        <Link href="https://www.instagram.com/ytuveribilimi" target='_blank'>
                            <p className='font-medium hover:underline transition-all duration-300 cursor-pointer truncate'>Instagram</p>
                        </Link>
                        <Link href="https://tr.linkedin.com/company/ytuveribilimi" target='_blank'>
                            <p className='font-medium hover:underline transition-all duration-300 cursor-pointer truncate'>LinkedIn</p>
                        </Link>
                        <Link href="https://www.youtube.com/@ytudatascience7473" target='_blank'>
                            <p className='font-medium hover:underline transition-all duration-300 cursor-pointer truncate'>YouTube</p>
                        </Link>
                        <Link href="https://x.com/veribilimiytu" target='_blank'>
                            <p className='font-medium hover:underline transition-all duration-300 cursor-pointer truncate'>X</p>
                        </Link>
                        <Link href="mailto:veribilimiytu@gmail.com" target='_blank'>
                            <p className='font-medium hover:underline transition-all duration-300 cursor-pointer truncate'>Email</p>
                        </Link>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
