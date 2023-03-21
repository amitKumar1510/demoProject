import React from "react";
import Dashboard from "../Dashboard.css"
import { getDoc, getDocs, collection, where, query, doc, onSnapshot,addDoc,updateDoc, arrayUnion,increment  } from "firebase/firestore";
import { db } from "../firebase";
import Pollunit from "./Pollunit"
import Castunit from "./Castunit"
import {useNavigate} from "react-router-dom"

export default function(props) {
  console.log(props.mainprop)
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

  const[voterslist,setVoterslist]=React.useState([""]);
  
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
  console.log(clickedCandidate);
 const[clickedeligibility,setClickedEligibility]=React.useState("");
  console.log(clickedeligibility);
const navigateTo=useNavigate();
  
  //function for retriving current ongoing polls
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
//function for retriving candidate data
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
//voterid write or wrong, and it will match with current login user voterid
const handleClick=()=>{
  document.querySelector("#poll__submin_btn").style.visibility = "hidden";
  if(props.mainprop.lgid === user.voterid)
  {
    voterIdAvil();
  }
  else{
    alert("wrong voter id, try again");
    setUser({
      voterid:""
    })
    document.querySelector("#poll__submin_btn").style.visibility = "visible";
  }
}

  
//function for voterId check already voted or not
 const voterIdAvil = async () => {
     const ref = doc(db, `results/FpOlz9X6c4L6LuGhKqxv/${clickedPoll}/voterslist`);  
await getDoc(ref).then(docSnap => {
      if (docSnap.exists()) {
       
        console.log( docSnap.data().list);
        // setVoterslist( docSnap.data().list);
        if(user.voterid === "" || docSnap.data().list.includes(user.voterid)){
          alert("Error");
          document.querySelector("#poll__submin_btn").style.visibility = "visible";
        }
        else{
          
          Submitvote();
          
        }
      }
      })
}
  console.log(voterslist);
  //
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
//function to submit vote and  count vote
   const Submitvote =async()=>{ 
      const ref = doc(db, `results/FpOlz9X6c4L6LuGhKqxv/${clickedPoll}/${clickedCandidate}`);
     const ref1 = doc(db, `results/FpOlz9X6c4L6LuGhKqxv/${clickedPoll}`,"voterslist");
// Atomically add a new region to the "regions" array field.
await updateDoc(ref, {
    count:increment(1),
    voterslist: arrayUnion(user.voterid)
});
     await updateDoc(ref1, {
   
  list:arrayUnion(user.voterid)
});
    console.log("done");
     setUser({
      voterid:""
    })
      navigateTo("/results");
 }
  // function goto privious page
  function goToPrevPage() {
  setIsClicked(false);
    window.location.reload(false);
  }
  
 // function lastfunction(){
 //   alert("Vote Submitted Successfully");
 //   navigateTo("/");
 // } 
  
//condition to be copied later props.mainprop.isLoggedin or true
  return (<> {true?<div>
    <div className="dboard__onpoll">
      <div className="dboard__header">

        <img src="../public/favicon.svg"
          className="dboard__img"
        />

        <p className="dboard__header__name">
          Hi...<br /> {props.mainprop.name}
        </p>

        <p className="dboard__header__roll">
          Enroll No : {props.mainprop.roll}
        </p>

      </div>
      </div>
{/*     voterid entered by user code here */}
  {confirmDetails.confirm?<div className="dashboard__conf_maindiv" ><div> <br/>
    {props.mainprop.dept===clickedeligibility||clickedeligibility==="all" ?<div>
    
      <h2>You are voting for <h1>{confirmDetails.candidateName}</h1></h2>
        <h2> Enter your voterid in given input box for submit your vote</h2>
        <br/> <br/>
        <input type="text" 
          id="voterid"
          name="voterid"
          className="voterid"
          onChange={handleChange}
          value={user.voterid}
          />
           <br/> <br/>
      <button id="poll__submin_btn"onClick={handleClick}>Submit</button>
      </div>
    :<div>
      <h1>Sorry....</h1>
      <h2>You are not eligible for this vote</h2> 
      <h2> <br/>Because,Poll belongs to {clickedeligibility} department</h2>
    </div>
    }
      </div>
        </div>

        :!isClicked?<>
          
      <div className="dboard__ongpoll">
        <h1>Ongoing Polls...</h1>
      </div>

      <div> {Object.values(poll).map((val) => (
           val[0].pname==""?"":<div onClick={()=>{candidateDet(val[0].pid);setClickedPoll(val[0].pid);setClickedEligibility(val[0].eligibility)}}><Pollunit key={val[0].pid} poll={val[0]} /></div>
        
      ))}
      </div>

    
        </> :<div> {Object.values(candidate).map((val) => ( val[0].cp_name==""?"":<Castunit key={val[0].cp_id} candidate={val[0]} confirmation={setConfirmDetails} setClickedCandidate={setClickedCandidate}/>))}
                                                      
       <p onClick={goToPrevPage}
         className="dboard__prev_page">
         Previous Page
       </p>
    </div>
        
      }
    </div>
   :<div>Oops you are not logged in <div onClick={navigateTo("/login")}>log in now</div></div> }
    
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