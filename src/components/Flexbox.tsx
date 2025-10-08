interface Prop {
    children: string;
}

const Flexbox = ({children}: Prop) => {
  return (
    <div>
      <h1 className="text-center"> {children} </h1>
    </div> 
)}

export default Flexbox
