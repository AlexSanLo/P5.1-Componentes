
interface ButtonProps {
    text: string;
    actionClick: () => void;}
  
  function Button ({text = "Login", actionClick}: ButtonProps) {

    return (
      <button className={`bg-(--colores-primarios-rojo) hover:bg-(--colores-primarios-marron-negrizo)  
                        text-(--typography-colores-blanco) font-(--typography-peso-bold) w-(--button-width) 
                            py-2 px-4 rounded cursor-pointer`} onClick={actionClick}>{text}</button>
    )
  
  }
  
  export default Button