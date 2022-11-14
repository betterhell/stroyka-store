import React, {useState} from 'react';
import Button from "../../UI/Button/Button";
import classes from "./_Registration.module.scss"

const Registration = () => {
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
    }

    const handleCheckPassword = () => {
        if (password === "" && confirmPassword === "") {
            return null
        } else if (password === confirmPassword) {
            return <p style={{color: "green"}} className={classes.checkPasswords}>Пароль совпадает ;)</p>
        } else {
            return <p className={classes.checkPasswords}>Пароль должен совпадать!</p>
        }
    }

    return (
        <div className={classes.registration}>

            <h1>Регистрация</h1>

            <div className={classes.regFields}>
                <div className={classes.name}>
                    <label htmlFor="text">Имя</label>
                    <input placeholder="Богдан" type="text"/>
                </div>

                <div className={classes.email}>
                    <label htmlFor="email">E-mail</label>
                    <input placeholder="youmail@mail.com" type="email"/>
                </div>

                <div className={classes.password}>
                    <label htmlFor="password">Новый пароль</label>
                    <input onChange={handleChangePassword} value={password} placeholder="**********" type="password"/>
                </div>

                <div className={classes.confirmPassword}>
                    <label htmlFor="password">Подтверждение пароля</label>
                    <input onChange={handleConfirmPassword} value={confirmPassword} placeholder="**********" type="password"/>
                </div>
            </div>

            {handleCheckPassword()}

            <div className={classes.actions}>
                <Button initialBg="yellow" label="Зарегистрироваться" />
            </div>
        </div>
    );
};

export default Registration;