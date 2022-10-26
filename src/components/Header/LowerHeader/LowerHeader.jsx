import React from 'react';
import classes from "./_LowerHeader.module.scss";

const LowerHeader = () => {
    return (
        <div className={classes.lowerHeader}>
            <div className={classes.lowerHeaderContainer}>
                <a href="/actions">Акции</a>
                <a href="/materials">Строительные материалы</a>
                <a href="/ceramics">Керамическая плитка</a>
                <a href="/paints">Краски</a>
                <a href="/plumbing">Сантехника</a>
                <a href="/floors">Напольные покрытия</a>
                <a href="/tools">Инструменты</a>
                <a href="/wallpapers">Обои</a>
                <a href="/windows">Окна</a>
            </div>
        </div>
    );
};

export default LowerHeader;