import React from 'react';
import {BrowserRouter, Route} from "react-router-dom"
import Header from "./components/Header/Header";
import {Provider} from "react-redux";
import "./App.css"
import BodyContainer from "./components/Body/BodyContainerUI";
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import {store} from "./redux/ReduxToolkitStore";
import {QueryParamProvider} from "use-query-params";
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";

const theme = createMuiTheme({});

const client = new ApolloClient({
    uri: "http://localhost:5000/graphql",
    cache: new InMemoryCache()
});

let App = () => {
    return <div className="appContainer">
        <Header/>
        <BodyContainer/>
    </div>
};

const AppContainer = () => {
    return <>
        <ApolloProvider client={client}>
            <BrowserRouter>
                <QueryParamProvider ReactRouterRoute={Route}>
                    <Provider store={store}>
                        <ThemeProvider theme={theme}>
                            <App/>
                        </ThemeProvider>
                    </Provider>
                </QueryParamProvider>
            </BrowserRouter>
        </ApolloProvider>
    </>
};

export default AppContainer;
