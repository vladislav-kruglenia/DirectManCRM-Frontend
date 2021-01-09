import React, {ComponentType, FC} from 'react'
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../AppGlobalTypes/AppGlobalTypes";
import {MapStatePropsType} from "./Types/IfAuthRedirectTypes";

let mapStateToPropsForRedirect = (state: AppStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth
    }
};

// WCP - Wrapped Component Props

export function IfAuthRedirect<WCP>(WrappedComponent: ComponentType<WCP>) {
    let ComponentRedirect: FC<MapStatePropsType> = (props) => {

        // Если не отделять пропсы от пришедшие из коннекта, то ничего работать не будет
        let {isAuth, ...restProps} = props;

        if (!props.isAuth) return <Redirect to={'/login'}/>;
        return <WrappedComponent {...restProps as WCP}/>
    };
    return connect(mapStateToPropsForRedirect)(ComponentRedirect);
}