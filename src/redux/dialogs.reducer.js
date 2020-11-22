const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
  dialogs: [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrew'},
    {id: 3, name: 'Candela'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Pablo'},
    {id: 6, name: 'Olivia'}
  ],
  messages: [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How is it going?'},
    {id: 3, message: 'Do you go on with your path?'},
    {id: 4, message: 'Fine!'},
    {id: 5, message: 'Greatness from small beginnings'},
    {id: 6, message: "I'll be waiting!"}
  ]
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [ ...state.messages, {id: 6, message: body} ]
      };
    }
    default:
      return state;
  }
}

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })

export default dialogsReducer;