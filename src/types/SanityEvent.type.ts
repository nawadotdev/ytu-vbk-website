import { Image } from "sanity"
import { PortableTextBlock } from "next-sanity"

export type SanityEvent = {
    _id: string
    title: string
    slug: {
        current: string
    }
    description: string
    coverImage: Image
    startDate: string
    endDate: string
    location: string
    tags: string[]
    language: string
    sponsors: {
        _id: string
        title: string
        link?: string
        image: Image
    }[],
    content: PortableTextBlock[]
}