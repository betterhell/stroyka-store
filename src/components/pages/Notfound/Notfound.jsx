import React from 'react';
import classes from "./_Notfound.module.scss"
import {Link} from "react-router-dom";

const Notfound = () => {
    return (
        <div className={classes.notFound}>
            <div className={classes.notFoundInfo}>
                <h1>404</h1>
                <h3>Страница не найдена</h3>
                <p>Неправильно набран адрес или такая страница больше <br/> не существует</p>
                <Link to="/">Перейти на главную</Link>
            </div>
        </div>
    );
};

export default Notfound;