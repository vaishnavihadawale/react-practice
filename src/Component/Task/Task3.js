import { useState } from "react"
export const TaskThree = () => {
    const [count, setCount] = useState(0);
    function handlerCount() {
        setCount(count + 1)
    }
    return (
        <button onClick={handlerCount}>Clicked {count} times</button>
    )
}