import RarityAva from '../media/rarityAva.png';
import TwiAva from '../media/TwiAva.png';
import RainbowAva from '../media/RainbowAva.png';
import AppleAva from '../media/AppleAva.png';
import ShyAva from '../media/ShyAva.png';
import PinkieAva from '../media/PinkieAva.png';

import profileReducer from './profileReducer.js';
import dialogsReducer from './dialogsReducer.js';
import sidebarReducer from './sidebarReducer.js';


let store = {
    _state: {
      profilePage: {
          posts: [
        {id: 0, message: 'Hi, how are you?', likesCount: 12},
        {id: 1, message: 'It\'s my first post', likesCount: 17},
        {id: 2, message: 'When did you go, my love', likesCount: 145}
        ],
        newPostText: ''
    },

      dialogsPage: {
        dialogs: [
          {id: 1, name: 'Twilight'},
          {id: 2, name: 'Rarity'},
          {id: 3, name: 'Pinkie'},
          {id: 4, name: 'Rainbow'},
          {id: 5, name: 'Applejack'},
          {id: 6, name: 'Fluttershy'}
          ],
        messages: [
          {id: 1, /*message: 'Hi, new friend!'*/},
          {id: 2, /*message: 'Welcome to my boutique!'*/},
          {id: 3, /*message: 'Party time!'*/},
          {id: 4, /*message: 'Let\'s race!'*/},
          {id: 5, /*message: 'Howdy, sugarcube!'*/},
          {id: 6, /*message: 'Oh my angel!'*/}
          ],
            newMessageBody:  ""
},
      
      sidebar: {}, 
      
/*  addMessage(message) {
        this._state.profile.messages.push(message);
    },
      
  selectDialogUser(userId) {
        this._state.selectedUserId = userId;
    },*/

  
      profileInfo: {
    currentNumber: 0,
    ponies: [
    {name: "Rarity", 
    description: "My name is Rarity. I'm 24 years old. I'm from Ponyville, Canterlot district. I'm a fashion desighner, and an owner of two boutiques - in Canterlot and Manehatten. I cooperate with many famous show-business ponies: singers, photographiers, desighners as well as with members of the Royal Suite, ministers, militaries and courters.", 
    ava: RarityAva},    
  
    {name: "Twilight Sparkle", 
    description: "My name is Twilight Sparkle. I'm 25 years old. I'm from Canterlot. I'm the Princess of Friendship, but I did not always have this title. I was born a unicorn. My extraordinary magical abilities were detected by Princess Celestia and she became to learn me in Thier Majesty's High School of Wizarding. I was a capable pupil, but I did not have friends at all. Princess Celestia sent me to Ponyville where I found five loyal friends afterwards. Together we endured a lot of hardships, fun moments, moments of our general sadness and happiness, won a lot of evils, helped spread of Magic of Friendship further, even beyond Equestria, to another countries and lands.", 
    ava: TwiAva},    
    
    {name: "Rainbow Dash", 
    description: "rd", 
    ava: RainbowAva},    
    
    {name: "Applejack", 
    description: "aj", 
    ava: AppleAva},
      
    {name: "Fluttershy", 
    description: "fs", 
    ava: ShyAva},
      
    {name: "Pinkie Pie", 
    description: "pp", 
    ava: PinkieAva},
    ]
  
  },
},
  
  
    _callSubscriber() {
      console.log('state changed')
    },
  
    getState() {
        return this._state;
},
    subscribe(observer) {
    this._callSubscriber = observer; //observer pattern addEventListener
},
    changePoniesNumber(value) {
  if (this._state.slider.currentNumber + value === -1){
      this._state.slider.currentNumber = this._state.slider.ponies.length
  }

  if (this._state.slider.currentNumber + value ===
      this._state.slider.ponies.length){
      this._state.slider.currentNumber = -1
  }
  
      this._state.slider.currentNumber = this._state.slider.currentNumber + value;
      this._callSubscriber(this._state);
},
  
    dispatch(action) {
      debugger
      this._state.profilePage = profileReducer(this._state.profilePage, action);
      this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
      this._state.sidebar = sidebarReducer(this._state.sidebar, action);
      
      this._callSubscriber(this._state);
      
    }
}

export default store;
window.store = store;

// store - OOP