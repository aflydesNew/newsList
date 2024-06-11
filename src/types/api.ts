export interface INews {
    name: string
    code: number|string
    previewText: string
    type: {
        value: string
        xmlId: string
    }
    date: number
    link: string
    image: string
}