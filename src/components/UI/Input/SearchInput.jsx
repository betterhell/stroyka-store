import React from 'react';
import {ReactComponent as SearchIcon} from "../../../assets/icons/searchIcon24px.svg";
import classes from "./_SearchInput.module.scss"

const SearchInput = ({width}) => {
    return (
        <div className={classes.searchContainer}>
            <div style={{width: width}} className={classes.searchInput}>
                <input style={{width: width}} placeholder="Поиск" type="text"/>
            </div>

            <div className={classes.searchButton}>
                <button>{<SearchIcon />}</button>
            </div>
        </div>
    );
};

export default SearchInput;