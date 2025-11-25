import { headers } from 'next/headers';
import { Button } from '../ui/button';
import Link from 'next/link';
import { FaXTwitter, FaLinkedinIn, FaFacebook } from 'react-icons/fa6';

const ShareButtons = async () => {
    const headersList = await headers();
    const url = headersList.get('referer') || window.location.href;

    return (
        <div className='flex items-center gap-2'>
            <Button variant="outline" size="icon">
                <Link href={`https://x.com/share?url=${url}`} target='_blank'>
                    <FaXTwitter />
                </Link>
            </Button>
            <Button variant="outline" size="icon">
                    <Link href={`https://linkedin.com/share?url=${url}`} target='_blank'>
                    <FaLinkedinIn />
                </Link>
            </Button>
            <Button variant="outline" size="icon">
                <Link href={`https://facebook.com/share?url=${url}`} target='_blank'>
                    <FaFacebook />
                </Link>
            </Button>
        </div>
    )
}

export default ShareButtons
