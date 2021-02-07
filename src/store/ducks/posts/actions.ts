import { action } from "typesafe-actions";
import { PostItem, PostsTypes } from "./types";

export const getPosts = (payload: any) => action(PostsTypes.GET_POSTS, payload)
export const setLike = (payload: any) => action(PostsTypes.SET_LIKE, payload)
export const setPost = (payload: PostItem) => action(PostsTypes.SET_POST, payload)
