import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/Validate'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
    const navigate = useNavigate()
    const dispatch=useDispatch()
    const[isSignInForm, setIsSignInForm]=useState(true);
    const[errorMessage,setErrorMessage]=useState(null);
    const email = useRef(null);
    const password = useRef(null);
    const name=useRef(null);
   

    const handleToggleForm=()=>{
        setIsSignInForm(!isSignInForm)
    }
    const handleClick=()=>{
        
        //validate the form data
        const message =checkValidData(email.current.value,password.current.value)
        // console.log(email.current.value)
        // console.log(message)
        //set the error message!
        setErrorMessage(message)

        if(message){
          return;
        }
        //signIN / SignUP logic
        if(!isSignInForm){
          //signUP logic-create user
          createUserWithEmailAndPassword(
            auth,
            email.current.value,
            password.current.value
          )
            .then((userCredential) => {
              // Signed up
              const user = userCredential.user;
              // console.log(user)
              updateProfile(user, {
                displayName: name.current.value,
                photoURL:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPfO37MK81JIyR1ptwqr_vYO3w4VR-iC2wqQ&usqp=CAU",
              })
                .then(() => {
                  // Profile updated!
                  // ...
                  const { uid, email, displayName, photoURL } = auth.currentUser;
                  dispatch(
                    addUser({
                      uid: uid,
                      email: email,
                      displayName: displayName,
                      photoURL: photoURL,
                    })
                  );
                  navigate("/browse");
                })
                .catch((error) => {
                  // An error occurred
                  // ...
                  setErrorMessage(error.message);
                });
              // console.log(user)
              
  
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorCode+ "-"+errorMessage);
             
            });
        }
        else{
          //sign
          signInWithEmailAndPassword(
            auth,
            email.current.value,
            password.current.value
          )
            .then((userCredential) => {
              // Signed in
              const user = userCredential.user;
              navigate("/browse");
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorCode + "-" + errorMessage);
            });
        }
    }
  return (
    <div>
      <Header />
      <div className="absolute">
      <img src='https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg'
      alt='background'
      />
      </div>
      <form className="bg-black absolute p-12 w-4/12 my-36 mx-auto right-0 left-0
       text-white bg-opacity-80" onSubmit={(e)=>e.preventDefault()}>
      <h1 className="font-bold text-3xl py-4">
      { isSignInForm?"Sign In":"Sign Up"}
      </h1>
      {!isSignInForm && 
      <input 
        type="text" 
        ref={name}
         placeholder='Full Name'
         className='p-4 my-4 w-full bg-gray-700'
         />}
      <input
        type="text" 
        ref={email}
        placeholder='Email Address' 
        className='p-4 my-4 w-full bg-gray-700'
      />
      <input 
        type="password" 
        ref={password}
        placeholder='Password'
        className='p-4 my-4 w-full bg-gray-700'
        />
        <p className="text-red-500 font-bold">{errorMessage}</p>
      <button 
        className='p-4 my-6 bg-red-700 w-full rounded-lg'
        onClick={handleClick}
        >
            { isSignInForm?"Sign In":"Sign Up"}
      </button>
      <p 
         className='p-4 cursor-pointer' 
              onClick={handleToggleForm}
    >
      { isSignInForm?" New to Netflix? Sign Up Now.":"Already registered? Sign In Now."}
     
      </p>
      </form>
    </div>
  )
}

export default Login
