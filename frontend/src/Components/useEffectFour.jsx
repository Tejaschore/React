import { useState, useEffect } from "react";

function UseEffectFour() {
    const [item1, setItem1] = useState(0);
    const [item2, setItem2] = useState(10);

    function ChnageItem1() {
        setItem1((prevValue) => prevValue + 1)
    }
    function ChnageItem2() {
        setItem2((prevValue) => prevValue + 1)
    }

    useEffect(() => {
        console.log("Commeing while rendering on first and also wehne counter 1 , 2 chnages...")
     }, [item1, item2])

    return (
        <div>
            <h1>Item 1 : {item1}</h1>
            <button onClick={ChnageItem1}>+ for item 1</button>
            <h1>Item 2 : {item2}</h1>
            <button onClick={ChnageItem2}>+ for item 2</button>
        </div>
    )
}

export default UseEffectFour;