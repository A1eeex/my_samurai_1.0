import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./redux/state";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addMesagePosts, addNewDialogMessage, updateNewDialogMessageText, updateNewPostText } from "./redux/state"
import { BrowserRouter } from "react-router-dom";


let rerenderEntireThree = (state)=>{
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          state={store.getState()}
          addMesagePosts={store.addMesagePosts.bind(store)}
          updateNewDialogMessageText={store.updateNewDialogMessageText.bind(store)}
          addNewDialogMessage={store.addNewDialogMessage.bind(store)}
          updateNewPostText={store.updateNewPostText.bind(store)}
        />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderEntireThree (store.getState())
store.subscribe(rerenderEntireThree)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
