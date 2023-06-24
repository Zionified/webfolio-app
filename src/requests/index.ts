import axios from "axios"
import type { Article, Experience, Project, Pagination } from "@/types"

export const listExperiences = async () => {
    const response = await axios.get("/api/v1/experiences")
    // console.log(response)
    return response.data.data.items as Experience[]
}

export const listProjects = async () => {
    const response = await axios.get("/api/v1/projects")
    return response.data.data.items as Project[]
}

export const getMapping = async (key: string) => {
    const response = await axios.get("/api/v1/mappings", {
        params: { keys: JSON.stringify([key]) },
    })
    return response.data.data[key] as string
}

export const listTags = async () => {
    const response = await axios.get("/api/v1/tags")
    return (response.data.data.items as { tag: string }[]).map((tag) => tag.tag)
}

export const listArticles = async () => {
    const response = await axios.get("/api/v1/articles")
    return response.data.data as Pagination<Article>
}

export const getArticle = async (articleId: number) => {
    const response = await axios.get(`/api/v1/articles/${articleId}`)
    return response.data.data.article as Article
}
