import { IUser } from "../users"
import { IPost } from "../posts"

export interface SearchData {
  posts: IPost[],
  users: IUser[]
}

export interface ISearchState {
  searching: boolean,
  searchData: SearchData,
}