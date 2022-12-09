import React from 'react';
import {productList} from "../../data/productList";
import classes from "./_PopularProducts.module.scss"

const PopularProducts = () => {
    const popularList = productList.filter((popularItem) => popularItem.popular)

    return (
        <div className={classes.popularCategory}>
        </div>
    );
};

export default PopularProducts;