//https://replit.com/teams/join/apdkpdkcwdmvrdgfwnamwxivjrbcwpyl-e-polling
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
{/*         <img 
          src="../public/voting.jpg" className="Info__img">
        </img> */}
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
<a href="admin.html"><h3>Log in as Admin</h3></a>
    </div>
}

    // <Link to={`/signup`} className="home__link"><div className="home__signup">Signup</div></Link>
    // <br/>
