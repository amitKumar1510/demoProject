
import React from "react";
import "../Info.css";
import { Link } from "react-router-dom";

export default function Info(){
  return <div className="home">

    <div className="info__inner__div">
    
       <Link
       to={`/results`} 
       id="info__result__link">
       <div className="info__result">
         Results
       </div>
     </Link>
  
       <Link
       to={`/login`} 
       id="info__link">
       <div className="info__login">
         Login
       </div>
     </Link>

  </div>
        <img 
          src="../public/voting.jpg" className="Info__img">
        </img>
    

    </div>
}

    // <Link to={`/signup`} className="home__link"><div className="home__signup">Signup</div></Link>
    // <br/>
