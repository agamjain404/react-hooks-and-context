import React, { useContext } from 'react'
import Context from '../Context'

function Parent2() {
 // Can use useContext hook and pass the Context inside it
    // To access the passed value
  const theme = useContext(Context);

  return (
    <div className={theme? 'dark' : 'light'}>
      Parent 2
    </div>
  )
}

export default Parent2
