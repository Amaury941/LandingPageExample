function ListGroup() {

    let itens = [
        'Xique xique',
        'Maceió',
        'Jacaré dos homens',
        'Salvadô'
    ];

    const Message = () => {
        return itens.length === 0? <p> No cities found </p> : null
    }
    itens = [];
    
    return (
    <>
    <h1> List </h1>
    {itens.length === 0 && <p> No itens found :( </p>}

    {Message()}
    <ul className="list-group">

        {itens.map(item=><li key={item} className="list-group-item">
            {item}
            </li>)};
    </ul>
    </>
    
  );
}

export default ListGroup;
