export interface Tag {
    id: string
    name: string
}

interface Anime {
    title: string
    description: string
    tags: Tag[]
    subTags: SubTag[]
    id: string
}

interface Tag {
    averageRatings: number
    name: string
    id: string
}

interface SubTag {
    id: string
    name: string
}