import React from 'react';
import classes from "./_ChooseCityModal.module.scss"
import SearchInput from "../UI/Input/SearchInput";
import {cityList} from "../../data/cityList";
import {ReactComponent as ArrowRightIcon} from "../../assets/icons/arrowRightIcon16px.svg";
import {ReactComponent as CloseIcon} from "../../assets/icons/closeIcon52px.svg";

const ChooseCityModal = () => {
    return (
        <div className={classes.modalContainer}>
            <div className={classes.modal}>
                <h1>Выберите ваш город</h1>
                <SearchInput width="100%" />
                <div className={classes.citys}>
                        {cityList.map(city =>
                            <a href="/" key={city.id}>
                                <ArrowRightIcon />
                                {city.name}
                            </a>
                        )}
                </div>
            </div>
            <button className={classes.closeIcon}><CloseIcon /></button>
        </div>
    );
};

export default ChooseCityModal;