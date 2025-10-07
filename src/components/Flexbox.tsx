interface Prop {
    children: string;
}

const Flexbox = ({children}: Prop) => {
  return (
    <div className='d-flex p-2 justify-content-center'>
      <h1 className="text-center"> {children} </h1>
    </div> 
)}

export default Flexbox
