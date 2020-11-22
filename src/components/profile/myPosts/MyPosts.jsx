import React from 'react';
import Post from './post/Post';
import classes from './MyPosts.module.css';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/formsControls/formsControls";

const maxLength10 = maxLengthCreator(10);

let AddNewPostForm = (props) => {
  return (
    <form onSubmit={ props.handleSubmit }>
      <div>
        <Field component={Textarea}
               name={"newPostText"}
               validate={[required, maxLength10]}
               placeholder="Add new post text" />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}

let AddNewPostFormRedux = reduxForm({ form: "profileAddNewPostForm" })(AddNewPostForm);

const MyPosts = React.memo(props => {
  let postsElements =
    [...props.posts]
    .reverse()
    .map(post => <Post message={post.message} likes={post.likes}/>);
  // let newPostElement = React.createRef();

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  }

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      <div className={classes.posts}>
        {postsElements}
      </div>
    </div>
  )
});

export default MyPosts;