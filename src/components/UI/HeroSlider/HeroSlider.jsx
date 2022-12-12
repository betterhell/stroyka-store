import React, {useEffect, useState} from 'react';
import classes from "./_HeroSlider.module.scss"
import Button from "../Button/Button";
import {ReactComponent as LeftArrowIcon} from "../../../assets/icons/arrowLeftIcon24px.svg"
import {ReactComponent as RightArrowIcon} from "../../../assets/icons/arrowRightIcon24px.svg"
import {specialList} from "../../../data/specialList";
import {AnimatePresence, motion} from "framer-motion"

const HeroSlider = () => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const copyList = [...specialList]
    const [currentSlide, setCurrentSlide] = useState(copyList[0])

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentSlide((current) => {
              return current === copyList[copyList.length - 1] ? copyList[0] : copyList[1]
          })
        }, 10000)
        return () => clearInterval(interval)
    }, [copyList])

    const nextSlide = () => {
        setCurrentSlide(currentSlide === copyList[0] ? copyList[1] : copyList[0])
    }

    const prevSlide = () => {
        setCurrentSlide(currentSlide === copyList[0] ? copyList[copyList.length - 1] : copyList[0])
    }

    return (
            <div className={classes.sliderWrapper}>
                <AnimatePresence>
                    <div className={classes.slider_bg}>
                            <motion.img initial={{x: -1360}}
                                        animate={{x: 0}}
                                        key={currentSlide.id}
                                        src={currentSlide.img}
                                        alt="actions"
                            />
                    </div>
                </AnimatePresence>

                <div className={classes.slider_actions}>
                    <div className={classes.slider_info}>
                        <h1>{currentSlide.label}</h1>
                        <p>{currentSlide.desc}</p>
                        <div className={classes.slider_link}>
                            <a href={currentSlide.link}>Подробнее</a>
                        </div>
                    </div>

                    <div className={classes.slider_controls}>
                        <Button action={prevSlide} icon={<LeftArrowIcon /> } />
                        <Button action={nextSlide} icon={<RightArrowIcon />} />
                    </div>
                </div>
            </div>
    );
};

export default HeroSlider;