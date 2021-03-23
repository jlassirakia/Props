import React from 'react';

function Prof  (props)
{
  
  return <p>  {props.children}  <b> FullName:</b> {props.FullName  } <b>Biographie:</b> {props.Bio} <b>Profession:</b>{props.profession}  </p>; 

}

export default Prof ;


