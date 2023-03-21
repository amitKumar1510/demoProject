
import Info from "../src/component/Info.jsx";
import Login from "../src/component/Login.jsx";
import Results from "./component/Results";
import Test from "./component/Test";

import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Dashboard from "../src/component/Dashboard.jsx";

export default function App() {

const [ralt,setRalt]=React.useState({
  "isLoggedin":false,
  "lgid":"",
  "name":"",
  "roll":"",
  "dept":""
})
  
  return (
    <main>
     <Router>
      <div>
        <Routes>
          <Route path="/login" element={ <Login mainprop={setRalt} />}/>
           <Route path="/dashboard" element={ <Dashboard mainprop={ralt}/>}/>
          <Route path="/results" element={ <Results />}/>
          <Route path="/test" element={ <Test />}/>
          <Route path="/" element={ <Info />}/>
          
        </Routes>
      </div>
    </Router>
    </main>
  )
}

