export interface IUser {
  _id: string,
  firstName?: string,
  lastName: string
}

export interface IAccount {
  user: any, // todo add user props
  posts: Array<any>, // tobe defined
  followers: Array<any> // tobe defined
}

export interface IUserState {
  user: IUser,
  account: IAccount,
  error: string | void
}