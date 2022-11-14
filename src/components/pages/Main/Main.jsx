import React from 'react';
import HeroSlider from "../../UI/HeroSlider/HeroSlider";
import Promotions from "../../Promotions/Promotions";

const Main = () => {
    return (
        <>
           <HeroSlider />
           <Promotions count={4} />
        </>
    );
};

export default Main;