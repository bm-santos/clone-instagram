import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUsuario } from "../../store/ducks/user/actions"

const UserInfo = () => {

    const dispatch = useDispatch()

    const { name, username, userPicture } = useSelector((state: any) => state.user)

    useEffect(() => {
        axios.get("http://localhost:4000/user")
            .then(resposta => dispatch(getUsuario(resposta.data)))
    }, [dispatch])

    return (
        <>
            <div className="user-info">
                <img
                    alt="Perfil"
                    src={userPicture}
                />
                <div className="user-bio">
                    <strong>{name}</strong>
                    <span>{username}</span>
                </div>
            </div>
        </>
    )
}

export default UserInfo