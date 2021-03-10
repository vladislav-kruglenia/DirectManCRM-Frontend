import React from 'react';
import {BrowserRouter, Route} from "react-router-dom"
import Header from "./components/Header/Header";
import {Provider} from "react-redux";
import "./App.css"
import BodyContainer from "./components/Body/BodyContainerUI";
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import {store} from "./redux/ReduxToolkitStore";
import {QueryParamProvider} from "use-query-params";

const theme = createMuiTheme({});

let App = () => {
    return <div className="appContainer">
        <Header/>
        <BodyContainer/>
    </div>
};

const AppContainer = () => {
    return <>
        <BrowserRouter>
            <QueryParamProvider ReactRouterRoute={Route}>
                <Provider store={store}>
                    <ThemeProvider theme={theme}>
                        <App/>
                    </ThemeProvider>
                </Provider>
            </QueryParamProvider>
        </BrowserRouter>
    </>
};

export default AppContainer;
