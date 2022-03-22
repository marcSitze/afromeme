export interface IPost {
    id: string,
    message: string
}

export interface IPostState {
    posts: Array<IPost>,
    loading: Boolean,
    error: string | void,
    creating: Boolean,
    creatingError: string | void
}