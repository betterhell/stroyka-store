import React from 'react';
import classes from "./_Header.module.scss"
import {ReactComponent as LocationIcon} from "../../assets/icons/mapIcon20px.svg";
import {ReactComponent as Logo} from "../../assets/logo/Logo.svg";
import {ReactComponent as MenuIcon} from "../../assets/icons/menuIcon24px.svg"
import {ReactComponent as ProfileIcon} from "../../assets/icons/userIcon24px.svg"
import {ReactComponent as OrdersIcon} from "../../assets/icons/orderIcon24px.svg"
import {ReactComponent as BasketIcon} from "../../assets/icons/basketIcon24px.svg"

import Button from "../UI/Button/Button";
import SearchInput from "../UI/Input/SearchInput";


const Header = () => {
    return (
        <div className={classes.header}>
            <div className={classes.headerContainer}>
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
                <div className={classes.middleHeader}>
                <div className={classes.leftSide}>
                    <div className={classes.logo}>
                        <button><Logo /></button>
                    </div>
                </div>
                <div className={classes.rightSide}>
                    <div className={classes.menuAndSearch}>
                        <Button icon={<MenuIcon />} label="Каталог" initialBg="yellow"  />
                        <SearchInput />
                    </div>

                    <div className={classes.buttonBar}>
                        <button>
                            <ProfileIcon />
                            <p>Профиль</p>
                        </button>
                        <button>
                            <OrdersIcon />
                            <p>Заказы</p>
                        </button>
                        <button>
                            <BasketIcon />
                            <p>Корзина</p>
                        </button>
                    </div>
                </div>
            </div>
                <div className={classes.lowerHeader}>
            </div>
            </div>
        </div>
    );
};

export default Header;