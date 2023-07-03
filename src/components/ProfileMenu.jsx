import React, {useEffect, useRef, useState} from 'react';
import {useGlobalAuth, useGlobalUsers} from "../contexts";
import {useNavigate} from "react-router-dom";

const ProfileMenu = () => {
    const [isProfileModel, setIsProfileModel] = useState(false)
    const profileRef = useRef()
    const {logoutHandler, userDetails} = useGlobalAuth()
    const navigate = useNavigate()
    const {findUser} = useGlobalUsers()

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

    const userData = findUser(userDetails?.username)

    return (
        <div ref={profileRef} className={'profile-menu relative'}>
            <div className={'profile-icon select-none hover:scale-105 transition'} onClick={() => setIsProfileModel(prev => !prev)}>
                {
                    userData?.avatarUrl ?
                        <img src={userData?.avatarUrl} alt="profile"
                             className={'w-8 aspect-square sm:w-10 object-cover rounded-full cursor-pointer'}/> :
                        <div className={'w-8 aspect-square sm:w-10 object-cover rounded-full cursor-pointer bg-black/40 dark:bg-white/40 flex items-center justify-center text-lg font-bold'}>
                            {userDetails?.firstName.slice(0,1).toUpperCase()}
                        </div>
                }
            </div>
            <div
                className={`profile-model w-[200px] p-4 bg-secondary border-2 border-black/20 dark:border-white/20 text-sociogram absolute top-12 right-0 rounded ${isProfileModel ? 'block' : 'hidden'} transition flex flex-col items-center justify-center gap-4 select-none`}>
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