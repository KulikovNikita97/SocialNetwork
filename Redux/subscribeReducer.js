
// import { stopSubmit } from 'redux-form';
// import { usersAPI, profileAPI } from '../api/api';
// import { updateObjectInArray } from '../utils/objectHelpers';

// const ADD_POST = 'ADD-POST';
// const CHANGE_PONIES_NUMBER = 'CHANGE-PONIES-NUMBER';
// const SET_USER_PROFILE = 'SET_USER_PROFILE';
// const SET_STATUS = 'SET_STATUS';
// const DELETE_POST = 'DELETE_POST';
// const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

// const FOLLOW = 'FOLLOW';
// const UNFOLLOW = 'UNFOLLOW';
// const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

// let initialState = {
//     posts: [
//         { id: 0, message: 'Hi, how are you?', likesCount: 12 },
//         { id: 1, message: 'It\'s my first post', likesCount: 17 },
//         { id: 2, message: 'When did you go, my love', likesCount: 145 }
//     ],
//     profile: null,
//     status: "",
//     isFetching: true,
//     followingInProgress: [],
//     users: []
// }

// const profileReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case FOLLOW:
//             debugger
//             return {
//                 ...state,
//                 users: updateObjectInArray(
//                     state.users,
//                     action.userId,
//                     "id",
//                     { followed: true }
//                 )
//             };

//         case UNFOLLOW:
//             return {
//                 ...state,
//                 users: updateObjectInArray(
//                     state.users,
//                     action.userId,
//                     "id",
//                     { followed: false }
//                 )
//             };
//     }
// }

// export const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
//     dispatch(toggleFollowingProgress(true, userId))
//     let response = await apiMethod(userId)
//     if (response.resultCode === 0) {
//         dispatch(actionCreator(userId));
//     }
//     dispatch(toggleFollowingProgress(false, userId));
// }

// export const follow = (userId) => {
//     return async (dispatch) => {
//         debugger
//         followUnfollowFlow(
//             dispatch,
//             userId,
//             usersAPI.follow.bind(usersAPI),
//             followSuccess
//         );
//     };
// }

// export const unfollow = (userId) => {
//     return async (dispatch) => {
//         followUnfollowFlow(
//             dispatch,
//             userId,
//             usersAPI.unfollow.bind(usersAPI),
//             unfollowSuccess
//         );
//     };
// }