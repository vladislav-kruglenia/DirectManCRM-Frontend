import React from 'react';
import {BrowserRouter} from "react-router-dom"
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import style from "./App.module.css"
import {Provider} from "react-redux";
import store from "./redux/ReduxStore";

let App = () => {
    return <div className={style.appContainer}>
        <Header/>
        <Body/>
    </div>
};

const AppContainer = () => {
    return <>
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    </>
};

export default AppContainer;
