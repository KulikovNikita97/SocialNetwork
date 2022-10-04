import { changePoniesNumberAC, addPostAC } from '../../Redux/profileReducer';
import MyPosts from './MyPosts/MyPosts'
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {

    addPost: (newPostText) => {
      dispatch(addPostAC(newPostText));
    },

    changePoniesNumber: (value) => {
      let action = changePoniesNumberAC(value)
      dispatch(action);
    },

  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;