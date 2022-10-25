import React, {useState} from 'react';
import classes from "./_NumberInput.module.scss"

const NumberInput = ({placeholderMax}) => {
    const [inputValue, setInputValue] = useState("")

    const onChangeInput = (e) => {
        setInputValue(e.target.value)
    }

    return (
        <input value={inputValue}
               onChange={onChangeInput}
               min="100"
               max="100000"
               placeholder={placeholderMax}
               className={classes.numberInput}
               type="number"
        />
    );
};

export default NumberInput;