import React from 'react'
interface Prop {
    children: string;
}
const CTAbutton = ({children}:Prop) => {
  return (
    <div>
      <button className='btn btn-danger'> {children} </button>
    </div>
  )
}

export default CTAbutton
