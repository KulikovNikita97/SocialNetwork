// import profileReducer, {addPostAC, deletePost} from "./profileReducer";
// import React from 'react'

// let state = {
//   posts: [
//     { id: 0, message: 'Hi, how are you?', likesCount: 12 },
//     { id: 1, message: 'It\'s my first post', likesCount: 17 },
//     { id: 2, message: 'When did you go, my love', likesCount: 145 }
//   ],
// }

// it('message of new post should be correct', () => {
//   let action = addPostAC('text');
  
//   let newState = profileReducer(state, action);
//   expect(newState.posts.length).toBe(4);
// });

// it('length of posts should be incremented', () => {
//   let action = addPostAC('text');

//   let newState = profileReducer(state, action);
//   expect(newState.posts[3].message).toBe('text')
// });

// it('after deleting length should not be decrement if id is incorrect', () => {
//   let action = deletePost(1000);
  
//   let newState = profileReducer(state, action);
//   expect(newState.posts.length).toBe(3);
// });