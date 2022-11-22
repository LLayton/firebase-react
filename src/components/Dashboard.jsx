import React from "react";
import { logout } from "../firebase";
import { useNavigate } from "react-router-dom";


function Dashboard() {
  const navigate = useNavigate();
  const deco=()=>{
    logout().finally(()=>{navigate('/')}).catch((err)=>{
      console.log("toto")
    })
  }
  return (
    <div>
        <button onClick={()=>{deco()}}>Déconnexion</button>
    </div>
  )
}

export default Dashboard
