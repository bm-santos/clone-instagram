import { Posts, PostsTypes } from "./types";

const initialStatePosts: Posts = {
    user: '',
    userPicture: '',
    postPicture: '',
    description: '',
    likes: 0
}

function reducerPosts(state = initialStatePosts, action: any) {
    switch (action.type) {
        case PostsTypes.GET_POSTS:
            return {
                user: action.payload.user,
                userPicture: action.payload.userPicture,
                postPicture: action.payload.postPicture,
                description: action.payload.description,
                likes: action.payload.likes
            }
        case PostsTypes.LIKE:
            return{
                likes: action.payload.likes + 1
            }
        default:
            return state;
    }
}

export default reducerPosts