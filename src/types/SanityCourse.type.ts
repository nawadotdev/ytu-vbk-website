import { Image } from "sanity"
import { SanityAuthor } from "./SanityAuthor.type"

export type SanityCourse = {
    _id: string
    title: string
    slug: {
        current: string
    }
    description: string
    coverImage: Image
    startDate: string
    endDate: string
    lecturer: SanityAuthor
    language: "TR" | "EN"
}