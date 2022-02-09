import React, { useState } from 'react';
import "./Join.css";
import logo from "../../images/logo.png";
import {Link} from "react-router-dom"

let user;
const Join = () => {
    
    const [name, setname] = useState("");

    const sendUser = () =>{
        user = document.getElementById('joinInput').value;
        document.getElementById('joinInput').value="";
    }
  return (
  <div className="JoinPage">
      <div className="JoinContainer">
      <img src={logo} alt='logo'/> 
      <h1>ZCHAT</h1>
      <input onChange={(event)=>setname(event.target.value) } placeholder='Enter your name' type="text" id="joinInput"/>
      <Link onClick={(e)=>!name?e.preventDefault():null} to="/Chat"><button onClick={sendUser} className='joinbtn'>Join</button></Link>
      </div>
  </div>
  )};

export default Join;
export {user};