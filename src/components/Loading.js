import React from 'react'
import spinnerimg from './assests/spinner.gif'

function Loading() {
  return (
    <>
       <div className='w-100 mt-20'>
       <img
        width={180}
        className='text-center mx-auto'
        src={spinnerimg}
        alt='Loading...'
      />
    </div>
    </>
  )
}

export default Loading
