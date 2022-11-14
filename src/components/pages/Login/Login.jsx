import React from 'react';
import Button from "../../UI/Button/Button";
import classes from "./_Login.module.scss"
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <div className={classes.login}>

            <h1>Вход</h1>

            <div className={classes.email}>
                <label htmlFor="email">E-mail</label>
                <input placeholder="youmail@mail.com" type="email"/>
            </div>

            <div className={classes.password}>
                <label htmlFor="password">Пароль</label>
                <input placeholder="**********" type="password"/>
                <Link to="/registration">Забыли пароль?</Link>
            </div>

            <div className={classes.actions}>
                <Button initialBg="yellow" label="Войти" />
                <Link to="/registration">Создать учётную запись</Link>
            </div>
        </div>
    );
};

export default Login;