function Footer() {
    return (
      <>
      <section className="bg-(--colores-primarios-marron-negrizo) text-(--typography-colores-blanco) pb-5 pt-3 text-(length:--typography-size-h4)">
       <div className="flex justify-between items-center mx-10 font-(--typography-size-h2)">
         <div>
           <img src="./assets/WebCreativos.png" alt="Logo" className="w-(--logo-width) h-(--logo-height)" />
         </div>

         <div className="flex">
         <img src="./assets/Copyright.svg" alt="Copytight" className="w-(--copy-width) h-(--copy-height) mr-2" /> 
         <h1>Alejandro y Hugo</h1>
         </div>

         <div>
          <h1>CP: 45002</h1>
         </div>

         <div className="flex">
          <a href="#"><img src="./assets/twitter.svg" alt="Twitter" className="w-(--icon-width) h-(--icon-height) mr-2"/></a>
          <a href="#"><img src="./assets/Linkdein.svg" alt="Linkdein" className="w-(--icon-width) h-(--icon-height) mr-2"/></a>
          <a href="#"><img src="./assets/Gmail.svg" alt="Gmail" className="w-(--icon-width) h-(--icon-height) mr-2" /></a>
         </div>
       </div>

       <div className="flex justify-between mx-10">
         <div>
           <h1><a href="#">Politica de privacidad</a></h1>
         </div>

         <div>
         <h1><a href="#">Politica de Cookies</a></h1>
         </div>

         <div>
          <h1><a href="#">Aviso legal</a></h1>
         </div>
       </div>
         </section>
     </>
    )
  }
  
  export default Footer