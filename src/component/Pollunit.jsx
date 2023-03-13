import React from "react";
import pollunit from "../pollunit.css"
export default function Pollunit(props){
        //console.log(props.poll)

    return <div className="pollunit__maindiv">

        <p className="pollunit__p1">
          Poll Name : {props.poll.pname}
        </p>
      
         <p className="pollunit__p2">
           Poll Id : {props.poll.pid}
         </p>
      
        <p className="pollunit__p3">
          Eligible Students For Vote : {props.poll.eligibility}
        </p>
      
        <p className="pollunit__p4">
          Discription : {props.poll.pinfo}
        </p>
      
{/*         <p>{props.poll.et}</p>
        <p>{props.poll.st}</p>  */}
   
        </div>
}