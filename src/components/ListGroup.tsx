import { useState, type MouseEvent } from "react";
interface ListGroupProps {
    itens: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}

function ListGroup(props: ListGroupProps) {

    const itens = [
        'Xique xique',
        'Maceió',
        'Jacaré dos homens',
        'Salvadô'
    ];

    const [selectedIndex,setSelectedIndex] = useState(-1);


    // Event handler
    const handleClick = (event: MouseEvent) => {
            setSelectedIndex(itens.indexOf(event.target.innerText)); 
            props.onSelectItem(event.target.innerText);
            console.log(`${selectedIndex} is the selected index`);
            console.log(event.target.innerText); 
        }

    const Message = () => {
        return itens.length === 0? <p> No cities found </p> : null
    }
    //itens = [];
    
    return (
    <>
    <h1> List </h1>
    {itens.length === 0 && <p> No itens found :( </p>}

    {Message()}
    <ul className="list-group">

        {itens.map((item, index) =>
            <li 
            key={item} 
            onClick={handleClick} 
            className={selectedIndex === index ? "list-group-item active":"list-group-item" }>            
            {item}
            </li>
        )};
    </ul>
    </>
    
  );
}

export default ListGroup;
