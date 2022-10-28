import React from 'react';
import {ReactComponent as SearchIcon} from "../../../assets/icons/searchIcon24px.svg";
import classes from "./_SearchInput.module.scss"

const SearchInput = () => {
    return (
        <div className={classes.searchContainer}>
            <input className={classes.searchInput} placeholder="Поиск" type="text"/>
            <button className={classes.searchButton}>{<SearchIcon />}</button>
        </div>
    );
};

export default SearchInput;