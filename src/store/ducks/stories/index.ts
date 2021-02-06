import { Stories, StoriesTypes } from "./types";

const initialStateStories: Stories = {
    user: '',
    userPicture: '',
    time: ''
}

function reducerStories(state = initialStateStories, action: any) {
    switch (action.type) {
        case StoriesTypes.GET_STORIES:
            return {
                user: action.payload.user,
                userPicture: action.payload.userPicture,
                time: action.payload.time
            }
        default:
            return state
    }
}

export default reducerStories