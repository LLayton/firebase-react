import { addDoc, collection, doc, getDocs } from "firebase/firestore";
import React, { useState,useEffect } from "react";
import { logout } from "../firebase";
//import { useNavigate } from "react-router-dom";
import {db} from'../firebase'
function Student() {
  const [users,SetUser] =useState([]);
  const [age,SetAge]=useState(0);
  const [name,SetName]=useState("");

  const usersCollectionRef=collection(db,"student")
  const createUser=async ()=>{
    await addDoc(usersCollectionRef,{name:name,age:age})
    
  }
  useEffect(()=>{
    const getUser= async()=>{
        const data=await getDocs(usersCollectionRef);
        SetUser(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
    }
    getUser();
  },[])
  return (
    <div>
        <input type="text" placeholder="name" onChange={(event)=>{
            SetName(event.target.value)
        }}/>
        <input type="number" placeholder="Age" onChange={(event)=>{
            SetAge(event.target.value)}} />

        <button onClick={()=>{createUser()}}>Create user</button>
        {users.map((user)=>{
            return(
                <div>
                    <div>{user.name}</div>
                    <div>{user.age}</div>
                </div>

            )
        })}
    </div>
  )
}

export default Student
