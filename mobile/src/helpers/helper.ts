import { IPost } from "../types/posts";
import { IAccount } from "../types/users";

export const countLikes = (data: IPost[]) => {
  if(data) {
    const sum = data.reduce((a: number, b: IPost) => {
      return a + b.likes.length
    }, 0);
    return sum
  }

  return 0;
};

export const sortAccounts = (data: IAccount[]): IAccount[] => {
  let temp = data;
  temp.sort((a: IAccount, b: IAccount) => countLikes(b.posts) - countLikes(a.posts));
  return temp;
}

export const formatText = (length: number, text: string) => {
  if (text.length > length) {
    return `${text.slice(0, length)}...`;
  }

  return `${text.slice(0, length)}`;
};
