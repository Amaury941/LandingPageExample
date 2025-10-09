import type { ReactNode } from "react";

interface Prop {
    heading: string;
    children?: ReactNode;
    hasButton?: boolean;
    buttonMessage?: string;
}

const BenefitsCard = ({heading,children,hasButton=false,buttonMessage}: Prop) => {
  return (
    <div className="col card p-2 text-center">
        <div className=" card-body">
            {hasButton && <a href="#" className="btn btn-danger p-1">{buttonMessage}</a>} 
            <br></br>
            <h5 className="card-title">{heading}</h5>
            <p className="card-text">{children}</p>
        </div>
    </div> 
  )
}
export default BenefitsCard
