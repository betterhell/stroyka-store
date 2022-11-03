import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {BrowserRouter, Router, Route} from "react-router-dom";
import HeroSlider from "./components/UI/HeroSlider/HeroSlider";
import {specialList} from "./data/specialList";
import Promotions from "./components/Promotions/Promotions";

function App() {

    return (
    <BrowserRouter>
        <Header />
        <HeroSlider specialList={specialList} />
        <Promotions />
        <Footer />
    </BrowserRouter>
  );
}

export default App;
