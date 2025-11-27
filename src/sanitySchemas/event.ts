import { defineType, defineField } from "sanity";
import language from "./language";

export default defineType({
  name: "event",
  title: "Etkinlikler",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Başlık",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 120 },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "description",
      title: "Kısa Açıklama",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "coverImage",
      title: "Kapak Görseli",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "startDate",
      title: "Başlangıç Tarihi",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "endDate",
      title: "Bitiş Tarihi",
      type: "datetime",
    }),

    defineField({
      name: "location",
      title: "Konum",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),

    language,

    defineField({
      name: "sponsors",
      title: "Sponsorlar",
      type: "array",
      of: [
        defineField({
          name: "sponsor",
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Sponsor Adı",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "link",
              title: "Link",
              type: "url",
            }),
            defineField({
              name: "image",
              title: "Logo",
              type: "image",
              options: { hotspot: true },
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: "content",
      title: "İçerik",
      type: "array",
      of: [
        { type: "block" },
        { type: "image", options: { hotspot: true } },
      ],
    }),
  ],
});
