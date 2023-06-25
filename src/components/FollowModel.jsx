import React, {useEffect, useRef, useState} from 'react';
import {useNavigate} from "react-router-dom";

const FollowModel = ({setIsFollowModel, followers}) => {
    const navigate = useNavigate()
    const followRef = useRef()


    useEffect(() => {
        const handleModel = (e) => {
            if (followRef.current) {
                if (!followRef.current.contains(e.target)) {
                    setIsFollowModel(false)
                }
            }
        }
        document.addEventListener('mousedown', handleModel)
    }, [])

    return (
        <div className={'follow-model-main flex items-center justify-center bg-black/70 fixed inset-0 z-10 text-lg'}>
            <div ref={followRef}
                 className="follow-model-card w-[90%] sm:w-[500px] flex flex-col items-start justify-start gap-6 bg-secondary rounded-lg p-10 pb-14 relative max-h-[80vh] overflow-auto">
                <h2 className={'text-xl'}>Followers</h2>
                <div className="all-suggestions flex flex-col gap-4">
                    {
                        followers?.map(user => (
                            <div key={user._id} className="ind-suggestion flex items-center justify-between gap-5">
                                <div className="profile cursor-pointer" onClick={()=> {
                                    navigate(`/user/${user.username}`)
                                    setIsFollowModel(false)
                                }}>
                                    <img src={user.avatarUrl} alt="profile" className={'w-8 rounded-full aspect-square object-cover'}/>
                                </div>
                                <div className="details flex-1 text-sm cursor-pointer" onClick={()=> {
                                    navigate(`/user/${user.username}`)
                                    setIsFollowModel(false)
                                }}>
                                    <p>{user.firstName} {user.lastName}</p>
                                    <p className={'text-[12px] text-white/40'}>@{user.username}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default FollowModel;