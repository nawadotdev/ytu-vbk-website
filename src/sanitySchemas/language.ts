import { defineField } from "sanity"

export default defineField({
  name: "language",
  title: "Dil",
  type: "string",
  options: {
      list: [
          { title: "Türkçe", value: "TR" },
          { title: "İngilizce", value: "EN" },
      ],
  },
  validation: (Rule) => Rule.required(),
})