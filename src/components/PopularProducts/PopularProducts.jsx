import React from 'react';
import {productList} from "../../data/productList";
import ProductCard from "../UI/ProductCard/ProductCard";
import classes from "./_PopularProducts.module.scss"

const PopularProducts = () => {
    const popularList = productList.filter((popularItem) => popularItem.popular)

    return (
        <div className={classes.popularCategory}>
            {popularList.map((popular) =>
                <>
                </>
            )}
        </div>
    );
};

export default PopularProducts;