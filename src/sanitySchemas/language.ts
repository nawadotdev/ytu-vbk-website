import { defineField } from "sanity"

export default defineField({
    name: "language",
    title: "Dil",
    type: "string",
    validation: (Rule) => Rule.required(),
    options: {
      list: [
        { title: "Türkçe", value: "TR" },
        { title: "İngilizce", value: "EN" },
      ],
      layout: "radio",
    }
})