interface CardProps {
  text: string;
  photo: string;
}

function Card({
  text = "Prueba",
  photo = "./assets/Copyright.svg",}: CardProps) {
  return (
    <>
      <section className="max-w-lg bg-(--colores-card) p-4 border rounded shadow-lg mb-3">
        <div className="flex items-center">
          <div className="w-1/3">
            <img src={photo} alt="Foto" className="w-full h-auto" />
          </div>
          <div className="w-2/3 pl-4 text-black">{text}</div>
        </div>
      </section>
    </>
  );
}

export default Card;
