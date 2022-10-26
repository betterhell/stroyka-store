import React from 'react';
import classes from "./_UpperHeader.module.scss"
import {ReactComponent as LocationIcon} from "../../../assets/icons/mapIcon20px.svg";

const UpperHeader = () => {
    return (
        <div className={classes.upperHeader}>
            <div className={classes.location}>
                <button className={classes.locationButton}>
                    <LocationIcon  />
                    <p>Москва</p>
                </button>
            </div>
            <div className={classes.links}>
                <a href="/brands">Бренды</a>
                <a href="/delivery">Доставка</a>
                <a href="/refund">Возврат</a>
                <a href="/docs">Документация</a>
                <a href="/contacts">Контакты</a>
            </div>
        </div>
    );
};



export default UpperHeader;