import React, {useEffect, useRef, useState} from 'react';
import profilePic from '../images/niket_img.png'
import {useGlobalAuth} from "../contexts";
import {useNavigate} from "react-router-dom";

const ProfileMenu = () => {
    const [isProfileModel, setIsProfileModel] = useState(false)
    const profileRef = useRef()
    const {logoutHandler, userDetails} = useGlobalAuth()
    const navigate = useNavigate()

    useEffect(() => {
        const handleModel = (e) => {
            if (profileRef.current) {
                if (!profileRef.current.contains(e.target)) {
                    setIsProfileModel(false)
                }
            }
        }
        document.addEventListener('mousedown', handleModel)
    }, [])

    return (
        <div ref={profileRef} className={'profile-menu relative'}>
            <div className={'profile-icon hover:scale-105 transition'} onClick={() => setIsProfileModel(prev => !prev)}>
                <img src={userDetails.avatarUrl} alt=""
                     className={'w-8 aspect-square sm:w-10 object-cover rounded-full cursor-pointer'}/>
            </div>
            <div
                className={`profile-model w-[200px] p-4 bg-secondary border-2 border-black/20 dark:border-white/20 text-sociogram absolute top-12 right-0 rounded-lg ${isProfileModel ? 'block' : 'hidden'} transition flex flex-col items-center justify-center gap-4 select-none`}>
                <div className="bg-transparent border-2 border-black/60 dark:border-white/60 w-full py-2 px-3 text-center text-sociogram rounded-3xl cursor-pointer"
                     onClick={() => {
                         setIsProfileModel(false)
                         navigate(`/user/${userDetails.username}`)
                     }}>
                    Profile
                </div>
                <div className={'bg-button w-full py-2 px-3 text-center text-white rounded-3xl cursor-pointer'}
                     onClick={logoutHandler}>Logout
                </div>
            </div>
        </div>
    );
};

export default ProfileMenu;