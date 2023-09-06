import React from 'react';
import { Link } from 'react-router-dom';

function Notfound() {
  return (
    <>
    <div className='notfound'>
      <p>OPPS. NOTHING TO SEE HERE, KINDLY GO BACK TO HOMEPAGE  </p>
     
      <button><Link to="/"> Click Here</Link> </button>  
    </div>
   
    </>
  );
}

export default Notfound;
