import React from 'react';
import classes from "./_MobileMenu.module.scss";
import {ReactComponent as MenuIcon} from "../../assets/icons/menuIcon24px.svg";
import Button from "../UI/Button/Button";
import {ReactComponent as ProfileIcon} from "../../assets/icons/userIcon24px.svg";
import {ReactComponent as BasketIcon} from "../../assets/icons/basketIcon24px.svg";
import {ReactComponent as LocationIcon} from "../../assets/icons/mapIcon20px.svg";

const MobileMenu = ({isOpen}) => {

    return (
        <>
            {isOpen ? <div style={{left: 0}} className={classes.mobileMenu}>
                <div className={classes.mobileNav}>
                    <Button icon={<MenuIcon />} label="Каталог" initialBg="yellow"  />
                    <Button icon={<ProfileIcon />} label="Профиль"  />
                    <Button icon={<BasketIcon />} label="Заказы"  />
                </div>
                <div className={classes.location}>
                    <button className={classes.locationButton}>
                        <LocationIcon  />
                        <p>Москва</p>
                    </button>
                </div>
                <div className={classes.lowerHeaderContainer}>
                    <a href="/actions">Акции</a>
                    <a href="/materials">Строительные материалы</a>
                    <a href="/ceramics">Керамическая плитка</a>
                    <a href="/paints">Краски</a>
                    <a href="/plumbing">Сантехника</a>
                    <a href="/floors">Напольные покрытия</a>
                    <a href="/tools">Инструменты</a>
                    <a href="/wallpapers">Обои</a>
                    <a href="/windows">Окна</a>
                </div>
                <div className={classes.links}>
                    <a href="/brands">Бренды</a>
                    <a href="/delivery">Доставка</a>
                    <a href="/refund">Возврат</a>
                    <a href="/docs">Документация</a>
                    <a href="/contacts">Контакты</a>
                </div>
            </div> : null }

        </>
    );
};

export default MobileMenu;