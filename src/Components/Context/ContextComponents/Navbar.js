import React from 'react'
import { useContext } from 'react'
import Context from '../Context';
function Navbar() {
    // Can use useContext hook and pass the Context inside it
    // To access the passed value
  const theme = useContext(Context);
  return (
    <div className={theme? 'dark' : 'light'}>
      Navbar
    </div>
  )
}

export default Navbar
