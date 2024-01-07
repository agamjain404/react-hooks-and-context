import React, { useEffect, useState } from 'react'

function UseEffect2() {
    const [count, setCount] = useState(0);


    // Passing a empty dependency array with useEffect will make it behave like
    // componentDidMount() as now this function will be running only ones when the DOM
    // finishes loading.
    useEffect(() => {
        document.title = `Button Clicked ${count} times`;
    }, [])

    return (
    <div>
        <h1>Current count {count}</h1>
        <button onClick={() => setCount(count+1)}>+1</button>
    </div>
    )
}

export default UseEffect2
