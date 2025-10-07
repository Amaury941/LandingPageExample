interface Prop {
    children: string;
}
const CTAbutton = ({children}:Prop) => {
  return (
    <div className='d-flex p-2 justify-content-center'>
      <button className='btn btn-danger '> {children} </button>
    </div>
  )
}

export default CTAbutton
