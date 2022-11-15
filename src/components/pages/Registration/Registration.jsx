import React, {useState} from 'react';
import Button from "../../UI/Button/Button";
import classes from "./_Registration.module.scss"
import {getAuth, createUserWithEmailAndPassword, updateProfile} from "firebase/auth"
import {db} from "../../../firebase.config"
import {useNavigate} from "react-router-dom";

const Registration = () => {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    })
    const {name, email, password, confirmPassword} = formData


    const handleChangeData = (e) => {
        setFormData((prevState) => ({
                ...prevState,
                [e.target.id]: e.target.value,
            })
        )
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

    const handleRegisterNewUser = async (e) => {
        e.preventDefault()
        try {
            const auth = getAuth()

            const userCredential = await createUserWithEmailAndPassword
            (
                auth,
                email,
                password,
                confirmPassword,
            )

            const user = userCredential.user

            updateProfile(auth.currentUser, {
                displayName: name,
            })

            navigate("/")
        } catch (error) {
        }
    }

    return (
        <div className={classes.registration}>

            <h1>Регистрация</h1>

            <form onSubmit={handleRegisterNewUser}>
                <div className={classes.regFields}>
                    <div className={classes.name}>
                        <label htmlFor="text">Имя</label>
                        <input onChange={handleChangeData} value={name} id="name" placeholder="Богдан" type="text"/>
                    </div>

                    <div className={classes.email}>
                        <label htmlFor="email">E-mail</label>
                        <input onChange={handleChangeData} id="email" value={email} placeholder="youmail@mail.com" type="email"/>
                    </div>

                    <div className={classes.password}>
                        <label htmlFor="password">Новый пароль</label>
                        <input id="password" onChange={handleChangeData} value={password} placeholder="**********" type="password"/>
                    </div>

                    <div className={classes.confirmPassword}>
                        <label htmlFor="password">Подтверждение пароля</label>
                        <input id="confirmPassword" onChange={handleChangeData} value={confirmPassword} placeholder="**********" type="password"/>
                    </div>
                </div>

                {handleCheckPassword()}

                <div className={classes.actions}>
                    <Button disabled={(password !== confirmPassword) || (password === "" || confirmPassword === "")} initialBg="yellow" label="Зарегистрироваться" />
                </div>
            </form>
        </div>
    );
};

export default Registration;