import React from 'react';
import classes from "./_Promotions.module.scss"
import LinkButton from "../UI/LinkButton/LinkButton";
import ProductCard from "../UI/ProductCard/ProductCard";
import {productList} from "../../data/productList";

const Promotions = ({label, count}) => {
    let filteredProduct = productList.filter((item => item.discount))

    if (count) {
        filteredProduct = filteredProduct.slice(0, count)
    }

    return (
        <div className={classes.promoWrapper}>
            <div className={classes.promoHeader}>
                <h2>{label}</h2>
                <LinkButton label="Все акции" link="/actions" />
            </div>

            <div className={classes.promoContainer}>
                {filteredProduct.map((product) =>
                    <ProductCard
                        key={product.id}
                        image={product.image}
                        desc={product.desc}
                        regularPrice={product.regularPrice}
                        discount={product.discount}
                        discountedPercent={product.discountedPercent}
                    />)}
            </div>
        </div>
    );
};

Promotions.defaultProps = {
    label: "Акции",
    buttonLabel: "Все акции"
}

export default Promotions;