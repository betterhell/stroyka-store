import React, {useEffect, useState} from 'react';
import classes from "./_UpperHeader.module.scss"
import {ReactComponent as LocationIcon} from "../../../assets/icons/mapIcon20px.svg";
import Modal from "../../UI/Modal/Modal";
import SearchInput from "../../UI/Input/SearchInput";
import {cityList} from "../../../data/cityList";
import {ReactComponent as ArrowRightIcon} from "../../../assets/icons/arrowRightIcon16px.svg";

const UpperHeader = () => {
    const [userScreenWidth, setUserScreenWidth] = useState(0)
    const [modalOpen, setModalOpen] = useState(false)

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
                <button onClick={() => setModalOpen(true)} className={classes.locationButton}>
                    <LocationIcon  />
                    <p>{cityList[0].name}</p>
                </button>

                <Modal modalActive={modalOpen} setModalActive={setModalOpen}>
                    <h1>Выберите ваш город</h1>
                    <SearchInput />
                    <div className={classes.modal__cityList}>
                        {cityList.map(city =>
                            <a href="/" key={city.id}>
                                <ArrowRightIcon />
                                {city.name}
                            </a>
                        )}
                    </div>
                </Modal>
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