import React from 'react'
import spinnerimg from './assests/spinner.gif'

function Loading() {
  return (
    <>

       <div className='spinwhole'>
       <img
        width={180}
        className='spintext'
        src={spinnerimg}
        alt='Loading...'
      />
    </div>
    </>
  )
}

export default Loading
