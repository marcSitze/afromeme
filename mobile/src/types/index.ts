import { IPostState } from './posts';

export type Action = {
    type: string,
    payload: any,
}

export type PropsState = {
    postsReducer: IPostState
}