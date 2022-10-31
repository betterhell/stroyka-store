import React from 'react';
import classes from "./_Footer.module.scss"
import {ReactComponent as LogoIcon} from "../../assets/logo/LogoFooter.svg";
import {ReactComponent as MailIcon} from "../../assets/icons/mailIcon24px.svg";
import {ReactComponent as MapIcon} from "../../assets/icons/mapIcon24px.svg";
import {ReactComponent as ArrowRightIcon} from "../../assets/icons/arrowRightIcon16px.svg";
import VisaIcon from "../../assets/banks/Visa.png";
import MasterCardIcon from "../../assets/banks/Mastercard.png";
import MaestroIcon from "../../assets/banks/Maestro.png";
import MirIcon from "../../assets/banks/Mir.png";

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className={classes.footerContainer}>
                <div className={classes.info}>
                    <a href="/"><LogoIcon /></a>
                    <div className={classes.socialLinks}>
                        <a className={classes.mailTo} href="@mail.com"><MailIcon />info@stroykastore.ru</a>
                        <a className={classes.address} href="/contacts"><MapIcon />Москва, ул. Камушкина 10</a>
                    </div>
                </div>
                <div className={classes.footerLinks}>
                    <div className={classes.footerLinksColumn}>
                        <a href="/profile"><ArrowRightIcon />Личный кабинет</a>
                        <a href="/orders"><ArrowRightIcon />Заказы</a>
                        <a href="/favorite"><ArrowRightIcon />Избранное</a>
                        <a href="/order"><ArrowRightIcon />Корзина</a>
                    </div>
                    <div className={classes.footerLinksColumn}>
                        <a href="/catalogue"><ArrowRightIcon />Каталог</a>
                        <a href="/actions"><ArrowRightIcon />Акции</a>
                        <a href="/brands"><ArrowRightIcon />Бренды</a>
                        <a href="/contacts"><ArrowRightIcon />Контакты</a>
                    </div>

                    <div className={classes.footerLinksColumn}>
                        <a href="/become-seller"><ArrowRightIcon />Стать продавцом</a>
                        <a href="/delivery"><ArrowRightIcon />Доставка</a>
                        <a href="/refund"><ArrowRightIcon />Возврат</a>
                        <a href="/docs"><ArrowRightIcon />Документация</a>
                    </div>
                </div>
            </div>
            <div className={classes.lowerFooter}>
                <p>© СтройкаСтор</p>
                <div className={classes.banks}>
                    <a href="">
                        <img src={VisaIcon} alt="Visa"/>
                    </a>
                    <a href="">
                        <img src={MasterCardIcon} alt="Mastercard"/>
                    </a>
                    <a href="">
                        <img src={MaestroIcon} alt="Maestro"/>
                    </a>
                    <a href="">
                        <img src={MirIcon} alt="Мир"/>
                    </a>
                </div>
                <p>Сделано BetterHell'ом</p>
            </div>
        </footer>
    );
};

export default Footer;