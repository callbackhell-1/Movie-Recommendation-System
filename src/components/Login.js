import React, { useState, useRef } from 'react'
import Header from './Header'
import { checkValidData } from "../utils/Validate"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/Firebase"
// import { useNavigate } from 'react-router-dom';
import { updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BackgroundImg } from '../utils/constants';

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true)
    const email = useRef(null);
    const password = useRef(null);
    const [errorMessage, setErrorMessage] = useState(null);
    // const navigate = useNavigate()
    const name = useRef(null);
    const dispatch = useDispatch()

    const toggle = () => {
        setIsSignInForm(!isSignInForm)
    }

    const handleButtonClick = () => {
        console.log(email.current.value);
        console.log(password.current.value);

        const message = checkValidData(email.current.value, password.current.value)
        setErrorMessage(message)
        console.log(message);
        if (message) return

        if (!isSignInForm) {
            //SignUp form
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;

                    updateProfile(user, {
                        displayName: name.current.value, //photoURL: "https://example.com/jane-q-user/profile.jpg"
                    }).then(() => {
                        const { uid, email, displayName } = auth.currentUser;
                        dispatch(addUser({ uid: uid, email: email, displayName: displayName }))
                    }).catch((error) => {
                        setErrorMessage(error.message)
                    });

                    console.log(user);
                    // navigate("/browse")
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorMessage)
                });
        }
        else {
            //Signin form
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user);
                    // navigate("/browse")
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorMessage)
                });
        }
    }

    return (
        <div>
            <Header></Header>

            <div className='absolute'>
                <img className='w-full h-auto' src= {BackgroundImg} alt='logo'></img>
                <div class="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>

            <form className=' w-3/12 p-12 bg-black absolute my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'
                onSubmit={(e) => e.preventDefault()}>

                <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>

                {!isSignInForm && (<input type='text'
                    placeholder='Enter your Full Name'
                    className='p-4 my-4 w-full bg-gray-700'
                    ref={name}
                ></input>)}
                <input
                    type='e-mail'
                    placeholder='Enter email' className='p-4 my-4 w-full bg-gray-700'
                    ref={email}
                ></input>
                <input
                    type='password'
                    ref={password}
                    placeholder='Enter password' className='p-4 my-4 w-full bg-gray-700'>

                </input>

                <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>

                <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>

                <p className='py-4 cursor-pointer' onClick={toggle}>{isSignInForm ? "New to Netflix? Sign up now." : "Already registered? Sign in now."}</p>
            </form>
        </div>
    )
}

export default Login