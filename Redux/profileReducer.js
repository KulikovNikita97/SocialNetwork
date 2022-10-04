// import RarityAva from '../media/rarityAva.png';
// import TwiAva from '../media/TwiAva.png';
// import RainbowAva from '../media/RainbowAva.png';
// import AppleAva from '../media/AppleAva.png';
// import ShyAva from '../media/ShyAva.png';
// import PinkieAva from '../media/PinkieAva.png';

import { stopSubmit } from 'redux-form';
import { usersAPI, profileAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const CHANGE_PONIES_NUMBER = 'CHANGE-PONIES-NUMBER';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

let initialState = {
  posts: [
    { id: 0, message: 'Hi, how are you?', likesCount: 12 },
    { id: 1, message: 'It\'s my first post', likesCount: 17 },
    { id: 2, message: 'When will you go, my love', likesCount: 145 }
  ],
  profile: null,
  newPostText: "",
  status: "My status"

  // slider: {
  //   currentNumber: 0,
  //   ponies: [
  //     {
  //       name: "Rarity",
  //       description: "My name is Rarity. I'm 24 years old. I'm from Ponyville, Canterlot district. I'm a fashion desighner, and an owner of two boutiques - in Canterlot and Manehatten. I cooperate with many famous show-business ponies: singers, photographiers, desighners as well as with members of the Royal Suite, ministers, militaries and courters.",
  //       ava: RarityAva
  //     },

  //     {
  //       name: "Twilight Sparkle",
  //       description: "My name is Twilight Sparkle. I'm 25 years old. I'm from Canterlot. I'm the Princess of Friendship, but I did not always have this title. I was born as a unicorn. My extraordinary magical abilities were detected by Princess Celestia and she became to learn me in Thier Majesty's High School of Wizarding. I was a capable pupil, but I did not have friends at all. That's why Princess Celestia sent me to Ponyville where I found five loyal friends afterwards. Together we endured a lot of hardships, fun moments, moments of our general sadness and happiness, won a lot of evils, helped spread of Magic of Friendship further, even beyond Equestria, to another countries and lands.",
  //       ava: TwiAva
  //     },

  //     {
  //       name: "Rainbow Dash",
  //       description: "rd",
  //       ava: RainbowAva
  //     },

  //     {
  //       name: "Applejack",
  //       description: "aj",
  //       ava: AppleAva
  //     },

  //     {
  //       name: "Fluttershy",
  //       description: "fs",
  //       ava: ShyAva
  //     },

  //     {
  //       name: "Pinkie Pie",
  //       description: "pp",
  //       ava: PinkieAva
  //     },
  //   ]

  // },
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_POST: {
      let newPost = {
        id: 5,
        message: action.newPostText,
        likesCount: 12
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      };
    }

    case SET_STATUS: {
      return {
        ...state,
        status: action.status
      };
    }

    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter(p => p.id !== action.postId)
      };
    }

    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      };
    }

    case SAVE_PHOTO_SUCCESS:
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos }
      }

    // case CHANGE_PONIES_NUMBER:
    //   let stateCopy = { ...state };
    //   if (stateCopy.slider.currentNumber + action.value === -1) {
    //     stateCopy.slider.currentNumber = stateCopy.slider.ponies.length
    //   }
    //   if (stateCopy.slider.currentNumber + action.value ===
    //     stateCopy.slider.ponies.length) {
    //     stateCopy.slider.currentNumber = -1
    //   }
    //   stateCopy.slider.currentNumber = stateCopy.slider.currentNumber + action.value;

    //   return stateCopy;

    default:
      return state;
  }
}

export const addPostAC = (newPostText) => ({ type: ADD_POST, newPostText });
export const changePoniesNumberAC = (value) => ({ type: CHANGE_PONIES_NUMBER, value: value });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })
export const deletePost = (postId) => ({ type: DELETE_POST, postId })
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos })

export const getUserProfile = (userId) => async (dispatch) => {
  let response = await usersAPI.getProfile(userId);
  dispatch(setUserProfile(response.data));
};

export const getStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data));
};

export const updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status);

  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

export const savePhoto = (file) => async (dispatch) => {
  let response = await profileAPI.savePhoto(file);

  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos));
  }
};

export const saveProfile = (profile) => async (dispatch, getState) => {
  const userId = getState().auth.userId;
  const response = await profileAPI.saveProfile(profile);

  if (response.data.resultCode === 0) {
    dispatch(getUserProfile(userId));
  } else {
    dispatch(stopSubmit("edit-profile", { _error: response.data.messages[0] }));
    return Promise.reject(response.data.messages[0]);
  }
};

export default profileReducer;