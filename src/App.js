import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {BrowserRouter, Router, Route} from "react-router-dom";
import HeroSlider from "./components/UI/HeroSlider/HeroSlider";
import {specialList} from "./data/specialList";

function App() {

    return (
    <BrowserRouter>
        <Header />
        <HeroSlider specialList={specialList} />
        <Footer />
    </BrowserRouter>
  );
}

export default App;
