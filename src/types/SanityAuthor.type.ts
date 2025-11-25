import { Image } from "sanity";

export type SanityAuthor = {
  _id: string;
  name: string;
  title: string;
  avatar: Image;
  bio: string;
};