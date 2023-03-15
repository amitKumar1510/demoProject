import React from "react";
import resultunit from "../resultunit.css";
import { getDoc, getDocs, collection, where, query, doc, onSnapshot,addDoc,updateDoc, arrayUnion,increment  } from "firebase/firestore";
import { db } from "../firebase";


export default function Resultunit(props){
const[count,setCount]=React.useState(0)


   const fetchCount = async () => {
     const ref = doc(db, `results/FpOlz9X6c4L6LuGhKqxv/${props.pid}/${props.cid}`);
// Atomically add a new region to the "regions" array field.
    // console.log(props.cid);
await getDoc(ref).then(docSnap => {
      if (docSnap.exists()) {
        //setVerify(true);
        console.log( docSnap.data().count);
        setCount( docSnap.data().count);
      }
      })
}
 React.useEffect(()=>{
   fetchCount();
 },[]) 
 return <>
  <div className="resultunit__main_div">
    
    <div className="resultunit__div2">
      
        <img className="resultunit__img" src={props.cpic}/>
      
      <div className="resultunit__details">
        <p>Candidate Id : {props.cid}</p>
        <p>Candidate Name : {props.cname}</p>
        <p>Total Vote : {count}</p>
    </div>
   </div>
  </div> 
  </>
}