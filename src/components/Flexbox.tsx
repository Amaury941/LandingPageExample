interface Prop {
    children: string;
}

const Flexbox = ({children}: Prop) => {
  return (
    <div className='d-flex p-2'>
      <h1> {children} </h1>
    </div> 
)}

export default Flexbox
