import React from 'react';
import {ReactComponent as RightChevronIcon} from "../../../assets/icons/chevronRightIcon24px.svg";
import classes from "./_LinkButton.module.scss"

const LinkButton = ({label, link}) => {
    return (
        <>
            <a className={classes.linkButton} href={link}>{label}<RightChevronIcon /></a>
        </>
    );
};

export default LinkButton;