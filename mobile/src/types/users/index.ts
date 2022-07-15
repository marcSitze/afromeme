export interface IUser {
  _id: string,
  firstName?: string,
  lastName: string,
  username: string,
}

export interface IAccount {
  _id: string,
  user: any, // todo add user props
  posts: Array<any>, // tobe defined
  followers: Array<any> // tobe defined
}

export interface IUserState {
  user: IUser,
  account: IAccount,
  error: string | void,
  view_profile: IAccount,
  view_profile_loading: Boolean,
  view_profile_msg: string,
}