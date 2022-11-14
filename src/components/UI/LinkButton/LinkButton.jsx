import React from 'react';
import {ReactComponent as RightChevronIcon} from "../../../assets/icons/chevronRightIcon24px.svg";
import classes from "./_LinkButton.module.scss"
import {Link} from "react-router-dom";

const LinkButton = ({onClick, label, link}) => {
    return (
        <>
          <Link onClick={onClick} className={classes.linkButton} to={link}>{label}<RightChevronIcon /></Link>
        </>
    );
};

export default LinkButton;