import { IPost } from "../types/posts"

export const countLikes = (data: IPost[]) => {
  const sum = data.reduce((a: number, b: IPost) => {
    return a + b.likes.length
  }, 0);
  return sum
};

export const sort = (data: Array<any>, sortParam: string) => {

}