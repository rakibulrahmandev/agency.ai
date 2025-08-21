import { useState } from "react";
import Header from "./components/Header/Header";

export default function App() {

    const [theme, setTheme] = useState('light')

    return (
        <>
            <div className="dark:bg-black relative">
                <Header theme={theme} setTheme={setTheme} />
            </div>
        </>
    )
}