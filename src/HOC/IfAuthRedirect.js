import React from 'react'
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

let mapStateToPropsForRedirect = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
};

export let IfAuthRedirect = (Component) => {
    let ComponentRedirect = (props) => {
        if(!props.isAuth) return <Redirect to={'/login'}/>;
        return <Component {...props}/>
    };
    return connect(mapStateToPropsForRedirect)(ComponentRedirect);
};