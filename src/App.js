import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Route, Switch, withRouter} from "react-router-dom";
import Preloader from "./components/common/Preloader/Preloader";
import {compose} from "redux";
import {connect, Provider} from "react-redux";
import store from "./redux/redux-store";
import {initializeApp} from "./redux/app-reducer";

import Navbar from "./components/Navbar/Navbar";
import ForBalanceContainer from "./components/ForBalance/ForBalanceContainer";
import ForPercentContainer from "./components/ForPercent/ForPercentContainer";
import TarifTableContainer from "./components/ForBalance/TarifTableContainer";

import s from "./components/common/Content.module.css";
import {Redirect} from "react-router-dom";

class App extends Component {
    componentDidMount() {

        if ((localStorage.getItem('token')) === "undefined" || !!this.props.match.params.token) {
            let token = this.props.match.params.token;
            localStorage.setItem('token', token);
            // '6c468e5bd68eaff033b87648cedde73a'
            this.props.initializeApp(token);
        } else {
            let token = localStorage.getItem('token');
            this.props.initializeApp(token);
        }
    }
    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        if (!this.props.auth.isAuth) {
            return (
                <div className={s.error}>{this.props.auth.error}</div>
            );
        }
        return (
            <div className='app-wrapper'>
                <Navbar/>
                <div>
                    <Switch>
                        <Route path='/forbalance'
                               render={() =>
                                   <div className='for-balance-content'>
                                       <TarifTableContainer/>
                                       <ForBalanceContainer/>
                                   </div>
                               }/>

                        <Route path='/forpercent'
                               render={() => <ForPercentContainer/>}/>

                        <Route path='*'
                               render={() =><Redirect to={"/forbalance"}/>}/>
                    </Switch>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
    auth: state.auth
});

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const EmailApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <Switch>
                <Route exact path='/token=:token?'
                       render={() => <AppContainer/>}/>
                <Route path='*'
                       render={() => <AppContainer/>}/>
            </Switch>
        </Provider>
    </BrowserRouter>
}

export default EmailApp;
