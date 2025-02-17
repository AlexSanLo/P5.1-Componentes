// import { useState } from 'react'
import Button from "./components/Button";
import Card from "./components/Cards";
import Inputs from "./components/Inputs";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <section className="font-(--typography-peso-bold) text-(--typography-size-h2)">
        <div>
          <h2 className="text-3xl my-6 mx-10">Componentes Header</h2>
          <Header/>
        </div>
      </section>

      <section className="my-10 mx-10 font-(--typography-peso-bold) text-(--typography-size-h2)">
        <div>
          <h2 className="text-3xl">Componentes Cards</h2>
          <Card text="Prueba" photo="assets/informatico.png" />
          <Card text="Prueba" photo="assets/informatico.png" />
        </div>
      </section>

      <section className="my-10 mx-10 font-(--typography-peso-bold) text-(--typography-size-h2)">
        <div>
          <h2 className="text-3xl">Componentes Button</h2>
          <Button
            text="Login"
            actionClick={() => console.log("Logueado/Registrado")}
          />
        </div>
      </section>

      <section className="my-10 mx-10 text-(--typography-size-h2)">
        <div>
          <h2 className="text-3xl font-(--typography-peso-bold)">
            Componentes Inputs
          </h2>
          <div className="gap-5 flex">
            <Inputs
              placeholder="Nombre"
              id="1"
              actionSearch={(text) => console.log(text)}
            />
            <Inputs
              placeholder="Email"
              id="2"
              actionSearch={(text) => console.log(text)}
            />
            <Inputs
              placeholder="Telefono"
              id="3"
              actionSearch={(text) => console.log(text)}
            />
            <Inputs
              placeholder="Direccion"
              id="4"
              actionSearch={(text) => console.log(text)}
            />
          </div>
        </div>
      </section>

      <section className="my-10 font-(--typography-peso-bold) text-(--typography-size-h2)">
            <div>
                <h2 className="text-3xl">Componentes Footer</h2>
                <Footer/>
            </div>
        </section>
    </>
  );
}

export default App;
