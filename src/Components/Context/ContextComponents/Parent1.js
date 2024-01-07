import React from 'react'
import Child1 from './Child1'
import Context from '../Context'
import { useContext } from 'react'

function Parent1() {
   // Can use useContext hook and pass the Context inside it
    // To access the passed value
  const theme = useContext(Context);

  return (
    <div className={theme? 'dark' : 'light'}>
      Parent 1
      <Child1/>
    </div>
  )
}

export default Parent1
