import { ChevronDown, MenuIcon } from 'lucide-react'
import Link from 'next/link'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { Button } from '../ui/button'
import Image from 'next/image'

const NavItems: { label: string, href: string }[] = [
    { label: "Ana Sayfa", href: "/" },
    { label: "Etkinlikler", href: "/etkinlikler" },
    { label: "Eğitimler", href: "/egitimler" },
    { label: "Mezun Portföyü", href: "/mezun-portfoyu" },
    { label: "Blog", href: "/blog" },
    { label: "Hakkımızda", href: "/hakkimizda" },
    { label: "İletişim", href: "/iletisim" },
]

const NavItem = ({ label, href }: { label: string, href: string }) => {
    return (
        <Link href={href} className="hover:underline transition-all duration-300 cursor-pointer font-bold">
            <p>{label}</p>
        </Link>
    )
}

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center w-full bg-background backdrop-blur-[50px] font-bold lg:px-24 md:px-12 px-6 md:py-6 py-4 h-16">
            {/* logo */}
            <div className='relative h-36 w-36'>
                <Link href="/">
                    <Image
                        src="/logo.png"
                        alt='VBK Logo'
                        fill
                        className='hidden md:block'
                    />
                    <Image
                        src="/logo-mobile.png"
                        alt='VBK Logo Mobile'
                        fill
                        className='block md:hidden'
                    />
                </Link>
            </div>
            {/* nav items */}
            {/* desktop nav items */}
            <div className="hidden md:flex flex-wrap justify-center gap-x-8 max-w-xl">
                {NavItems.map((item) => (
                    <NavItem key={item.href} label={item.label} href={item.href} />
                ))}
            </div>
            {/* language selector */}
            <div className="hidden items-center gap-1 md:block">
                <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center gap-1 hover:underline transition-all duration-300 cursor-pointer  ">
                        <p>Türkçe</p>
                        <ChevronDown className="w-4 h-4" />
                    </DropdownMenuTrigger>
                </DropdownMenu>
            </div>
            <div className='block md:hidden'>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="icon">
                            <MenuIcon className="w-4 h-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align='end' className='md:hidden'>
                        <DropdownMenuItem key="anasayfa">
                            <NavItem label="Ana Sayfa" href="/" />
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        {NavItems.map((item) => (
                            <DropdownMenuItem key={item.href}>
                                <NavItem label={item.label} href={item.href} />
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </nav>
    )
}
