import React from 'react';
import {ReactComponent as SearchIcon} from "../../../assets/icons/searchIcon24px.svg";
import classes from "./_SearchInput.module.scss"

const SearchInput = () => {
    return (
        <div className={classes.searchContainer}>
            <div className={classes.searchInput}>
                <input placeholder="Поиск" type="text"/>
            </div>

            <div className={classes.searchButton}>
                <button>{<SearchIcon />}</button>
            </div>
        </div>
    );
};

export default SearchInput;