import React, {useState} from 'react';
import Button from "../../UI/Button/Button";
import classes from "./_Login.module.scss"
import {Link} from "react-router-dom";
import {BsEyeFill} from "react-icons/bs";
import {BsEyeSlashFill} from "react-icons/bs";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })
    const {email, password} = formData

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        })
        )
    }

    const handleShowPassword = () => {
        if (!showPassword) {
            setShowPassword(true)
        } else {
            setShowPassword(false)
        }
    }

    return (
        <div className={classes.login}>

            <h1>Вход</h1>

            <div className={classes.email}>
                <label htmlFor="email">E-mail</label>
                <input id="email" onChange={onChange} value={email} placeholder="youmail@mail.com" type="email"/>
            </div>

            <div className={classes.password}>
                <label htmlFor="password">Пароль</label>
                <input id="password" onChange={onChange} value={password} placeholder="**********" type={showPassword ? "text" : "password"}/>

                {showPassword
                    ? <BsEyeSlashFill
                        onClick={handleShowPassword}
                        className={classes.passwordIcon}
                    />
                    : <BsEyeFill
                        onClick={handleShowPassword}
                        className={classes.passwordIcon}
                    />
                }

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