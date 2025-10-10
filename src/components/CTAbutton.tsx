interface Prop {
    children: string;
    type?: string;
}
const CTAbutton = ({children, type}:Prop) => {
  return (
    <div className='d-flex p-2 justify-content-center'>
      <button className={"btn rounded-5 "+ (type? "btn-"+type :'btn')}> <b>{children}</b> </button>
    </div>
  )
}

export default CTAbutton
