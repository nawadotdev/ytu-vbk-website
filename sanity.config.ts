import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import schemas from "@/sanitySchemas";

export default defineConfig({
  projectId: "otmr34tv",
  dataset: "production",
  title: "YTU Data Science Club",
  basePath: "/sanity",
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemas,
  },
});
