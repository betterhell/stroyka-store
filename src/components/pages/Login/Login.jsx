import React, {useState} from 'react';
import Button from "../../UI/Button/Button";
import classes from "./_Login.module.scss"
import {Link, useNavigate} from "react-router-dom";
import {BsEyeFill} from "react-icons/bs";
import {BsEyeSlashFill} from "react-icons/bs";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })
    const {email, password} = formData

    const [error, setError] = useState("")

    const navigate = useNavigate()

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

    const fetchUserData = async (e) => {
        e.preventDefault()

        try {
            const auth = getAuth()

            const userCredential = await signInWithEmailAndPassword
            (
                auth,
                email,
                password,
            )

            if (userCredential.user) {
                navigate("/profile")
            }

        } catch (error) {
            setError("Неправильные данные пользователя!")
        }
    }

    return (
        <div className={classes.login}>

            <h1>Вход</h1>

            <form onSubmit={fetchUserData}>
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
                    {error === "" ? null : <p className={classes.errorMessage}>{error}</p> }
                    <Button initialBg="yellow" label="Войти" />
                    <Link to="/registration">Создать учётную запись</Link>
                </div>
            </form>
        </div>
    );
};

export default Login;