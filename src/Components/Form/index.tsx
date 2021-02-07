import axios from 'axios';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts, setPost } from '../../store/ducks/posts/actions';

const Form = () => {

  let urlInput = useRef<HTMLInputElement>(null)
  let descricaoInput = useRef<HTMLInputElement>(null)

  const { name, userPicture } = useSelector((state: any) => state.user)
  const dispatch = useDispatch()
 
  const buscaPosts = () => {
    axios.get("http://localhost:4000/posts")
        .then(resposta => dispatch(getPosts(resposta.data)))
}
  function newPost() {
    const requisicao: any = {
      user: name,
      userPicture: userPicture,
      postPicture: urlInput.current?.value,
      location: "Brasil",
      description: descricaoInput.current?.value,
      likes: 0
    }
    dispatch(setPost(requisicao))
    buscaPosts()
  }

  return (
    <div className="form">
      <p>Faça uma postagem aqui</p>
      <input type="text" placeholder="Cole a url da imagem" ref={urlInput} />
      <input type="text" placeholder="Digite uma descrição" ref={descricaoInput} />
      <button onClick={() => newPost()}>Postar!</button>
    </div>
  );
}

export default Form;