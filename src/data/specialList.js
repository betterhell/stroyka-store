import specialImg1 from "../assets/banners/image 52.png"
import specialImg2 from "../assets/banners/image 51.png"

import { v4 as uuidv4 } from 'uuid';

export const specialList = [
    {
        img: specialImg1,
        label: "Специальные предложения",
        desc: "на строительные материалы и товары для ремонта",
        link: "/special",
        id: uuidv4(),
    },
    {
        img: specialImg2,
        label: "Распродажа инструментов",
        desc: "«СтройкаСтор» стремится сделать условия покупки максимально выгодными для каждого покупателя, поэтому на сайте регулярно появляются товары со скидкой",
        link: "/special",
        id: uuidv4(),
    },
]