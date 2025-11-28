import { defineField, defineType } from "sanity";
import language from "./language";

export default defineType({
    name: "graduate",
    title: "Mezunlar",
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "Adı",
            type: "string",
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: { source: "name", maxLength: 120 },
        }),
        defineField({
            name: "image",
            title: "Görsel",
            type: "image",
        }),
        defineField({
            name: "description",
            title: "Açıklama",
            type: "text",
        }),
        defineField({
            name: "education",
            title: "Eğitim",
            type: "array",
            of: [{
                type: "object", fields: [
                    defineField({ name: "institution", title: "Okul", type: "string" }),
                    defineField({ name: "department", title: "Bölüm", type: "string" }),
                    defineField({
                        name: "degree", title: "Derece", type: "string", options: {
                            list: [
                                { title: "Doktora", value: "Ph.D." },
                                { title: "Yüksek Lisans", value: "M.Sc." },
                                { title: "Lisans", value: "B.Sc." },
                                { title: "Ön Lisans", value: "B.A." },
                            ],
                            layout: "dropdown"
                        }
                    }, {
                    }),
                    defineField({ name: "startDate", title: "Başlangıç Tarihi", type: "date" }),
                    defineField({ name: "endDate", title: "Bitiş Tarihi", type: "date" }),
                ]
            }],
        }),
        defineField({
            name: "experience",
            title: "Deneyim",
            type: "array",
            of: [{
                type: "object", fields: [
                    defineField({ name: "company", title: "Şirket", type: "string" }),
                    defineField({ name: "position", title: "Pozisyon", type: "string" }),
                    defineField({ name: "startDate", title: "Başlangıç Tarihi", type: "date" }),
                    defineField({ name: "endDate", title: "Bitiş Tarihi", type: "date" }),
                ]
            }],
        }),
        defineField({
            name: "skills",
            title: "Yetenekler",
            type: "array",
            of: [{ type: "string" }],
        }),
        defineField({
            name: "languages",
            title: "Diller",
            type: "array",
            of: [{ type: "string" }],
        }),
        defineField({
            name: "projects",
            title: "Projeler",
            type: "array",
            of: [{
                type: "object", fields: [
                    defineField({ name: "title", title: "Başlık", type: "string" }),
                    defineField({ name: "description", title: "Açıklama", type: "text" }),
                    defineField({ name: "url", title: "URL", type: "url" }),
                ]
            }],
        }),
        defineField({
            name: "content",
            title: "İçerik",
            type: "array",
            of: [{ type: "block" }, { type: "image", options: { hotspot: true } }],
        }),
        language
    ],
});