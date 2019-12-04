import React, { Fragment } from 'react';
import Spinner from './Loader.gif';


const Spinners = () => {
  return (
    <Fragment>
      <img src={Spinner} alt="Loading" style={{ width: '150px', margin: 'auto', display: 'block' }} />
    </Fragment>
  )
}

export default Spinners