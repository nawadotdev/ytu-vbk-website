import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from '../ui/breadcrumb';
import Link from 'next/link';

const PostBreadcrumb = async ({ title, groupName }: { title: string, groupName?: string }) => {
    const validGroupName = groupName?.replace(/ğ/g, 'g').replace(/ü/g, 'u').replace(/ş/g, 's').replace(/ı/g, 'i').replace(/ö/g, 'o').replace(/ç/g, 'c').replace(/ /g, '-').toLowerCase();
    return (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem className='hover:underline'>
                    <Link href={"/"}>YTU VBK</Link>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                {groupName && (
                    <BreadcrumbItem className='hover:underline'>
                        <Link href={`/${validGroupName}`}>{groupName}</Link>
                    </BreadcrumbItem>
                )}
                <BreadcrumbSeparator />
                <BreadcrumbItem className='font-bold'>
                    {title}
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    )
}

export default PostBreadcrumb
