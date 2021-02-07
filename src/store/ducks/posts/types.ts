export enum PostsTypes {
    GET_POSTS = 'GET_POSTS',
    SET_POST = 'SET_POST',
    SET_LIKE = 'SET_LIKE'
}

export interface PostItem {
    id: number,
    user: string,
    userPicture: string,
    postPicture: string,
    description: string,
    likes: number,
    location: string,
}

export interface PostsList {
    arrayPosts: PostItem[]
}

export interface PostsState {
    posts: PostsList
}