import React, {useEffect, useState} from 'react';
import {BiArrowBack} from 'react-icons/bi'
import {SlCalender} from 'react-icons/sl'
import {AiOutlineLink, AiOutlinePlus} from 'react-icons/ai'
import {useNavigate} from "react-router-dom";
import {useGlobalAuth, useGlobalUsers} from "../contexts";
import FollowModel from "./FollowModel";
import {EditProfileModel} from "./index";

const ProfileCard = ({username, myPosts}) => {
    const [isFollowerModel, setIsFollowerModel] = useState(false)
    const [isFollowingModel, setIsFollowingModel] = useState(false)
    const [isEditProfileModel, setIsEditProfileModel] = useState(false)
    const navigate = useNavigate()
    const {findUser, followUser, unfollowUser} = useGlobalUsers()
    const {userDetails} = useGlobalAuth()

    const userData = userDetails?.username === username ? JSON.parse(localStorage.getItem('foundUser')) : findUser(username);

    useEffect(()=>{
        document.title = `${userData?.firstName} ${userData?.lastName} (@${userData?.username})`
    },[userData])

    const isFollowing = () => {
        return userData?.followers?.find(user => user?._id === userDetails?._id)
    }

    return (
        <>
            <div className={'profile-card flex flex-col gap-2 bg-secondary text-sociogram sm:rounded pt-3 border-t sm:border-none'}>
                <div className="back-option flex items-center gap-6 px-3">
                    <div className="back-icon text-xl cursor-pointer hover:bg-black/20 hover:dark:bg-white/20 p-2 rounded-full transition" onClick={()=>navigate(-1)}>
                        <BiArrowBack/>
                    </div>
                    <div className="name text-xl">
                        {userData?.firstName} {userData?.lastName}
                    </div>
                </div>
                <div className="banner">
                    {
                        userData?.bannerUrl ?
                        <img src={userData?.bannerUrl} alt="banner" className={'w-full'}/> :
                        <img src='https://res.cloudinary.com/dyzu4lzqz/image/upload/v1688213123/user_banner_default_v1fq2b.png' alt="banner" className={'w-full'}/>
                    }
                </div>
                <div className="profile relative flex items-end justify-between px-2 sm:px-8 w-full">
                    <div className="avatar absolute">
                        {
                            userData?.avatarUrl ?
                            <img src={userData?.avatarUrl} alt="avatar"
                              className={'w-24 rounded-full aspect-square object-cover'}/> :
                                <img src='https://res.cloudinary.com/dyzu4lzqz/image/upload/v1688187993/sociogram/user-avatar_jm8mwb.png' alt="avatar"
                              className={'w-24 rounded-full aspect-square object-cover'}/>

                        }
                    </div>
                    <div className="w-full edit flex justify-end">
                        {
                            userDetails?.username === userData?.username ?
                                <button className={'bg-button py-1 px-5 rounded-[20px] text-white'} onClick={()=>setIsEditProfileModel(true)}>Edit Profile</button> :
                                isFollowing() ?
                                    <button className={'bg-button text-white py-1 px-5 rounded-[20px]'} onClick={()=>unfollowUser(userData?._id)}>
                                        Following
                                    </button> :
                                    <button className={'bg-button text-white py-1 px-5 rounded-[20px] flex gap-2 items-center'} onClick={()=>followUser(userData?._id)}>
                                        <AiOutlinePlus/> Follow
                                    </button>
                        }
                    </div>
                </div>
                <div className="profile-details px-5 py-1 flex flex-col items-start">
                    <p className="name text-xl font-bold">{userData?.firstName} {userData?.lastName}</p>
                    <p className="username text-black/40 dark:text-white/40">@{userData?.username}</p>
                    <p className="bio my-2 flex items-center gap-1 text-black/60 dark:text-white/60"><SlCalender/> Joined {new Date(userData?.createdAt).toDateString().split(" ").slice(1, 4).join(" ")}</p>
                    <p className="bio my-1">{userData?.bio}</p>
                    {
                        userData?.website &&
                        <a rel="noreferrer" href={userData?.website}
                           className={'website text-blue-400 hover:underline transition cursor-pointer flex items-center gap-2'}
                           target={'_blank'}>
                            <AiOutlineLink/> {userData?.website}
                        </a>
                    }
                    <div className="followers-details flex gap-6 my-2">
                        <p className={'cursor-pointer hover:underline transition'}>{userData?.followers?.length} <span className={'text-black/60 dark:text-white/60'} onClick={()=>setIsFollowerModel(true)}>Followers</span></p>
                        <p className={'cursor-pointer hover:underline transition'}>{userData?.following?.length} <span className={'text-black/60 dark:text-white/60'} onClick={()=>setIsFollowingModel(true)}>Followings</span></p>
                    </div>
                    {isFollowerModel && <FollowModel content={'Followers'} setIsFollowModel={setIsFollowerModel} followers={userData?.followers}/>}
                    {isFollowingModel && <FollowModel content={'Followings'} setIsFollowModel={setIsFollowingModel} followers={userData?.following}/>}
                </div>
                <div className="nav rounded-b-lg pt-2 px-3 flex border-b border-white/10 cursor-pointer select-none">
                    <p className={'text-xl border-[0.5px] text-button border-button rounded-lg px-8 py-1'}>{myPosts?.length} Posts</p>
                </div>
            </div>
            {isEditProfileModel && <EditProfileModel setIsEditProfileModel={setIsEditProfileModel} userData={userData}/>}
        </>
    );
};

export default ProfileCard;