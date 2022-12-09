import React, {useState} from 'react';
import classes from "./_ProductCard.module.scss"
import Button from "../Button/Button";
import ProductCounter from "../Counter/ProductCounter";

const ProductCard = ({label, id, desc, image, discountedPercent, discount, regularPrice}) => {
    const [open, setOpen] = useState(false)

    const discountPrice = regularPrice- ((regularPrice / 100) * discountedPercent).toFixed()

    const handleAddToBucket = () => {
        if (open) {
            setOpen(false)
        } else {
            setOpen(true)
        }
    }

    return (
        <div className={classes.card}>
            <div className={classes.cardImage}>
                <a href="/product/:id"><img src={image} alt={desc}/></a>
            </div>
            <div className={classes.cardDiscountBadge}>
                <p>{` -${discountedPercent}%`}</p>
            </div>
            <div className={classes.cardInfo}>
                <a href="/product/:id">{desc}</a>
                <div className={classes.cardPrice}>
                    {discount ?
                        <>
                            <h2>{discountPrice} ₽</h2>
                            <p>{regularPrice} ₽</p>
                        </>
                        :
                        <p>{regularPrice} ₽</p>
                    }
                </div>
                {!open ? <Button action={handleAddToBucket} label={label} initialBg="yellow" /> : <ProductCounter key={id} /> }
            </div>
        </div>
    );
};

ProductCard.defaultProps = {
    label: "В корзину"
}

export default ProductCard;