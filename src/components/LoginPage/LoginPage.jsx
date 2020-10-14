import React from "react";
import {reduxForm} from "redux-form";
import style from "./LoginPage.module.css"
import {createField, Input} from "../Common/Forms/FormsControl";
import {connect} from "react-redux";
import {loginThunkCreator} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";

let LoginForm = ({handleSubmit}) => {
    return <form onSubmit={handleSubmit}>
        {createField('Email', Input, 'email', null, {type: "text"})}
        {createField('Пароль', Input, 'password', null, {type: "password"})}
        <div>
            <button>Войти</button>
        </div>
    </form>
};

LoginForm = reduxForm({form: 'login'})(LoginForm);

let LoginPage = (props) => {
    const onSubmit = (loginFormData) =>{
        console.log(loginFormData);
        props.loginThunkCreator(loginFormData);
    };

    if(props.isAuth) return <Redirect to={'admin'}/>;

    return <div className={style.bodyContainer}>
        <h1>Вход в систему</h1>
        <LoginForm onSubmit={onSubmit}/>
    </div>
};

let mapStateToProps = (state) =>{
    return{
        isAuth: state.auth.isAuth
    }
};

export default connect(mapStateToProps, {loginThunkCreator})(LoginPage)