import axios from "axios";
import { useEffect, useState } from "react";
import { FiHeart } from "react-icons/fi";

const Posts = () => {
    const [postList, setPostList] = useState<any[]>([])

    function buscaPost() {
        axios.get("http://localhost:4000/posts")
            .then(resposta => setPostList(resposta.data))
    }
    useEffect(() => (
        buscaPost()
    ),[]) 

    function atualizaLike(item: any) {
        const requisicao = {
            likes: item.likes + 1
        }
        
        axios.patch(`http://localhost:4000/posts/${item.id}`, requisicao);
        buscaPost()
    }

    return (
        <>
            {
                postList && postList.slice(0).reverse().map((item: any) => ( //slice com o reverse permite trazer o post mais recente, ou seja, maior ID
                    <div key={item.id} className="post">

                        <header>
                            <img src={item.userPicture} alt="user" />
                            <div className="post-user">
                                <strong>{item.user}</strong>
                                <span>{item.location}</span>
                            </div>
                        </header>
                        <div className="post-image">
                            <img src={item.postPicture} alt="post" />
                        </div>
                        <div className="post-likes">
                            <FiHeart onClick={() => atualizaLike(item)} />{item.likes}
                        </div>
                        <p>{item.description}</p>
                    </div>
                ))
            }
        </>
    )
}

export default Posts;
