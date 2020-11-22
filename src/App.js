import React from 'react';
import {HashRouter, Route, withRouter} from "react-router-dom";
import './App.css';

import HeaderContainer from "./components/header/HeaderContainer";
import Navbar from './components/navbar/Navbar';
import News from './components/news/News';
import Music from './components/music/Music';
import Settings from './components/settings/Settings';
import Friends from './components/friends/Friends';

import UsersContainer from "./components/users/UsersContainer";
import LoginPage from "./components/login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app.reducer";
import Preloader from "./components/common/preloader/preloader";
import store from "./redux/redux-store";
import {withSuspense} from "./hoc/withSuspense";

const DialogsContainer = React.lazy( () => import("./components/dialogs/DialogsContainer"));
const ProfileContainer = React.lazy( () => import("./components/profile/ProfileContainer"));


class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div className='app-wrapper'>
        <HeaderContainer/>
        <Navbar/>
        <div className='app-wrapper-content'>
          <Route path='/profile/:userId?'
                 render={ withSuspense(ProfileContainer) } />
          <Route path='/dialogs'
                 render={ withSuspense(DialogsContainer) } />
          <Route path='/users'
                 render={ () => <UsersContainer/> } />
          <Route path='/login'
                 render={ () => <LoginPage/> } />

          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
          <Route path='/friends' component={Friends} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, {initializeApp})
)
(App);

const SamuraiJSApp = (props) => {
  return <HashRouter>
    <Provider store={store}>
      <React.StrictMode>
        <AppContainer />
      </React.StrictMode>
    </Provider>
  </HashRouter>
}

export default SamuraiJSApp;
