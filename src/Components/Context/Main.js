import React from 'react'
import Navbar from './ContextComponents/Navbar'
import Parent1 from './ContextComponents/Parent1'
import Child1 from './ContextComponents/Child1'
import Parent2 from './ContextComponents/Parent2'
import Context from './Context'
import { useState } from 'react'

function Main() {
  
  const [theme, setTheme] = useState(false);
  
  return (
    // Import created context and wrap all the components inside it 
    // whom needed context. Can pass value within context which can be accessed by all the wrapped components
    <Context.Provider value={theme}>
      <button onClick={() => setTheme(!theme)}>Change Theme</button>
      <Navbar/>
      <Parent1/>
      <Parent2/>
    </Context.Provider>
  )
}

export default Main
