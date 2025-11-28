import { defineField, defineType } from "sanity";
import author from "./author";
import language from "./language";
import { slugify } from "@/lib/utils";

export default defineType({
    name: "course",
    title: "Eğitimler",
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
            options: { source: "title", slugify: (input) => slugify(input) },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "description",
            title: "Kısa Açıklama",
            type: "text",
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
            name: "content",
            title: "İçerik",
            type: "array",
            of: [{ type: "block" }, { type: "image", options: { hotspot: true } }],
        }),
        defineField({
            name: "lecturer",
            title: "Eğitmen",
            type: "reference",
            to: [author],
            validation: (Rule) => Rule.required(),
        }),
        language,
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
        })
    ],
})