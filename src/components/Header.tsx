import Button from "./Button";


function Header() {
    return (
      <>
       <section className="bg-(--colores-primarios-marron-negrizo) py-4">
        <div className="flex justify-between items-center h-full mx-10">
          <div>
            <img src="./assets/WebCreativos.png" alt="Logo" className="w-(--logo-width) h-(--logo-height)" />
          </div>

          <div>
            <ul className="flex gap-14 text-(--typography-colores-rojo) text-(length:--typography-size-h4)">
              <li>
                <a href="Home">Home</a>
              </li>
              <li>
                <a href="Nosotros">Nosotros</a>
              </li>
              <li>
                <a href="Servicio">Servicio</a>
              </li>
              <li>
                <a href="Contacto">Contacto</a>
              </li>
            </ul>
          </div>

          <div>
            <Button
              text="Login"
              actionClick={() => console.log("Logueado/Registrado")}
            />
          </div>
        </div>
      </section>
      </>
    )
  }
  
  export default Header