import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main from "./components/pages/Main/Main";
import Promotions from "./components/Promotions/Promotions";
import Notfound from "./components/pages/Notfound/Notfound";
import Login from "./components/pages/Login/Login";
import Registration from "./components/pages/Registration/Registration";

function App() {

    return (
    <BrowserRouter>
        <Header />
            <Routes>
                <Route exact path="/" element={<Main />} />
                <Route path="/actions" element={<Promotions />} />
                <Route path="*" element={<Notfound />} />
                <Route path="/login" element={<Login />} />
                <Route path="/registration" element={<Registration />} />
            </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
