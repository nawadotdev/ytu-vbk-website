import { defineType, defineField } from "sanity";
import { slugify } from "@/lib/utils";

export default defineType({
  name: "author",
  title: "Yazarlar",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string" }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "name", slugify: (input) => slugify(input) } }),
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "avatar", title: "Avatar", type: "image", options: { hotspot: true } }),
    defineField({ name: "bio", title: "Bio", type: "text" }),
  ],
});
