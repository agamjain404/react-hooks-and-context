import React, { useEffect, useState } from 'react'

function UseEffect3() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');


    // With this variation of useEffect we can use this function to run
    // On a particular variable state change
    // Now this function will run only when the state of count is changed
    // On text change it will not going to run anything
    useEffect(() => {
        document.title = `Button Clicked ${count} times`;
    }, [count])

    return (
    <div>
        <h1>Current count {count}</h1>
        <button onClick={() => setCount(count+1)}>+1</button>
        <input type='text' onChange={(e) => setText(e.target.value)} value={text}/>
    </div>
    )
}

export default UseEffect3
