import { useState } from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import TrustedBy from "./components/TrustedBy/TrustedBy";
import Services from "./components/Servicess/Services";
import OurWork from "./components/OurWork/OurWork";
import Teams from "./components/Teams/Teams";
import Contact from "./components/Contact/Contact";

export default function App() {

    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')

    return (
        <>
            <div className="dark:bg-black relative">
                <Header theme={theme} setTheme={setTheme} />
                <Home />
                <TrustedBy />
                <Services />
                <OurWork />
                <Teams />
                <Contact />
            </div>
        </>
    )
}