import React, {FC} from "react";
import {InjectedFormProps, reduxForm} from "redux-form";
import style from "./LoginPage.module.css"
import {createField, Input} from "../../Common/Forms/FormsControl";
import {connect} from "react-redux";
import {loginThunkCreator} from "../../../redux/authReducer";
import {Redirect} from "react-router-dom";
import {
    LoginFormData,
    LoginFormOwnProps,
    LoginPageProps,
    MapDispatchProps,
    MapStateProps
} from "./Types/LoginPageTypes";
import {AppStateType} from "../../../AppGlobalTypes/AppGlobalTypes";

let LoginForm: FC<InjectedFormProps<LoginFormData, LoginFormOwnProps> & LoginFormOwnProps> =
    ({handleSubmit}) => {
        return <form onSubmit={handleSubmit}>
            {createField('Email', Input, 'email', [], {type: "text"})}
            {createField('Пароль', Input, 'password', [], {type: "password"})}
            <div>
                <button>Войти</button>
            </div>
        </form>
    };

let LoginFormRedux = reduxForm<LoginFormData, LoginFormOwnProps>({form: 'login'})(LoginForm);

let LoginPage: FC<LoginPageProps> = (props) => {
    const onSubmit = (loginFormData: LoginFormData) => {
        console.log(loginFormData);
        props.login(loginFormData);
    };

    if (props.isAuth) return <Redirect to={'admin'}/>;

    return <div className={style.bodyContainer}>
        <h1>Вход в систему</h1>
        <LoginFormRedux onSubmit={onSubmit}/>
    </div>
};

let mapStateToProps = (state: AppStateType): MapStateProps => {
    return {
        isAuth: state.auth.isAuth
    }
};

let dispatchObject: MapDispatchProps = {
    login: loginThunkCreator
};

export default connect<MapStateProps, MapDispatchProps, {}, AppStateType>(mapStateToProps, dispatchObject)(LoginPage)