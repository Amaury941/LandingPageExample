interface Prop {
    children: string;
}

const Flexbox = ({children}: Prop) => {
  return (
    <div>
      <h1 className="text-center p-3"> <strong>{children}</strong>  </h1>
    </div> 
)}

export default Flexbox
