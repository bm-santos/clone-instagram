import axios from 'axios';
import React, { useRef } from 'react';
import { useSelector } from 'react-redux';

const Form = () => {

  let urlInput = useRef<HTMLInputElement>(null)
  let descricaoInput = useRef<HTMLInputElement>(null)

  const { likes } = useSelector((state: any) => state.posts)
  console.log(likes)
  function newPost() {

    
    const requisicao = {

      user: "teste",
      userPicture: "teste",
      postPicture: urlInput.current?.value,
      location: "teste",
      description: descricaoInput.current?.value,
      likes: 0
    }

//    axios.post("http://localhost:4000/posts/", requisicao)
  //  axios.get("http://localhost:4000/posts/")
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