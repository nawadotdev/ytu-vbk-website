import { PortableTextBlock } from "next-sanity"
import { Image } from "sanity"

export type SanityGraduate = {
    _id: string
    name: string
    slug: {
        current: string
    }
    image: Image
    description: string
    education: {
        _id: string
        title: string
        institution: string
        degree?: string
        department?: string
        startDate: string
        endDate: string
    }[],
    experience: {
        _id: string
        company: string
        position: string
        startDate: string
        endDate?: string
    }[],
    skills: string[],
    languages: string[],
    projects: {
        _id: string
        title: string
        description: string
        url: string
    }[],
    content: PortableTextBlock[]
}