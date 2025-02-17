// import { useState } from 'react'
// import viteLogo from '/vite.svg'
import Button from "./components/Button";
//import Card from "./components/Card";
//import Inputs from "./components/Input";
//import Header from "./components/Header";
//import Footer from "./components/Footer";

function App() {
    return (
        <>
        <section className="my-10 mx-10 font-(--typography-peso-bold) text-(--typography-size-h2)">
            <div>
                <h2>Componentes Cards</h2>
            </div>
        </section>

        <section className="my-10 mx-10 font-(--typography-peso-bold) text-(--typography-size-h2)">
            <div>
            <h2>Componentes Button</h2>
            <Button text="Login" actionClick={() => console.log("Logueado/Registrado")}/>
            </div>
        </section>

        <section className="my-10 mx-10 font-(--typography-peso-bold) text-(--typography-size-h2)">
            <div>
                <h2>Componentes Inputs</h2>
            </div>
        </section>
    </>
    )
}

export default App
