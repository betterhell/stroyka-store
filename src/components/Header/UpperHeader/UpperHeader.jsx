import React, {useEffect, useState} from 'react';
import classes from "./_UpperHeader.module.scss"
import {ReactComponent as LocationIcon} from "../../../assets/icons/mapIcon20px.svg";

const UpperHeader = () => {
    const [userScreenWidth, setUserScreenWidth] = useState(0)

    const clientScreenWidth = window.innerWidth

    const updateDimensions = () => {
        setUserScreenWidth(clientScreenWidth)
    }

    useEffect(() => {
       window.addEventListener("resize", updateDimensions)
    },)

    return (
        <div className={classes.upperHeader}>
            <div className={classes.location}>
                <button className={classes.locationButton}>
                    <LocationIcon  />
                    <p>Москва</p>
                </button>
            </div>

        {clientScreenWidth <= 920
            ?   <div className={classes.links}>
                    <a href="/delivery">Доставка</a>
                    <a href="/refund">Возврат</a>
                    <a href="/contacts">Контакты</a>
                </div>

            :   <div className={classes.links}>
                    <a href="/brands">Бренды</a>
                    <a href="/delivery">Доставка</a>
                    <a href="/refund">Возврат</a>
                    <a href="/docs">Документация</a>
                    <a href="/contacts">Контакты</a>
                </div>
        }
        </div>
    );
};



export default UpperHeader;