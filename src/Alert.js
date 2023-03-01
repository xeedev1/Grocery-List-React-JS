import React, { useEffect } from 'react'

const Alert = ({type, msg, removeAlert, list}) => {
  useEffect(()=>{
    const timeout = setTimeout(()=>{
      removeAlert();
    }, 3000);
    return ()=> clearTimeout(timeout);
  },[list])  // eslint-disable-line react-hooks/exhaustive-deps
  return <p className={`alert alert-${type}`}>{msg}</p>
}

export default Alert
