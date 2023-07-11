import React, {useEffect, useRef, useState} from 'react';
import {AiOutlineClose} from "react-icons/ai";
import profile from "../images/niket_img.png";
import {useGlobalUsers} from "../contexts";
import {RiImageAddFill} from "react-icons/ri";

const EditProfileModel = ({setIsEditProfileModel, userData }) => {
    const [user, setUser] = useState({
        avatarUrl: '',
        bio: '',
        website: ''
    })
    const editProfileModelRef = useRef()
    const {editUserDetails} = useGlobalUsers()

    useEffect(() => {
        setUser({
            avatarUrl: userData.avatarUrl,
            bio: userData.bio,
            website: userData.website
        })
        const handleModel = (e) => {
            if (editProfileModelRef.current) {
                if (!editProfileModelRef.current.contains(e.target)) {
                    setIsEditProfileModel(false)
                }
            }
        }
        document.addEventListener('mousedown', handleModel)
    }, [])

    const inputChangeHandler = (e) => {
        const {name, value} = e.target
        setUser(prevState => ({...prevState, [name]: value}))
    }

    const submitHandler = () => {
        editUserDetails({
            ...userData, avatarUrl: user.avatarUrl, bio: user.bio, website: user.website
        })
        setIsEditProfileModel(false)
    }

    return (
        <div className={'edit-profile-main flex items-center justify-center bg-black/70 fixed inset-0 z-10'}>
            <div ref={editProfileModelRef}
                 className="edit-profile-card w-[90%] sm:w-[500px] flex flex-col items-start justify-center gap-2 bg-secondary rounded-lg p-3 pt-5 relative">
                <div className="close-icon text-xl p-2 bg-black/20 dark:bg-white/20 hover:bg-black/40 dark:hover:bg-white/40 transition rounded-full aspect-square cursor-pointer absolute top-2 right-2" onClick={()=>setIsEditProfileModel(false)}>
                    <AiOutlineClose/>
                </div>
                <div className="top w-full flex flex-col gap-2 border-b-[0.5px] border-white/20 text-sociogram">
                    <h1 className={'text-sociogram text-xl font-bold'}>Edit Profile</h1>
                    <div className="profile flex flex-col items-start gap-1">
                        <div className={'relative'}>
                            <img src={user?.avatarUrl} alt="profile" className={'w-20 bg-black/10 rounded-full aspect-square border-2 border-black'}/>
                            <label htmlFor="profile">
                                <RiImageAddFill className={'absolute bottom-1 right-2 text-2xl cursor-pointer text-white'}/>
                                <input type="file" accept={'image/*'} name="profile" id="profile" className={'hidden'} onChange={(e)=>setUser(prevState => ({...prevState, avatarUrl: URL.createObjectURL(e.target.files[0])}))}/>
                            </label>
                        </div>
                        <p className={'text-black/40 dark:text-white/40'}>Choose a picture from your gallary</p>
                    </div>
                    <div className="name-username">
                        <p className={'text-lg font-bold'}>{userData?.firstName} {userData?.lastName}</p>
                        <p className={'text-sm text-black/40'}>@{userData?.username}</p>
                    </div>
                    <div className="bio flex flex-col gap-2">
                        <b className={'w-24'}>Bio:</b>
                        <input type="text" name={'bio'} value={user?.bio} placeholder={'Add a bio..'} className={'text-sociogram bg-sociogram w-full border border-black/60 dark:border-white/60 rounded p-2'} onChange={inputChangeHandler}/>
                    </div>
                    <div className="website flex flex-col gap-2">
                        <b className={'w-24'}>Website:</b>
                        <input type="text" name={'website'} value={user?.website} placeholder={'Add a Website..'} className={'text-sociogram bg-sociogram border border-black/60 dark:border-white/60 rounded p-2'} onChange={inputChangeHandler}/>
                    </div>
                </div>
                <div className="bottom w-full flex justify-end items-center">
                    <button className={'bg-button text-white px-6 py-1 rounded-2xl text-lg'} onClick={submitHandler}>Update</button>
                </div>
            </div>
        </div>
    );
};

export default EditProfileModel;