import React from 'react'

function Child1() {
  return (
    <div>
      Child 1
    </div>
  )
}

// Can use React.memo while exporting the component
// It helps in memoising the componene so that if there is no
// state change detected inside particular component then it will not render again
// even if its parent component get rendered.
// It can be used to optimise the react app and increase its performance.
export default React.memo(Child1)
