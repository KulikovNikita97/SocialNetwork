import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../common/FormsControls/FormsControls';

let AddNewPostForm = (props) => {
  return (
    <form className={s.textarea_and_button}
      onSubmit={props.handleSubmit}>
      <div>
        <Field name={'newPostText'}
          placeholder={'What do you think about?'}
          component={Textarea}
        />
      </div>
      <div>
        <button className={s.button_add_new_post}>
          Add a new post
        </button>
      </div>
    </form>
  )
}

let AddNewPostFormRedux = reduxForm({ form: 'ProfileAddNewPostForm' })(AddNewPostForm)

const MyPosts = React.memo(props => {

  let postsElements = [...props.posts]
    .reverse()
    .map(p =>
      <Post message={p.message}
        likesCount={p.likesCount}
        key={p.id}
      />);

  let onAddPost = (values) => {
    props.addPost(values.newPostText)
  };

  return (
    <div className={s.name_of_title}>
      <hr></hr>
      {/* <h3>User's posts:</h3> */}
      <h3>  </h3>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
});

export default MyPosts;