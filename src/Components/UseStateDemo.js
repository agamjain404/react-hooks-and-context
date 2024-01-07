import React, { useState } from 'react'

function UseStateDemo() {
  
// This is how useState is used
// First parameter will be state variable and the second parameter will be the function name used to set the state variable.
// Can pass the default value needed to be set in state as a parameter of useState function.
  const [count, setCount] = useState(0);
  const [obj, setObj] = useState({msg: 'hello', msg2: 'hi'});
  
  return (
    <div>
      <h1>Counter {count}</h1>
      <button onClick={() => setCount(count+1)}>+1</button>
      <h1>{obj.msg}</h1>
      <h1>{obj.msg2}</h1>
      <button onClick={() => setObj({...obj, msg2: 'hello'})}>Change msg</button>
    </div>
  )
}

export default UseStateDemo
