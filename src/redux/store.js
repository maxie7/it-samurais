import profileReducer from "./profile.reducer";
import dialogsReducer from "./dialogs.reducer";
import sidebarReducer from "./sidebar.reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: 'Hello, how are you?', likes: 15},
        {id: 2, message: 'It\'s my first post', likes: 20}
      ],
      newPostText: ''
    },
    dialogsPage: {
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
      ],
      newMessageBody: ""
    },
    sidebar: {}
  },
  _callSubscriber() {
    console.log('State is changed');
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  }
}

window.store = store;

export default store;
