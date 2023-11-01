export interface PostType {
	id: number
	createdAt: Date
	updatedAt: Date
	title: string
	content: string | null
	slug: string
	published: boolean
}

export type PostsType = PostType[]
