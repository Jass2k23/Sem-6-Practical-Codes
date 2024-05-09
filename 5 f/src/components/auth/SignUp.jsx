import React, {useState} from "react";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from "../../firebase"

export const SignUp = ()=>{
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const signUp = (e)=>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredetial)=>{
            console.log(userCredetial)
        }).catch((err)=>{
            console.log(err);
        })
    }

    return(
        <div className="sign-in-container">
            <form onSubmit={signUp}>
                <h1>create an account</h1>
                <input type="email" placeholder="enter your email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>

                <input type="password" placeholder="enter your password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>

                <button type="submit">Sign up</button>
            </form>
        </div>
    )
}