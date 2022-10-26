import React, {useState} from 'react';
import classes from "./_DropDownMenu.module.scss"
import {ReactComponent as DropDownIcon} from "../../../assets/icons/chevronDownIcon24px.svg";
import {ReactComponent as DropUpIcon} from "../../../assets/icons/chevronUpIcon24px.svg";
import {distributorList} from "../../../data/distributorList";


const DropDownMenu = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [inputValue, setInputValue] = useState(distributorList[0])

    const menuIsOpen = () => {
        if (!isOpen) {
           setIsOpen(true)
        } else {
            setIsOpen(false)
        }
    }

    const handleChange = (selectedOpt) => {
        setInputValue({
            id: selectedOpt.id,
            label: selectedOpt.label,
        })
        setIsOpen(false)
    }

        return (
        <div className={classes.dropDownMenuContainer}>
            <div className={classes.dropDown}>
                <p onClick={menuIsOpen}>{inputValue.label}</p>
            </div>

            <div onClick={menuIsOpen} className={classes.dropDownMenuIcon}>
                {isOpen ? <DropUpIcon /> : <DropDownIcon />}
            </div>

            {isOpen &&
                <div className={classes.dropDownMenu}>
                    <ul>
                        {distributorList
                            .filter(distributor => distributor.label !== inputValue.label)
                            .map((distributor =>
                                <li onClick={() => handleChange(distributor)}
                                    key={distributor.id}
                                >
                                    {distributor.label}</li>
                                )
                            )
                        }
                    </ul>
                </div>
            }
        </div>



    );
};

export default DropDownMenu;