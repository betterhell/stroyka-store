import React, {useEffect, useState} from 'react';
import classes from "./_MiddleHeader.module.scss";
import {ReactComponent as Logo} from "../../../assets/logo/Logo.svg";
import Button from "../../UI/Button/Button";
import {ReactComponent as MenuIcon} from "../../../assets/icons/menuIcon24px.svg";
import SearchInput from "../../UI/Input/SearchInput";
import {ReactComponent as ProfileIcon} from "../../../assets/icons/userIcon24px.svg";
import {ReactComponent as CloseIcon} from "../../../assets/icons/closeIcon17px.svg";
import {ReactComponent as OrdersIcon} from "../../../assets/icons/orderIcon24px.svg";
import {ReactComponent as BasketIcon} from "../../../assets/icons/basketIcon24px.svg";
import MobileMenu from "../../mobileMenu/MobileMenu";


const MiddleHeader = () => {
    const [userScreenWidth, setUserScreenWidth] = useState(0)
    const [isOpen, setIsOpen] = useState(false)

    const clientScreenWidth = window.innerWidth

    const updateDimensions = () => {
        setUserScreenWidth(clientScreenWidth)
    }

    const mobileMenuToggle = () => {
        if (!isOpen) {
            setIsOpen(true)
        } else {
            setIsOpen(false)
        }
    }

    useEffect(() => {
        window.addEventListener("resize", updateDimensions)
    },)

    return (
        <div className={classes.middleHeader}>
             <div className={classes.logo}>
                 <a href="/"><Logo /></a>
             </div>

            {clientScreenWidth <= 740
                ?   <div className={classes.menu}>
                        <button onClick={mobileMenuToggle} className={classes.mobileMenuButton}>{isOpen ? <CloseIcon /> : <MenuIcon /> }</button>
                        <MobileMenu isOpen={isOpen} />
                    </div>
                :   <div className={classes.menu}>
                        <Button icon={<MenuIcon />} label="Каталог" initialBg="yellow"  />
                    </div>
            }


            <div className={classes.searchInput}>
                <SearchInput />
            </div>

            <div className={classes.buttonBar}>
                <button className={classes.profileBtn}>
                    <ProfileIcon />
                    <p>Профиль</p>
                </button>
                <button className={classes.ordersBtn}>
                    <OrdersIcon />
                    <p>Заказы</p>
                </button>
                <button className={classes.basketBtn}>
                    <BasketIcon />
                    {clientScreenWidth >= 740 && <p>Корзина</p> }
                </button>
            </div>
        </div>
    );
};

export default MiddleHeader;