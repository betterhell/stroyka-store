import React from 'react';
import classes from "./_ProductCard.module.scss"
import Button from "../Button/Button";

const ProductCard = ({label, desc, image, discountedPercent, discount, regularPrice}) => {

    const discountPrice = regularPrice- ((regularPrice / 100) * discountedPercent).toFixed()

    return (
        <div className={classes.card}>
            <div className={classes.cardImage}>
                <a href="/product/:id"><img src={image} alt={desc}/></a>
            </div>
            {discount
                ? (
                    <>
                        <div className={classes.cardDiscountBadge}>
                            <p>{` -${discountedPercent}%`}</p>
                        </div>
                        <div className={classes.cardInfo}>
                            <a href="/product/:id">{desc}</a>
                            <div className={classes.cardPrice}>
                                <h2>{discountPrice} ₽</h2>
                                <p>{regularPrice} ₽</p>
                            </div>
                            <Button label={label} initialBg="yellow" />
                        </div>
                    </>
                    )
                : (
                    <div className={classes.cardInfo}>
                        <a href="/product/:id">{desc}</a>
                        <div className={classes.cardPrice}>
                        <h2>{regularPrice} ₽</h2>
                        </div>
                        <Button label={label} initialBg="yellow" />
                    </div>
                )
            }
        </div>
    );
};

ProductCard.defaultProps = {
    label: "В корзину"
}

export default ProductCard;