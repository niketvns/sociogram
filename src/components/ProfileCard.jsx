import React, {useEffect, useState} from 'react';
import {BiArrowBack} from 'react-icons/bi'
import {RiImageAddFill} from 'react-icons/ri'
import {AiOutlineLink} from 'react-icons/ai'
import {useNavigate} from "react-router-dom";
import {useGlobalAuth, useGlobalUsers} from "../contexts";
import FollowModel from "./FollowModel";

const ProfileCard = ({username, myPosts}) => {
    const [isFollowerModel, setIsFollowerModel] = useState(false)
    const [isFollowingModel, setIsFollowingModel] = useState(false)
    const navigate = useNavigate()
    const {findUser, followUser, unfollowUser} = useGlobalUsers()
    const {userDetails} = useGlobalAuth()
    const userData = findUser(username);

    useEffect(()=>{
        document.title = `${userData?.firstName} ${userData?.lastName} (@${userData?.username})`
    },[userData])

    const isFollowing = () => {
        return userData?.followers.find(user => user._id === userDetails._id)
    }

    return (
        <div className={'profile-card flex flex-col gap-2 bg-secondary sm:rounded-lg pt-3'}>
            <div className="back-option flex items-center gap-6 px-3">
                <div className="back-icon text-xl cursor-pointer hover:bg-white/20 p-2 rounded-full transition" onClick={()=>navigate(-1)}>
                    <BiArrowBack/>
                </div>
                <div className="name text-xl">
                    {userData?.firstName} {userData?.lastName}
                </div>
            </div>
            <div className="banner">
                <img src={userData?.bannerUrl} alt="banner" className={'w-full'}/>
            </div>
            <div className="profile relative flex items-end justify-between px-2 sm:px-8 w-full">
                <div className="avatar absolute">
                    <img src={userData?.avatarUrl} alt="avatar" className={'w-24 rounded-full aspect-square object-cover'}/>
                    <label htmlFor="profile">
                        <RiImageAddFill className={'absolute bottom-2 right-4 text-xl cursor-pointer'}/>
                    </label>
                    <input type="file" accept={'image/*'} name="profile" id="profile" className={'hidden'}/>
                </div>
                <div className="w-full edit flex justify-end">
                    {
                        userDetails?.username === userData?.username ?
                            <button className={'bg-button py-1 px-5 rounded-[20px]'}>Edit Profile</button> :
                            isFollowing() ?
                            <button className={'bg-button py-1 px-5 rounded-[20px]'} onClick={()=>unfollowUser(userData?._id)}>Unfollow</button> :
                            <button className={'bg-button py-1 px-5 rounded-[20px]'} onClick={()=>followUser(userData?._id)}>Follow</button>
                    }
                </div>
            </div>
            <div className="profile-details px-5 py-1">
                <p className="name text-xl font-bold">{userData?.firstName} {userData?.lastName}</p>
                <p className="username text-white/40">@{userData?.username}</p>
                <p className="bio my-2">{userData?.bio}</p>
                {
                    userData?.website &&
                    <a rel="noreferrer" href={userData?.website}
                    className={'website text-blue-400 hover:underline transition cursor-pointer flex items-center gap-2'}
                    target={'_blank'}>
                    <AiOutlineLink/> {userData?.website}
                </a>
                }
                <div className="followers-details flex gap-6 my-2">
                    <p className={'cursor-pointer hover:underline transition'}>{userData?.followers.length} <span className={'text-white/60'} onClick={()=>setIsFollowerModel(true)}>Followers</span></p>
                    <p className={'cursor-pointer hover:underline transition'}>{userData?.following.length} <span className={'text-white/60'} onClick={()=>setIsFollowingModel(true)}>Followings</span></p>
                </div>
                {isFollowerModel && <FollowModel setIsFollowModel={setIsFollowerModel} followers={userData?.followers}/>}
                {isFollowingModel && <FollowModel setIsFollowModel={setIsFollowingModel} followers={userData?.following}/>}
            </div>
            <div className="nav rounded-b-lg pt-2 px-3 flex border-b border-white/10 cursor-pointer select-none">
                <p className={'text-xl border-[0.5px] border-[#fb5151] rounded-lg px-8 py-1 text-[#fb5151]'}>{myPosts.length} Posts</p>
            </div>
        </div>
    );
};

export default ProfileCard;