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

export const getMoreBlogs = async (
  language: string,
  slug: string,
  categoryId?: string,
  tags?: string[],
  limit: number = 4
) => {
  const hasCategory = Boolean(categoryId);
  const hasTags = tags && tags.length > 0;

  if (hasCategory && hasTags) {
    const query = groq`
        *[
          _type == "blog" &&
          slug.current != $slug &&
          language == $language &&
          (
            category._ref == $categoryId ||
            count((tags[]->slug.current)[@ in $tags]) > 0
          )
        ]
        | order(
            (category._ref == $categoryId) desc,
            count((tags[]->slug.current)[@ in $tags]) desc,
            _createdAt desc
          )[0...${limit}]
        {
          _id,
          title,
          slug,
          coverImage,
          excerpt,
          category->{ title },
          tags[]->{ title, slug }
        }
      `;

    return sanityClient.fetch(query, {
      slug,
      categoryId,
      tags,
      language,
      limit,
    });
  }

  if (hasCategory) {
    const query = groq`
        *[
          _type == "blog" &&
          slug.current != $slug &&
          language == $language &&
          category._ref == $categoryId
        ]
        | order(_createdAt desc)[0...${limit}]{
          _id,
          title,
          slug,
          coverImage,
          excerpt,
          category->{ title },
          tags[]->{ title, slug }
        }
      `;

    return sanityClient.fetch(query, {
      slug,
      categoryId,
      language,
      limit,
    });
  }

  if (hasTags) {
    const query = groq`
        *[
          _type == "blog" &&
          slug.current != $slug &&
          language == $language &&
          count((tags[]->slug.current)[@ in $tags]) > 0
        ]
        | order(_createdAt desc)[0...${limit}]{
          _id,
          title,
          slug,
          coverImage,
          excerpt,
          category->{ title },
          tags[]->{ title, slug }
        }
      `;

    return sanityClient.fetch(query, {
      slug,
      tags,
      language,
      limit,
    });
  }

  const query = groq`
      *[
        _type == "blog" &&
        slug.current != $slug &&
        language == $language
      ]
      | order(_createdAt desc)[0...${limit}]{
        _id,
        title,
        slug,
        coverImage,
        excerpt,
        category->{ title },
        tags[]->{ title, slug }
      }
    `;

  return sanityClient.fetch(query, {
    slug,
    language,
    limit,
  });
};

export const getBlogsForSitemap = async () => {
  const query = groq`
      *[_type == "blog"] {
        slug,
        publishedAt
      }
    `;
  return sanityClient.fetch(query);
};

export const getEvents = async (language: string) => {
  const query = groq`
    {
      "active": *[
        _type == "event" &&
        language == $language &&
        startDate <= now() &&
        endDate > now()
      ] | order(startDate asc) {
        _id,
        title,
        slug,
        description,
        coverImage,
        startDate,
        endDate,
        location,
        tags,
        language,
        sponsors,
        content
      },

      "upcoming": *[
        _type == "event" &&
        language == $language &&
        startDate > now()
      ] | order(startDate asc) {
        _id,
        title,
        slug,
        description,
        coverImage,
        startDate,
        endDate,
        location,
        tags,
        language,
        sponsors,
        content
      },

      "past": *[
        _type == "event" &&
        language == $language &&
        endDate <= now()
      ] | order(endDate desc) {
        _id,
        title,
        slug,
        description,
        coverImage,
        startDate,
        endDate,
        location,
        tags,
        language,
        sponsors,
        content
      }
    }
  `;

  const events = await sanityClient.fetch(query, { language });
  return events;
};

export const getEventBySlug = async (slug: string) => {
  const query = groq`
    *[_type == "event" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      description,
      coverImage,
      startDate,
      endDate,
      location,
      tags,
      language,
      sponsors,
      content
    }
  `;
  return sanityClient.fetch(query, { slug });
};

export const getEventsForSitemap = async () => {
  const query = groq`
    *[_type == "event"] {
      slug,
      publishedAt
    }
  `;
  return sanityClient.fetch(query);
};