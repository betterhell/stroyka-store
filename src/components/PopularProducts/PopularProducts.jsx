import React from 'react';
import {productList} from "../../data/productList";
import classes from "./_PopularProducts.module.scss"
import ProductCard from "../UI/ProductCard/ProductCard";

const PopularProducts = ({style}) => {
    const popularList = productList.filter((popularItem) => popularItem.popular)

    return (
        <div className={classes.popularCategory}>
            <div className={classes.popularHeader}>
                <h2>Популярные товары</h2>
            </div>

            <div className={classes.popularWrapper}>
                {popularList.map((popularProduct) =>
                    <ProductCard
                        style={style}
                        key={popularProduct.id}
                        image={popularProduct.image}
                        desc={popularProduct.desc}
                        regularPrice={popularProduct.regularPrice}
                        discount={popularProduct.discount}
                        discountedPercent={popularProduct.discountedPercent}
                    />
                )}
            </div>
        </div>
    );
};

export default PopularProducts;