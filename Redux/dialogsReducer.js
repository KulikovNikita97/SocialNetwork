const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {

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

};

    
const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {
      
  
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, {id: 6, message: body}]
       };
    default:
      return state;
  }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});

export default dialogsReducer;