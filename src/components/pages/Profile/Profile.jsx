import React, {useState} from 'react';
import {getAuth} from "firebase/auth";
import classes from "./_Profile.module.scss"
import Button from "../../UI/Button/Button";
import {useNavigate} from "react-router-dom";

const Profile = () => {
    const auth = getAuth()

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        name: auth.currentUser.displayName,
        email: auth.currentUser.email,
    })


    const onLogout = () => {
        auth.signOut()
        navigate("/")
    }

    const onChange = (e) => {
        setFormData((prevState) => ({
                ...prevState,
                [e.target.id]: e.target.value,
            })
        )
    }

    /* @createNewUserCredentials */
    return (
        <div className={classes.profile}>
            <div className={classes.profileHeader}>
                <h1>Личный кабинет</h1>
                <Button label="Выйти" action={onLogout}  />
            </div>

            <form className={classes.profileForm}>
                <div className={classes.name}>
                    <label htmlFor="nameInput">Имя</label>
                    <input id="nameInput" onChange={onChange} placeholder={formData.name} type="text"/>
                </div>
                <div className={classes.secondName}>
                    <label htmlFor="secondNameInput">Фамилия</label>
                    <input id="secondNameInput" onChange={onChange} type="text"/>
                </div>
                <div className={classes.birthdate}>
                    <label htmlFor="birthdateInput">Дата Рождения</label>
                    <input id="birthdateInput" onChange={onChange} type="date"/>
                </div>
                <div className={classes.telephone}>
                    <label htmlFor="telInput">Телефон</label>
                    <input id="telInput" onChange={onChange} type="tel"/>
                </div>
                <div className={classes.email}>
                    <label htmlFor="emailInput">E-mail</label>
                    <input id="emailInput" onChange={onChange} placeholder={formData.email} type="tel"/>
                </div>
                <div className={classes.newPassword}>
                    <label htmlFor="newPasswordInput">Новый пароль</label>
                    <input id="newPasswordInput" onChange={onChange} placeholder="******" type="password"/>
                </div>
                <div className={classes.confirmNewPassword}>
                    <label htmlFor="confirmPasswordInput">Подтверждение пороля</label>
                    <input id="confirmPasswordInput" onChange={onChange} placeholder="******" type="password"/>
                </div>
                <button>Сохранить</button>
            </form>
        </div>
    );
};

export default Profile;