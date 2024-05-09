import React,{useEffect, useState} from 'react';
import {auth} from "../../firebase";
import { onAuthStateChanged, signOut } from 'firebase/auth';

const AuthDetails = () => {
    const [authUser,setAuthUser] = useState(null);

    useEffect(()=>{
        const listen = onAuthStateChanged(auth,(user)=>{
            if(user){
                setAuthUser(user);
            }else{
                setAuthUser(null);
            }
        });

        return ()=>{
            listen();
        }
    })

    const userSignOut = ()=>{
        signOut(auth).then(()=>{
            console.log(`signed out successfully`);
        }).catch((err)=>{
            console.log(err);
        })
    }
  return (
    <div>
        {authUser?<><p>{`Signed In as ${authUser.email}`}</p><button onClick={userSignOut}>SignOut</button></> : <p>Signed Out</p>}
    </div>
  )
}


export default AuthDetails;