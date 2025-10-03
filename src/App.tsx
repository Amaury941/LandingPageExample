import Message from "./components/Message";
import Message2 from "./components/Message2";
import Component0 from "./components/component0";
import ListGroup from "./components/ListGroup";
import ComponentExample from "./components/ComponentExample";

function App(){
  const itens = ['Xique xique','Maceió','Jacaré dos homens','Salvadô'];
  const handleSelectItem = (item: string) => {
    console.log(`this is ${item}`);
  }
  
  
  return <div>
    <Message/>
    <Message2/>
    <Component0/>
    <ListGroup itens={itens} heading="Cities" onSelectItem={handleSelectItem}></ListGroup>

    <ComponentExample name = "Eduardo"></ComponentExample>
    <ComponentExample name = "Mauricio"></ComponentExample>

  </div>  
}

export default App;