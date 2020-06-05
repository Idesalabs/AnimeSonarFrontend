
export interface Anime {
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

interface ReturnSubTag {
    value: string
    label: string
}

interface ReturnTag {
    averageRatings: number
    value: string
    label: string
}