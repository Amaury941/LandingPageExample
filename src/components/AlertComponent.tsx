import { type ReactNode } from "react";

interface Prop {
    children: ReactNode;
}

const AlertComponent = ({children}:Prop) => {
  return (
    <div className="alert alert-danger" role="alert">
    {children}
    </div>
  )
}

export default AlertComponent
