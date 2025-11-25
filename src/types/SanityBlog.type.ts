import { Image } from "sanity";
import { SanityAuthor } from "./SanityAuthor.type";
import { PortableTextBlock } from "next-sanity";

export type SanityBlogCategory = {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  description: string;
};

export type SanityBlog = {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  category: SanityBlogCategory;
  excerpt: string;
  coverImage: Image;
  author: SanityAuthor;
  content: PortableTextBlock[];
};