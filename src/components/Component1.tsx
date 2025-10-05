import type { ReactNode } from "react"

interface Prop {
    children: ReactNode;
}


const Component1 = ({children}: Prop) => {
  return (
    <div className = "alert alert-primary">
        {children}
    </div>
  )
}

export default Component1
