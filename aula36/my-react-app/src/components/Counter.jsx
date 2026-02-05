import { useState } from 'react'
function Counter(){
    const [count, setCount] = useState(0)

    return(
        <>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => setCount((count) => 0)}>
            reset
        </button>
        </>
        
        
    );
}
export default Counter;