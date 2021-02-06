export enum StoriesTypes {
    GET_STORIES = '@GET_STORIES'
}

export interface Stories {
    user: string,
    userPicture: string,
    time: string
}