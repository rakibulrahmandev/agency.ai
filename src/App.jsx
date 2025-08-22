import { useState } from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import TrustedBy from "./components/TrustedBy/TrustedBy";
import Services from "./components/Servicess/Services";

export default function App() {

    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')

    return (
        <>
            <div className="dark:bg-black relative">
                <Header theme={theme} setTheme={setTheme} />
                <Home />
                <TrustedBy />
                <Services />
            </div>
        </>
    )
}