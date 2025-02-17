interface CardProps {
      text: string 
      photo: string ;}

function Card({text="Prueba", photo="./assets/Copyright.svg"}: CardProps) {
    return (
      <>
      <section>
        <div>
          <div>
            {photo}
          </div>
          <div>
            {text}
          </div>
        </div>
      </section>
      </>
    )
  }
  
  export default Card