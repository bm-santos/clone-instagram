import React from "react";
import './App.css';
import { Provider } from 'react-redux';
import { store } from './store'

import Form from "./Components/Form";
import Posts from "./Components/Posts";
import Stories from "./Components/Stories";
import UserInfo from "./Components/UserInfo";
import Header from "./Components/Header";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <div className="home">
        <div className="post-container">
          <Form />
          <Posts />
        </div>
        <div>
          <UserInfo />
          <Stories />
        </div>
      </div>
    </Provider>
  );
}

export default App;
