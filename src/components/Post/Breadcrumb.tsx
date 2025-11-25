import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from '../ui/breadcrumb';
import Link from 'next/link';

const PostBreadcrumb = async ({ title, groupName }: { title: string, groupName?: string }) => {
    return (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <Link href={"/"}>YTU VBK</Link>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                {groupName && (
                    <BreadcrumbItem>
                        <Link href={`/${groupName.toLowerCase()}`}>{groupName}</Link>
                    </BreadcrumbItem>
                )}
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    {title}
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    )
}

export default PostBreadcrumb
