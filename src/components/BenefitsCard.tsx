import type { ReactNode } from "react";

interface Prop {
    heading: string;
    children?: ReactNode;
}

const BenefitsCard = ({heading,children}: Prop) => {
  return (
    <div className="col card p-2 text-center">
        <div className=" card-body">
            <h5 className="card-title">{heading}</h5>
            <p className="card-text">{children}</p>
            <a href="#" className="btn btn-primary">Entenda mais</a>
        </div>
    </div> 
  )
}
export default BenefitsCard
