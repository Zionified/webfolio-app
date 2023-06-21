export type Project = {
    id: number,
    title: string,
    name: string,
    description: string,
    image: string,
    github: string,
    starCount?: number,
    installCount?: number,
    tags: string[]
}
