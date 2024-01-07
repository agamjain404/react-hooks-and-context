import React, { useEffect, useState } from 'react'

function UseEffect1() {

  const [count, setCount] = useState(0);
  

//   This will work like componentDidMount and componentDidUpdate
// Since it is running at the time of mounting and updating the application
// We can use this variation of useEffect for side effect work like api calls and all
  useEffect(() => {
    document.title = `Button Clicked ${count} times`;
  })

  return (
    <div>
      <h1>Current count {count}</h1>
      <button onClick={() => setCount(count+1)}>+1</button>
    </div>
  )
}

export default UseEffect1
