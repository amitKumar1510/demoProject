import React from "react";
import Dashboard from "../Dashboard.css"
import { getDoc, getDocs, collection, where, query, doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import Pollunit from "./Pollunit"

export default function() {
  const [poll, setPoll] = React.useState({
    "dummy": [{
      pname: "",
      pinfo: "",
      eligibility: "",
      st: "",
      et: "",
      pid: ""
    }]
  })
  //chAT GPT
  const fetchPolls = async () => {
    const querySnapshot = await getDocs(collection(db, "polls"));
    for (const doc of querySnapshot.docs) {
     // console.log(doc.id, " => ", doc.data());
      setPoll((prev) => ({
        ...prev,
        [doc.id]: [{
          pname: doc.data().pollname,
          pinfo: doc.data().info,
          eligibility: doc.data().eligibility,
          st: doc.data().start_time,
          et: doc.data().end_time,
          pid: doc.data().pollid,
        }],
      }));
    }
  };


  //
  // const fetchPolls =async ()=>{
  //    //const q = query(collection(db, "polls"));
  //    const querySnapshot = await getDocs(collection(db, "polls"));
  // querySnapshot.forEach((doc) => {
  //   // doc.data() is never undefined for query doc snapshots
  //   console.log(doc.id, " => ", doc.data());
  //     setPoll((prev)=>{
  //         ...prev,
  //             [doc.id] : {pname:"",
  //   pinfo:"",
  // eligibility:"",
  //     st:"",
  //     et:"",
  //     pid:""
  //      }  
  //     });
  // });


  //     }

  React.useEffect(() => {
    fetchPolls();
  }, [0])



  return (
    <div className="dboard__onpoll">
      <div className="dboard__header">

        <img src="../public/favicon.svg"
          className="dboard__img"
        />

        <p className="dboard__header__name">
          Hi...<br /> Adarsh Kumar Dash
        </p>

        <p className="dboard__header__roll">
          Enroll No : 20/04/DCS/03
        </p>

      </div>
      <div className="dboard__ongpoll">
        <h1>Ongoing Polls...</h1>
      </div>

      <div> {Object.values(poll).map((val) => (
           val[0].pname==""?"":<Pollunit key={val[0].pid} poll={val[0]} />
        
      ))}
      </div>

    </div>
  )
}

//fetch polls from db

//{JSON.stringify(poll)}


//