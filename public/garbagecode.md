
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














info chatgpt
Header

Site logo
Navigation menu (Home, Candidates, Voting Instructions, FAQ, Contact)
Banner

Welcome message
Call to action (e.g., "Register Now", "Cast Your Vote", etc.)
About Us Section

Description of the site's purpose and goals
Explanation of how the site works
Information on why student participation in elections is important
Candidates Section

List of candidates running for various positions
Candidate names, pictures, and bios
Platform summaries
Voting Instructions Section

Step-by-step instructions on how to register and vote
Tutorial video demonstrating the voting process
Information on how votes are counted and results are determined
FAQ Section

Frequently asked questions with answers
Contact information for site administrators
Social Media Section

Links to the site's social media pages

css from chat gpt
/* Fonts */
@import url('https://fonts.googleapis.com/css?family=Roboto+Mono:400,500&display=swap');
@import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap');

/* Colors */
:root {
  --primary-color: #1C2530;
  --secondary-color: #293846;
  --accent-color: #7EB8FF;
}

/* Global Styles */
body {
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  margin: 0;
  padding: 0;
  background-color: var(--primary-color);
  color: #fff;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Roboto Mono', monospace;
  font-weight: 500;
  margin: 0;
  padding: 0;
}

a {
  color: #fff;
  text-decoration: none;
}

ul, ol {
  margin: 0;
  padding: 0;
}

/* Header Styles */
header {
  background-color: var(--secondary-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}

.logo img {
  max-width: 100%;
  height: auto;
}

nav ul {
  display: flex;
  list-style: none;
}

nav li {
  margin: 0 10px;
}

nav li:first-child {
  margin-left: 0;
}

nav li:last-child {
  margin-right: 0;
}

nav a {
  display: block;
  padding: 10px;
}

/* Banner Styles */
.banner {
  background-color: var(--accent-color);
  color: #fff;
  padding: 100px 20px;
  text-align: center;
}

.banner h1 {
  font-size: 3rem;
  margin-bottom: 20px;
}

.cta-button {
  background-color: #fff;
  border: none;
  border-radius: 5px;
  color: var(--accent-color);
  cursor: pointer;
  display: inline-block;
  font-size: 1.2rem;
  font-weight: 500;
  padding: 15px 30px;
  text-transform: uppercase;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: var(--secondary-color);
  color: var(--accent-color);
}

/* Section Styles */
section {
  padding: 50px 20px;
}

section h2 {
  font-size: 2rem;
  margin-bottom: 20px;
}

section p {
  margin-bottom: 20px;
}

/* Candidates Section Styles */
ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  background-color: var(--secondary-color);
  border-radius: 5px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  overflow: hidden;
  width: 100%;
}

li img {
  max-width: 100%;
  height: auto;
}

li h3 {
  background-color: var(--accent-color);
  color: #fff;
  font-size: 1.5rem;
 
html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>University Student Voting Site</title>
    <link rel="stylesheet" type="text/css" href="style.css">
  </head>
  <body>
    <header>
      <div class="logo">
        <img src="logo.png" alt="University Student Voting Site">
      </div>
      <nav>
        <ul>
          <li><a href="#about">About Us</a></li>
          <li><a href="#candidates">Candidates</a></li>
          <li><a href="#instructions">Voting Instructions</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
    
    <section class="banner">
      <h1>Welcome to University Student Voting Site</h1>
      <a href="#register" class="cta-button">Register Now</a>
    </section>
    
    <section id="about">
      <h2>About Us</h2>
      <p>Description of the site's purpose and goals.</p>
      <p>Explanation of how the site works.</p>
      <p>Information on why student participation in elections is important.</p>
    </section>
    
    <section id="candidates">
      <h2>Candidates</h2>
      <ul>
        <li>
          <img src="candidate1.png" alt="Candidate 1">
          <h3>Candidate 1</h3>
          <p>Bio of Candidate 1.</p>
          <p>Platform summary of Candidate 1.</p>
        </li>
        <li>
          <img src="candidate2.png" alt="Candidate 2">
          <h3>Candidate 2</h3>
          <p>Bio of Candidate 2.</p>
          <p>Platform summary of Candidate 2.</p>
        </li>
        <!-- Add more candidate list items as needed -->
      </ul>
    </section>
    
    <section id="instructions">
      <h2>Voting Instructions</h2>
      <ol>
        <li>Step-by-step instructions on how to register and vote.</li>
        <li>Tutorial video demonstrating the voting process.</li>
        <li>Information on how votes are counted and results are determined.</li>
      </ol>
    </section>
    
    <section id="faq">
      <h2>FAQ</h2>
      <ul>
        <li>
          <h3>Question 1</h3>
          <p>Answer to Question 1.</p>
        </li>
        <li>
          <h3>Question 2</h3>
          <p>Answer to Question 2.</p>
        </li>
        <!-- Add more FAQ list items as needed -->
      </ul>
    </section>
    
    <section id="contact">
      <h2>Contact</h2>
      <p>Contact information for site administrators.</p>
    </section>
    
    <footer>
      <p>&copy; 2023 University Student Voting Site</p>
      <nav>
        <ul>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Use</a></li>
        </ul>
      </nav>
    </footer>





    converted

    import React from 'react';
import './style.css';

function UniversityVotingSite() {
  return (
    <div>
      <header>
        <div className="logo">
          <img src="logo.png" alt="University Student Voting Site" />
        </div>
        <nav>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#candidates">Candidates</a></li>
            <li><a href="#instructions">Voting Instructions</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section className="banner">
        <h1>Welcome to University Student Voting Site</h1>
        <a href="#register" className="cta-button">Register Now</a>
      </section>

      <section id="about">
        <h2>About Us</h2>
        <p>Description of the site's purpose and goals.</p>
        <p>Explanation of how the site works.</p>
        <p>Information on why student participation in elections is important.</p>
      </section>

      <section id="candidates">
        <h2>Candidates</h2>
        <ul>
          <li>
            <img src="candidate1.png" alt="Candidate 1" />
            <h3>Candidate 1</h3>
            <p>Bio of Candidate 1.</p>
            <p>Platform summary of Candidate 1.</p>
          </li>
          <li>
            <img src="candidate2.png" alt="Candidate 2" />
            <h3>Candidate 2</h3>
            <p>Bio of Candidate 2.</p>
            <p>Platform summary of Candidate 2.</p>
          </li>
          {/* Add more candidate list items as needed */}
        </ul>
      </section>

      <section id="instructions">
        <h2>Voting Instructions</h2>
        <ol>
          <li>Step-by-step instructions on how to register and vote.</li>
          <li>Tutorial video demonstrating the voting process.</li>
          <li>Information on how votes are counted and results are determined.</li>
        </ol>
      </section>

      <section id="faq">
        <h2>FAQ</h2>
        <ul>
          <li>
            <h3>Question 1</h3>
            <p>Answer to Question 1.</p>
          </li>
          <li>
            <h3>Question 2</h3>
            <p>Answer to Question 2.</p>
          </li>
          {/* Add more FAQ list items as needed */}
        </ul>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>Contact information for site administrators.</p>
      </section>

      <footer>
        <p>&copy; 2023 University Student Voting Site</p>
        <nav>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Use</a></li>
          </ul>
        </nav>
      </footer>
    </div>
  );
}

export default UniversityVotingSite;
