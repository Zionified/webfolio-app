export type Pagination<T extends any> = {
    total: number
    more: boolean
    items: T[]
}
