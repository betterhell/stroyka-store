import React from 'react';
import classes from "./_Header.module.scss"
import UpperHeader from "./UpperHeader/UpperHeader";
import MiddleHeader from "./MiddleHeader/MiddleHeader";
import LowerHeader from "./LowerHeader/LowerHeader";


const Header = () => {
    return (
        <div className={classes.header}>
            <div className={classes.headerContainer}>
                <UpperHeader />
                <MiddleHeader />
                <LowerHeader />
            </div>
        </div>
    );
};

export default Header;