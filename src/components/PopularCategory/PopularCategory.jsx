import React from 'react';
import {categoryList} from "../../data/categoryList";
import classes from "./_PopularCategory.module.scss"
import LinkButton from "../UI/LinkButton/LinkButton";

const PopularCategory = () => {
    return (
        <div className={classes.category}>
            <div className={classes.categoryHeader}>
                <h2>Популярные категории</h2>
                <LinkButton label="Все категории" link="/category" />
            </div>
            <div className={classes.categoryWrapper}>
                {categoryList.map((category) =>
                    <div key={category.id}>
                        <a className={classes.categoryCard} href="/category/:id">
                            <p>{category.name}</p>
                            <img src={category.image} alt="Image"/>
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PopularCategory;