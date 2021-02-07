import axios from "axios";
import { useEffect } from "react";
import { FiHeart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { getPosts, setLike } from "../../store/ducks/posts/actions";
import { PostItem, PostsState } from "../../store/ducks/posts/types";

const Posts = () => {
    const dispatch = useDispatch()

    const listaPosts = useSelector((state: PostsState) => state.posts.arrayPosts)
    const posts = useSelector((state: any) => state.posts.arrayPost)

    useEffect(() => (
        buscaPosts()
    ), [posts])

    const buscaPosts = () => {
        axios.get("http://localhost:4000/posts")
            .then(resposta => dispatch(getPosts(resposta.data)))
    }

    function somaLike(item: any) {
        dispatch(setLike(item))
        buscaPosts()
    }
    /*function deletaPost(id: number) {
        axios.delete(`http://localhost:4000/posts/${id}`)
        buscaPosts()
    }*/

    return (
        <>
            {((listaPosts !== undefined) && (listaPosts !== null)) && listaPosts.slice(0).reverse().map((item: PostItem) => (
                <div className="post">
                    <header>
                        <img src={item.userPicture} alt={item.user} />
                        <div className="post-user">
                            <strong>{item.user}</strong>
                            <span>{item.location}</span>
                        </div>
                    </header>
                    <div className="post-image">
                        <img src={item.postPicture} alt="post" />
                    </div>
                    <div className="post-likes">
                        <FiHeart onClick={() => somaLike(item)} />{item.likes} {/* <button onClick={() => deletaPost(item.id)}> X </button>*/}
                    </div>
                    <p>{item.description}</p>
                </div>
            ))}
        </>
    )
}

export default Posts;
