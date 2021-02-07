import axios from 'axios';
import { PostsTypes } from "./types";

const initialStatePosts: any = {
    arrayPosts: [],
    arrayPost: [],
    user: "",
    userPicture: "",
    postPicture: "",
    description: "",
    likes: 0,
    location: ""
}


function reducerPosts(state = initialStatePosts, action: any) {
    switch (action.type) {
        case PostsTypes.GET_POSTS:
            return {
                ...state,
                arrayPosts: action.payload
            }
        case PostsTypes.SET_LIKE:
            const requisicao: any = {
                likes: action.payload.likes + 1
            }
            axios.patch(`http://localhost:4000/posts/${action.payload.id}`, requisicao)
            return {
                ...state,
                likes: action.payload.likes + 1
            }
        case PostsTypes.SET_POST:
            axios.post("http://localhost:4000/posts", action.payload)
            return {
                user: action.payload.user,
                userPicture: action.payload.userPicture,
                postPicture: action.payload.postPicture,
                description: action.payload.description,
                likes: action.payload.likes,
                location: action.payload.location
            }
        default:
            return state
    }
}

export default reducerPosts

