import { defineType, defineField } from "sanity";

export default defineType({
  name: "blogCategory",
  title: "Blog Categories",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" } }),
    defineField({ name: "description", title: "Description", type: "text" }),
  ],
});