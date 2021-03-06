import React from 'react'

import { addPostActionCreator, onPostChangeActionCreator } from "../../../redux/profilePage-reduser";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";


const mapStateToProps = (state) => {
  return {
    post: state.profilePage.postData,
    newPostText: state.profilePage.newPostText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

    addPost:(createNewPostMessage)=> {
      dispatch(addPostActionCreator(createNewPostMessage))
    }
    
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer