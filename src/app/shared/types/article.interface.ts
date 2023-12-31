import { PopularTagType } from "./popularTag.type"
import { ProfilerInterface } from "./profile.interface"

export interface ArticleInterface {
  body: string
  createdAt: string
  description: string
  favorited: boolean
  favoritesCount: number
  slug: string
  tagList: PopularTagType[]
  title: string
  updatedAt: string
  author: ProfilerInterface
}