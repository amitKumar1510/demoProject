import React, { useState } from "react";
import { db } from "../firebase";
import { getDoc, getDocs, collection, where, query, doc, onSnapshot } from "firebase/firestore";
//import Pollresults from "./Pollresults"
export default function Results() {

 const [results, setResults] = React.useState({
    "dummy": [{
      pname: "",
      pid: "",
        count:0
    
    }]
  });
    
  const fetchResults = async () => {
    const querySnapshot = await getDocs(collection(db, "polls"));
    for (const doc of querySnapshot.docs) {
     // console.log(doc.id, " => ", doc.data());
      setResults((prev) => ({
        ...prev,
        [doc.id]: [{
          pname: doc.data().pollname,
          pid: doc.data().pollid
        }],
      }));
    }
  };
    const fetchCount= async (pid)=>{
const querySnapshot = await getDocs(collection(db, "results"));
        
    }

  const Rcollection=()=>{
//    // Get a reference to the document
// const documentRef = firestore.collection('result').doc('1918');

// // Get a list of subcollections for the document
// documentRef.listCollections().then(collections => {
//   // Loop through each subcollection and log its name
//   collections.forEach(collection => {
//     console.log(`Subcollection name: ${collection.id}`);
//   });
// });

  }

   React.useEffect(() => {
    fetchResults();
     //Rcollection();
  }, [0])

  return (
    <div>
      
     <div> {Object.values(results).map((val) => ( val[0].pname==""?"":<div>Name:{val[0].pname}<br/>Id:{val[0].pid}{<Pollresults pid={val[0].pid}/>}</div>))}
      </div>
    </div>
  );
}

//<Castunit key={val[0].cp_id} candidate={val[0]} confirmation={setConfirmDetails}/>

//export default function Results()






{/* const [inputText, setInputText] = useState("");

  const handleChange = (event) => {
    const newInputText = event.target.value;
    const regex = /^\d{0,2}-?\d{0,2}-?[A-Z]{0,3}-?\d{0,3}$/;
    if(newInputText.lenght!=2){
      setInputText(()=>(newInputText+"-"));
      console.log(newInputText);
    }

    if (regex.test(newInputText) || newInputText === "") {
      setInputText(newInputText);
    } else if (newInputText.length < inputText.length) {
      // Allow deletion of characters
      setInputText(newInputText);
    }
  }; */}
//<input type="text" value={inputText} onChange={handleChange} />