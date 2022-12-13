import React from 'react';
import HeroSlider from "../../UI/HeroSlider/HeroSlider";
import Promotions from "../../Promotions/Promotions";
import PopularCategory from "../../PopularCategory/PopularCategory";
import PopularProducts from "../../PopularProducts/PopularProducts";
import PopularBrands from "../../PopularBrands/PopularBrands";

const Main = () => {
    return (
        <main>
            <HeroSlider />
            <Promotions count={4} />
            <PopularCategory />
            <PopularProducts style="horizontal" />
            <PopularBrands />
        </main>
    );
};

export default Main;