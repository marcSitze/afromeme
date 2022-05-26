// import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
// import { NavigatorScreenParams, CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack'
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
import type {
    CompositeScreenProps,
    NavigatorScreenParams,
  } from '@react-navigation/native';
  import type { StackScreenProps } from '@react-navigation/stack';
  import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

  export type RootStackParamList = {
    HOME?: NavigatorScreenParams<HomeTabParamList>;
    HELLO?: NavigatorScreenParams<HomeTabParamList>;
    LOGIN: NavigatorScreenParams<any>;
    REGISTER: NavigatorScreenParams<any>;
    BOTTOM_NAVIGATION: NavigatorScreenParams<any>;
    WAITING_SCREEN: NavigatorScreenParams<any>;
    UPLOAD: NavigatorScreenParams<any>;
    VIEW_PROFILE: NavigatorScreenParams<any>;
    // PostDetails: { id: string };
    // NotFound: undefined;
  };

  export type RootStackScreenProps<T extends keyof RootStackParamList> =
    StackScreenProps<RootStackParamList, T>;

  export type HomeTabParamList = {
    Popular: undefined;
    Latest: undefined;
    navigate: Function;
  };

  export type HomeTabScreenProps<T extends keyof HomeTabParamList> =
    CompositeScreenProps<
      BottomTabScreenProps<HomeTabParamList, T>,
      RootStackScreenProps<keyof RootStackParamList>
    >;

  declare global {
    namespace ReactNavigation {
      interface RootParamList extends RootStackParamList {}
    }
  }