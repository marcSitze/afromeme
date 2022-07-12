// import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
// import { NavigatorScreenParams, CompositeScreenProps } from '@react-navigation/native';
import { IPostState } from './posts';
import { IAuthState } from './auth';
import { IUserState } from './users';

// action type
export type Action = {
  type: string,
  payload: any,
}

// stateProps
export type PropsState = {
  postsReducer: IPostState,
  authReducer: IAuthState,
  usersReducer: IUserState,
}

// navigation types