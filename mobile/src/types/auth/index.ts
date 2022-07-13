export interface IUser {
  _id: string,
  firstName?: string,
  lastName: string
}

export interface IAccount {
  user: string,
}

export interface IAuthState {
  user: IUser,
  account: IAccount,
  logging: Boolean,
  logging_error: string | void,
  error: string | void,
  registering: Boolean,
  registering_message: string | void,
  token: string,
}

export type LoginDto = {
  email: string;
  password: string;
};

export type RegisterDto = {
  email: string;
  password: string;
  username: string;
  phone: string;
}
