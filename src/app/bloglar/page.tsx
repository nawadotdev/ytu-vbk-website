import { getBlogs, sanityUrlFor } from '@/lib/sanity'
import React from 'react'
import { SanityBlog } from '@/types/SanityBlog.type'
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

const language = "TR";

const BlogCard = ({ blog }: { blog: SanityBlog }) => {
    return (
        <div className='flex flex-col rounded-xl border md:w-sm w-full overflow-hidden shadow-md'>
            {/* image */}
            <div className='w-full h-48 relative'>
                <Image src={sanityUrlFor(blog.coverImage).width(1280).height(720).url() || ''} alt={blog.title} fill className='object-cover' />
            </div>
            {/* title and excerpt */}
            <div className='p-4'>
                <h2 className='text-lg font-bold'>{blog.title}</h2>
                <p className='text-sm text-muted-foreground'>{blog.excerpt}</p>
            </div>
            {/* category */}
            <div className='pl-4'>
                <Badge variant="secondary" className="text-sm">
                    {blog.category.title}
                </Badge>
            </div>
            {/* redirect */}
            <div className='p-4'>
                <Link href={`/blog/${blog.slug.current}`} className='text-sm text-muted-foreground underline'>Okumaya Devam Et</Link>
            </div>
        </div>
    )
}

const BlogListPage = async () => {
    const blogs = await getBlogs(language);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-4 max-w-7xl mx-auto'>
            {blogs.map((blog: SanityBlog) => (
                <BlogCard key={blog._id} blog={blog} />
            ))}
            {blogs.map((blog: SanityBlog) => (
                <BlogCard key={blog._id} blog={blog} />
            ))}
        </div>
    )
}

export default BlogListPage
