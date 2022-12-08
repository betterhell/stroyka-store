import React, {useState} from 'react';
import {ReactComponent as PlusIcon} from "../../../assets/icons/plusIcon24px.svg";
import {ReactComponent as MinusIcon} from "../../../assets/icons/minusIcon24px.svg";
import classes from "./_ProductCounter.module.scss"

const ProductCounter = () => {
    const [incrementItem, setIncrementItem] = useState(1)


    const increment = () => {
        if (incrementItem < 10) {
            setIncrementItem(incrementItem + 1)
        }
        return incrementItem
    }

    const decrement = () => {
        if (incrementItem > 1) {
            setIncrementItem(incrementItem - 1)
        }
        return incrementItem
    }

    return (
        <div className={classes.IncrementDecrementContainer}>
            <button disabled={incrementItem > 99} onClick={increment}>{<PlusIcon />}</button>
            <p>{incrementItem}</p>
            <button disabled={incrementItem < 2} onClick={decrement}>{<MinusIcon />}</button>
        </div>
    );
};

export default ProductCounter;