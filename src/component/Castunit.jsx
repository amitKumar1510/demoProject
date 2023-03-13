import React from "react";
import castunit from "../castunit.css"
export default function Castunit(props){
  const handleClick=(prev)=>{(
    props.confirmation({
        ...prev,
         candidateId:props.candidate.cp_id,
    candidateName:props.candidate.cp_name,
    confirm:true
    
  }))};

  return <div className="castunit__maindiv">
    
    <img className="castunit__img"
      src={props.candidate.cp_pic}
    />
    
    <div className="castunit__cdet">
      
     <p className="castunit__p1">
       Candidate Name : {props.candidate.cp_name}
     </p>
      
    <a className="castunit__a" 
      href={props.candidate.cp_link}
      target="_blank">
      Candidate-agenda
    </a>

    <div className="castunit__btn" onClick={()=>handleClick()}>
      Select
    </div>
  </div>
  </div>
 
}