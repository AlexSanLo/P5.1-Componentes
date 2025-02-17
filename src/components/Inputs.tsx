interface inputProps {
    placeholder: string;
    id: string;
    actionSearch: (text: string) => void;}

function input({placeholder, id, actionSearch}: inputProps) {
    return (
      <div>
        <input className="border-2 border-black rounded-md px-2 font-(--typography-peso-regular)" 
                id={id} type="text"  placeholder={placeholder} onChange={(e) => actionSearch(e.target.value)}/>
      </div>
    )
  }
  
  export default input