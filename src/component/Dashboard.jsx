import React from "react";
import Dashboard from "../Dashboard.css"
import { getDoc, getDocs, collection, where, query, doc, onSnapshot,addDoc } from "firebase/firestore";
import { db } from "../firebase";
import Pollunit from "./Pollunit"
import Castunit from "./Castunit"
import {useNavigate} from "react-router-dom"

export default function() {
  const[user,setUser]=React.useState({
    "voterid":""
  })
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


  const[candidate,setCandidate]=React.useState({
    "dummy": [{
      cp_name: "",
      cp_pic: "",
      cp_link: "",
      cp_id:""
    }]
  })

  const [isClicked,setIsClicked]=React.useState(false);
  const [confirmDetails,setConfirmDetails]=React.useState({
    candidateId:"",
    candidateName:"",
    confirm:false
  });

  //for writing results in db
const [clickedPoll,setClickedPoll] = React.useState("");
const [clickedCandidate,setClickedCandidate] = React.useState("");
console.log(clickedPoll);
  
const navigateTo=useNavigate();
  
  
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



  React.useEffect(() => {
    fetchPolls();
  }, [0])

const candidateDet=async(pid)=>{
  setIsClicked(true);
   const querySnapshot = await getDocs(collection(db, `candidates_details/${pid}/cd`));
    for (const doc of querySnapshot.docs) {
     console.log(doc.id, " => ", doc.data());
      setCandidate((prev) => ({
        ...prev,
        [doc.id]: [{
          cp_name: doc.data().cname,
          cp_pic: doc.data().profile_pic,
          cp_link: doc.data().video,
          cp_id:doc.data().cid
        }],
      }));
    }
};
  //function for voterid input
 const handleChange = (e) => {
    const { name, value } = e.target
    setUser((prevData) => {
      return {
        ...prevData,
        [name]: value
      }
    })
  }
console.log(user);
//function to submit vote
 //   const Submitvote =async()=>{ await
 //      addDoc(collection(db, "/result" + "/"+pid + "/"+ cid +"/"+user));
 //    console.log("done")
 // }
  function goToPrevPage() {
  setIsClicked(false);
    window.location.reload(false);
  }
 function lastfunction(){
   alert("Vote Submitted Successfully");
   navigateTo("/");
 } 

  return (<>
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
      </div>
{/*     voterid entered by user code here */}
      {confirmDetails.confirm?<div> confirmation page<br/>
      <h2>You are voting for {confirmDetails.candidateName}</h2>
        Enter your voterid in given input box for submit your vote
        <br/> <br/>
        <input type="text" 
          id="voterid"
          name="voterid"
          className="voterid"
          onChange={handleChange}
          value={user.voterid}
          />
           <br/> <br/>
        <button onClick={lastfunction}>Submit</button>
      </div>
        
        :!isClicked?<>
          
      <div className="dboard__ongpoll">
        <h1>Ongoing Polls...</h1>
      </div>

      <div> {Object.values(poll).map((val) => (
           val[0].pname==""?"":<div onClick={()=>{candidateDet(val[0].pid);setClickedPoll(val[0].pid)}}><Pollunit key={val[0].pid} poll={val[0]} /></div>
        
      ))}
      </div>

    
        </> :<div> {Object.values(candidate).map((val) => ( val[0].cp_name==""?"":<Castunit key={val[0].cp_id} candidate={val[0]} confirmation={setConfirmDetails}/>))}
                                                      
       <p onClick={goToPrevPage}
         className="dboard__prev_page">
         Previous Page
       </p>
    </div>
      }
  </>
  )
}

//fetch polls from db

//{JSON.stringify(poll)}


//


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