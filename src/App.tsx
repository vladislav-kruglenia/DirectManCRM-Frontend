import React from 'react';
import {BrowserRouter} from "react-router-dom"
import Header from "./components/Header/Header";
import {Provider} from "react-redux";
import "./App.css"
import store from "./redux/ReduxStore";
import NawBar from "./components/Nawbar/Nawbar";
import BodyContainer from "./components/Body/BodyContainerUI";
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';

const theme = createMuiTheme({});

let App = () => {
    return <div className="appContainer">
        <Header/>
        <NawBar/>
        <BodyContainer/>
    </div>
};

const AppContainer = () => {
    return <>
        <BrowserRouter>
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                <App/>
                </ThemeProvider>
            </Provider>
        </BrowserRouter>
    </>
};

export default AppContainer;
