import React from 'react';
import HeroSlider from "../../UI/HeroSlider/HeroSlider";
import Promotions from "../../Promotions/Promotions";
import PopularCategory from "../../PopularCategory/PopularCategory";
import PopularProducts from "../../PopularProducts/PopularProducts";

const Main = () => {
    return (
        <>
            <HeroSlider />
            <Promotions count={4} />
            <PopularCategory />
            <PopularProducts />
        </>
    );
};

export default Main;