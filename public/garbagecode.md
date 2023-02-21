
 // hardcoded polls 
// wont work when no of polls are unknown by Adarsh
 // const fetchPolls =async ()=>{
   
 //   await getDoc(doc(db, "polls", "5CWMoP6aBilRJzTVF8dY")).then(docSnap => {
 //      if (docSnap.exists()) {
 //        //setVerify(true);
        
 //        setPoll( ()=>({pname:docSnap.data().pollname,pinfo:docSnap.data().info
 //          }));
 //        console.log(poll);
 //      } else {
 //        console.log("Your data is not available please contact to admin");
 //      }
 //    })
 // } 
    // do not del above code...


    
//const collectionName = 'myCollection';

// const collectionRef = collection(db,"/polls");

// collectionRef.listDocuments()
//   .then((documents) => {
//     documents.forEach((doc) => {
//       console.log(doc.id);
//     });
//   })
//   .catch((error) => {
//     console.log('Error getting documents: ', error);
//   });

// const q = query(collection(db, "/polls"), where("pollid", "==", "1919"));
// const unsubscribe = onSnapshot(q, (querySnapshot) => {
//   const polls = [];
//   querySnapshot.forEach((doc) => {
//       polls.push(doc.data().name);
//   });
//   console.log("Current data in polls: ", polls.join(", "));
// });
  
// const q = query(collection(db, "polls"), where("pollid", "==",true));

// const querySnapshot = await getDocs(q);
// querySnapshot.forEach((doc) => {
//   // doc.data() is never undefined for query doc snapshots
//   console.log(doc.id, " => ", doc.data());
// });