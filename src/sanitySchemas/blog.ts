import { defineType, defineField } from "sanity";
import author from "./author";
import language from "./language";
import slugify from "slugify";

export const BlogCategory = defineType({
  name: "blogCategory",
  title: "Blog Kategorileri",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" } }),
    defineField({ name: "description", title: "Description", type: "text" }),
  ],
});


export const Blog = defineType({
  name: "blog",
  title: "Bloglar",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        slugify: (input) => {
          const turkishCharMap: Record<string, string> = {
            "ö": "o",
            "Ö": "o",
            "ü": "u",
            "Ü": "u",
            "ğ": "g",
            "Ğ": "g",
            "ş": "s",
            "Ş": "s",
            "ı": "i",
            "İ": "i",
            "ç": "c",
            "Ç": "c",
          };
          const normalizedInput = input.replace(/[öÖüÜğĞşŞıİçÇ]/g, (char) => turkishCharMap[char] || char);
          return slugify(normalizedInput, {
            lower: true,
            strict: true,
            trim: true,
          });
        }
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Kategori",
      type: "reference",
      to: [BlogCategory],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Kısa Açıklama",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "coverImage",
      title: "Kapak Görseli",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "author",
      title: "Yazar",
      type: "reference",
      to: [author],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tags",
      title: "Etiketler",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({
      name: "content",
      title: "İçerik",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
    }),
    defineField({
      name: "publishedAt",
      title: "Yayınlanma Tarihi",
      type: "datetime",
    }),
    language
  ],
});