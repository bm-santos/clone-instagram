export enum PostsTypes {
    GET_POSTS = '@GET_POSTS',
    SET_POSTS = '@SET_POSTS',
    LIKE= '@LIKE'
}

export interface Posts {
    user: string,
    userPicture: string,
    postPicture: string,
    description: string,
    likes: number,
}

export interface PostState {
    posts: Posts
}