import { UserTypes, Usuario } from "./types";

const initialStateUser: Usuario = {
    name: '',
    username: '',
    userPicture: ''
}

function reducerUser(state = initialStateUser, action: any) {
    switch (action.type) {
        case UserTypes.GET_USER_INFO:
            return {
                name: action.payload.name,
                username: action.payload.username,
                userPicture: action.payload.userPicture
            }
        default:
            return state
    }
}

export default reducerUser