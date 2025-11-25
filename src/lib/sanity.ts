import { createClient } from "@sanity/client";
import { groq } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { Image } from "sanity";

export const sanityClient = createClient({
  projectId: "otmr34tv",
  dataset: "production",
  apiVersion: "2025-11-25",
  useCdn: true,
});

export function sanityUrlFor(source: Image) {
    return imageUrlBuilder(sanityClient).image(source);
  }

export const getBlogBySlug = async (slug: string) => {

    const query = groq`
        *[_type == "blog" && slug.current == $slug][0] {
            _id,
            title,
            slug,
            category -> {
                title,
                slug,
                description,
            },
            excerpt,
            coverImage,
            author -> {
                name,
                title,
                avatar,
                bio,
            },
            content,
            publishedAt,
            tags,
            language,
        }`;

    const blog = await sanityClient.fetch(query, { slug });
    return blog;

}

export const getBlogs = async (language: string) => {
    const query = groq`
        *[_type == "blog" && language == $language] | order(publishedAt desc) {
            _id,
            title,
            slug,
            coverImage,
            excerpt,
            publishedAt,
            author -> {
                name,
                title,
                avatar,
                bio,
            },
            category -> {
                title,
                slug,
                description,
            },
            tags,
            language,
        }`;
    const blogs = await sanityClient.fetch(query, { language });
    return blogs;
}