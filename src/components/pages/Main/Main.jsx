import React from 'react';
import HeroSlider from "../../UI/HeroSlider/HeroSlider";
import Promotions from "../../Promotions/Promotions";
import PopularCategory from "../../PopularCategory/PopularCategory";
import PopularProducts from "../../PopularProducts/PopularProducts";

const Main = () => {
    return (
        <main>
            <HeroSlider />
            <Promotions count={4} />
            <PopularCategory />
            <PopularProducts />
        </main>
    );
};

export default Main;