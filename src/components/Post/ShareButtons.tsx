import { headers } from 'next/headers';
import { Button } from '../ui/button';
import Link from 'next/link';
import { FaXTwitter, FaLinkedinIn, FaFacebook } from 'react-icons/fa6';

const ShareButtons = async ({ link }: { link: string }) => {
    const headersList = await headers();
    const host = headersList.get('host')
    const url = `${host}${link}`

    return (
        <div className='flex items-center gap-2'>
            <Button variant="outline" size="icon">
                <Link href={`https://x.com/share?url=${encodeURIComponent(url)}`} target='_blank'>
                    <FaXTwitter />
                </Link>
            </Button>
            <Button variant="outline" size="icon">
                    <Link href={`https://linkedin.com/share?url=${encodeURIComponent(url)}`} target='_blank'>
                    <FaLinkedinIn />
                </Link>
            </Button>
            <Button variant="outline" size="icon">
                <Link href={`https://facebook.com/share?url=${encodeURIComponent(url)}`} target='_blank'>
                    <FaFacebook />
                </Link>
            </Button>
        </div>
    )
}

export default ShareButtons
