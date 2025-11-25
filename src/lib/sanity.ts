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