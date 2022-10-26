import React from 'react';
import classes from "./_MiddleHeader.module.scss";
import {ReactComponent as Logo} from "../../../assets/logo/Logo.svg";
import Button from "../../UI/Button/Button";
import {ReactComponent as MenuIcon} from "../../../assets/icons/menuIcon24px.svg";
import SearchInput from "../../UI/Input/SearchInput";
import {ReactComponent as ProfileIcon} from "../../../assets/icons/userIcon24px.svg";
import {ReactComponent as OrdersIcon} from "../../../assets/icons/orderIcon24px.svg";
import {ReactComponent as BasketIcon} from "../../../assets/icons/basketIcon24px.svg";


const MiddleHeader = () => {
    return (
        <div className={classes.middleHeader}>
            <div className={classes.leftSide}>
                <div className={classes.logo}>
                    <a href="/"><Logo /></a>
                </div>
            </div>
            <div className={classes.rightSide}>
                <div className={classes.menuAndSearch}>
                    <Button icon={<MenuIcon />} label="Каталог" initialBg="yellow"  />
                    <SearchInput width="394px" />
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
    );
};

export default MiddleHeader;