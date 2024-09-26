import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/Firebase'
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { useEffect } from 'react'
import { logo , avatar } from '../utils/constants';

const Header = () => {
    const navigate = useNavigate()
    const user = useSelector(store => store.user)
    const dispatch = useDispatch()

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const {uid , email , displayName} = user;
                dispatch(addUser({uid : uid , email : email, displayName: displayName}))
                navigate("/browse")
            } else {
                dispatch(removeUser())
                navigate("/")
            }
        });

        return () => unsubscribe()
    }, [])

    const handleSignOut = () => {

        signOut(auth).then(() => {
            // Sign-out successful.
            // navigate("/")
        }).catch((error) => {
            navigate("/error")
        });
    }

    return (
        <div className=" absolute w-full px-4 py-2 bg-gradient-to-b from-black z-30 flex justify-between">

            <img className='w-44'
                src={logo}
                alt='logo'
            ></img>

            {user && (<div className='flex p-2 gap-8 items-center'>
                <img
                    className='w-12 h-12'
                    src={avatar}
                    alt='logo2'
                ></img>

                <button onClick={handleSignOut} className='font-bold text-white'>Sign Out</button>
            </div>)}
        </div>
    )
}

export default Header