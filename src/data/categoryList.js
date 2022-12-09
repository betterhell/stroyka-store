import doors from "../assets/category/doors.png"
import electrical from "../assets/category/electrical.png"
import gardenTools from "../assets/category/gardenTools.png"
import interiors from "../assets/category/interiors.png"
import linoleum from "../assets/category/linoleum.png"
import materials from "../assets/category/materials.png"
import plumbing from "../assets/category/plumbing.png"
import paints from "../assets/category/paints.png"
import showers from "../assets/category/showers.png"
import tools from "../assets/category/tools.png"
import wallpaper from "../assets/category/wallpaper.png"
import windows from "../assets/category/windows.png"

import { v4 as uuidv4 } from 'uuid';

export const categoryList = [
    {
        image: doors,
        name: "Двери",
        id: uuidv4(),
    },
    {
        image: electrical,
        name: "Электроинструменты",
        id: uuidv4(),
    },
    {
        image: gardenTools,
        name: "Товары для дачи",
        id: uuidv4(),
    },
    {
        image: interiors,
        name: "Интерьер",
        id: uuidv4(),
    },
    {
        image: linoleum,
        name: "Линолеум",
        id: uuidv4(),
    },
    {
        image: materials,
        name: "Пиломатерьялы",
        id: uuidv4(),
    },
    {
        image: plumbing,
        name: "Сантехника",
        id: uuidv4(),
    },
    {
        image: paints,
        name: "Краски",
        id: uuidv4(),
    },
    {
        image: showers,
        name: "Душевые",
        id: uuidv4(),
    },
    {
        image: tools,
        name: "Инструменты",
        id: uuidv4(),
    },
    {
        image: wallpaper,
        name: "Обои",
        id: uuidv4(),
    },
    {
        image: windows,
        name: "Окна",
        id: uuidv4(),
    },
]