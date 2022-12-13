import React from 'react';
import {brandList} from "../../data/brandList";
import LinkButton from "../UI/LinkButton/LinkButton";
import classes from "./_PopularBrands.module.scss"

const PopularBrands = () => {
    return (
        <div className={classes.brands}>
            <div className={classes.brandsHeader}>
                <h2>Популярные бренды</h2>
                <LinkButton label="Все бренды" link="/category" />
            </div>

            <div className={classes.brandsWrapper}>
                {brandList.map((brand) =>
                    <div key={brand.id} className={classes.brandItem}>
                        <a href={brand.link}>
                            <img src={brand.image} alt="brand"/>
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PopularBrands;