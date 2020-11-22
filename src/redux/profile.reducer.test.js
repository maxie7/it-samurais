import React from "react";
import profileReducer, {addPostActionCreator, deletePost} from "./profile.reducer";

let state = {
  posts: [
    {id: 1, message: 'Hello, how are you?', likes: 15},
    {id: 2, message: 'It\'s my first post', likes: 20}
  ]
};

it('new post should be added', () => {
  let action = addPostActionCreator("bla-bla.com");
  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(3);
});

it('message of new post should be like bla-bla.com', () => {
  let action = addPostActionCreator("bla-bla.com");
  let newState = profileReducer(state, action);

  expect(newState.posts[2].message).toBe("bla-bla.com");
});

it('a post should be deleted', () => {
  let action = deletePost(1);
  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(1);
});

it(`length should not be decremented if id is incorrect`, () => {
  let action = deletePost(1000);
  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(2);
});