import React from "react";
import { Provider } from "react-redux";
//import { createStore, applyMiddleware } from "redux";

import "./App.css";
import Post from "./components/Post";
import PostForm from "./components/PostForm";
//const store = createStore(() => [], {}, applyMiddleware());

import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PostForm />
        <hr />
        <Post />
      </div>
    </Provider>
  );
}

export default App;
