import React, { Component } from 'react';
import { Route, withRouter, BrowserRouter } from "react-router-dom";
import { initializeApp } from './Redux/appReducer';
import { connect, Provider } from 'react-redux';
import { compose } from 'redux';
import store from "./Redux/reduxStore";
import './App.css';
import HeaderContainer from './Components/Header/HeaderContainer';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import Preloader from './Components/common/Preloader/Preloader';
import { withSuspense } from './hoc/withSuspense';

const DialogsContainer = React.lazy(() => import('./Components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./Components/Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./Components/Users/UsersContainer'));
const News = React.lazy(() => import('./Components/News/News'));
const Music = React.lazy(() => import('./Components/Music/Music'));
const Settings = React.lazy(() => import('./Components/Settings/Settings'));
const WeatherForecast = React.lazy(() => import('./Components/WeatherForecast/WeatherForecast'));
const AboutPonies = React.lazy(() => import('./Components/AboutPonies/AboutPonies'));

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div className='app-wrapper'>

        <HeaderContainer />

        <Navbar />

        <div className='app-wrapper-content'>

          <Route path='/dialogs'
            render={withSuspense(DialogsContainer)} />

          <Route path='/profile/:userId?'
            render={withSuspense(ProfileContainer)} />

          <Route path='/users'
            render={withSuspense(UsersContainer)} />

          <Route path='/news'
            render={withSuspense(News)} />

          <Route path='/music'
            render={withSuspense(Music)} />

          <Route path='/settings'
            render={withSuspense(Settings)} />

          <Route path='/weatherForecast'
            render={withSuspense(WeatherForecast)} />

          <Route path='/AboutPonies'
            render={withSuspense(AboutPonies)} />

          <Route path='/login'
            render={() => <Login />} />

        </div>

        <Footer />

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
});

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App);

const PonjectApp = (props) => {
  return <BrowserRouter>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </BrowserRouter>
}

export default PonjectApp;