import React, {useState} from "react";
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../../firebase"

export const SignIn = ()=>{
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const signIn = (e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredetial)=>{
            console.log(userCredetial)
        }).catch((err)=>{
            console.log(err);
        })
    }

    return(
        <div className="sign-in-container">
            <form onSubmit={signIn}>
                <h1>log In</h1>
                <input type="email" placeholder="enter your email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>

                <input type="password" placeholder="enter your password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>

                <button type="submit">Log In</button>
            </form>
        </div>
    )
}