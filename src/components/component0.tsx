import { useState } from "react";
function Component0(){
    const [count,setCount] = useState(0);
    return <button type = "button" onClick={() => {setCount(count+1);console.log(count)}}> Clicked {count} times! </button>
};
export default Component0;