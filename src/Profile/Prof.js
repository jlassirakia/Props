import React from 'react';
import PropTypes from "prop-types";

function Prof  (props)

{
  return <p>  
  

    {props.children}  <br></br> <b> FullName:</b> {props.FullName  } <br></br>  <b>Biographie:</b> {props.Bio}   <br></br><b>Profession:</b>{props.profession} 
     <br></br>  
     <button variant="primary" size="lg" active   onClick={e=>props.HandelName(props.FullName) } className="bt">
      <b>cliquer</b>      
  </button>

   </p>; 


};


Prof.propTypes={

FullName:PropTypes.string,
Bio:PropTypes.string,
HandelName:PropTypes.func,
profession:PropTypes.string

};


Prof.defaultProps={
  FullName:"Messi"
};



export default Prof ;


