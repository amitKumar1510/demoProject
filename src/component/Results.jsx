import React from "react";
import castunit from "../Result.css";
import { getDoc, getDocs, collection, where, query, doc, onSnapshot, addDoc, updateDoc, arrayUnion, increment } from "firebase/firestore";
import { db } from "../firebase";
import Resultunit from "./Resultunit";
import {useNavigate} from "react-router-dom"




export default function Results() {

  
  
  const [poll, setPoll] = React.useState({
    "dummy": [{
      pname: "",
      pid: ""
    }]
  })

  const [candidate, setCandidate] = React.useState({
    "dummy": [{
      cp_name: "",
      cp_pic: "",
      cp_id: ""
    }]
  })
  const [isClicked, setIsClicked] = React.useState(false)
  const [passPid, setPassPid] = React.useState("")

const navigateTo=useNavigate();
  
  const fetchPolls = async () => {
    const querySnapshot = await getDocs(collection(db, "polls"));
    for (const doc of querySnapshot.docs) {
      // console.log(doc.id, " => ", doc.data());
      setPoll((prev) => ({
        ...prev,
        [doc.id]: [{
          pname: doc.data().pollname,
          pid: doc.data().pollid,
        }],
      }));
    }
  };

  React.useEffect(() => {
    fetchPolls();
  }, [0])

  const handleCandidateResult = async (pid) => {
    setIsClicked(true);
    const querySnapshot = await getDocs(collection(db, `candidates_details/${pid}/cd`));
    for (const doc of querySnapshot.docs) {
      console.log(doc.id, " => ", doc.data());
      setCandidate((prev) => ({
        ...prev,
        [doc.id]: [{
          cp_name: doc.data().cname,
          cp_pic: doc.data().profile_pic,
          cp_id: doc.data().cid
        }],
      }));
    }
  };

const goBack=()=>{
        window.location.reload();
  // document.querySelector("#goback").style.visibility = "hidden";
    }

  // function handleCandidateResult(id){

  // }
  



  return <>
    <div >
      {!isClicked ? <div className="result__main_div">
        {Object.values(poll).map((val) => (
          val[0].pname == "" ? "" : <div className="result__div2" onClick={() => { handleCandidateResult(val[0].pid); setPassPid(val[0].pid) }}>Poll Name : {val[0].pname} <br/> <br/>Poll Id : {val[0].pid}<br/><br/> <p id="p__result">Click to check Result</p>
          </div>
        ))}
      </div>

        :
        <div>
          {Object.values(candidate).map((val) => (val[0].cp_name == "" ? "" : <div>{<Resultunit cid={val[0].cp_id} cname={val[0].cp_name} cpic={val[0].cp_pic} pid={passPid} />}</div>))}
        </div>
      }
    </div>
    <div onClick={goBack} id="goback"> Go back</div><br/>
      <div onClick={()=>{navigateTo("/")}}id="gotoinfo"> Go back to Info</div>
  </>
}
//val[0].cp_id
//candidateDet(val[0].pid);setClickedPoll(val[0].pid)


































// import React, { useState } from "react";
// import { db } from "../firebase";
// import { getDoc, getDocs, collection, where, query, doc, onSnapshot } from "firebase/firestore";
// //import Pollresults from "./Pollresults"
// export default function Results() {

//  const [results, setResults] = React.useState({
//     "dummy": [{
//       pname: "",
//       pid: "",
//         count:0

//     }]
//   });

//   const fetchResults = async () => {
//     const querySnapshot = await getDocs(collection(db, "polls"));
//     for (const doc of querySnapshot.docs) {
//      // console.log(doc.id, " => ", doc.data());
//       setResults((prev) => ({
//         ...prev,
//         [doc.id]: [{
//           pname: doc.data().pollname,
//           pid: doc.data().pollid
//         }],
//       }));
//     }
//   };
//     const fetchCount= async (pid)=>{
// const querySnapshot = await getDocs(collection(db, "results"));

//     }

// //   const Rcollection=()=>{
// // //    // Get a reference to the document
// // // const documentRef = firestore.collection('result').doc('1918');

// // // // Get a list of subcollections for the document
// // // documentRef.listCollections().then(collections => {
// // //   // Loop through each subcollection and log its name
// // //   collections.forEach(collection => {
// // //     console.log(`Subcollection name: ${collection.id}`);
// // //   });
// // // });

// //   }

//    React.useEffect(() => {
//     fetchResults();
//      //Rcollection();
//   }, [0])

//   return (
//     <div>

//      <div> {Object.values(results).map((val) => ( val[0].pname==""?"":<div>Name:{val[0].pname}<br/>Id:{val[0].pid}{<Pollresults pid={val[0].pid}/>}</div>))}
//       </div>
//     </div>
//   );
// }

// //<Castunit key={val[0].cp_id} candidate={val[0]} confirmation={setConfirmDetails}/>

// //export default function Results()






// {/* const [inputText, setInputText] = useState("");

//   const handleChange = (event) => {
//     const newInputText = event.target.value;
//     const regex = /^\d{0,2}-?\d{0,2}-?[A-Z]{0,3}-?\d{0,3}$/;
//     if(newInputText.lenght!=2){
//       setInputText(()=>(newInputText+"-"));
//       console.log(newInputText);
//     }

//     if (regex.test(newInputText) || newInputText === "") {
//       setInputText(newInputText);
//     } else if (newInputText.length < inputText.length) {
//       // Allow deletion of characters
//       setInputText(newInputText);
//     }
//   }; */}
// //<input type="text" value={inputText} onChange={handleChange} />