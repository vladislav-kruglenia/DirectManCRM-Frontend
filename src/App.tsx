import React from 'react';
import {BrowserRouter} from "react-router-dom"
import Header from "./components/Header/Header";
import style from "./App.module.css"
import {Provider} from "react-redux";
import store from "./redux/ReduxStore";
import NawBar from "./components/Nawbar/Nawbar";
import BodyContainer from "./components/Body/BodyContainerUI";

let App = () => {
    return <div className={style.appContainer}>
        <Header/>
        <NawBar/>
        <BodyContainer/>
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
