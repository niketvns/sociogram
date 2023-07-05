import React, {useEffect, useRef, useState} from 'react';
import {useGlobalAuth, useGlobalUsers, useGlobleVideos} from "../contexts";
import {useNavigate} from "react-router-dom";
import {AiFillStar} from 'react-icons/ai'

const SearchModel = ({setIsSearchModel}) => {
    const [searchInput, setSearchInput] = useState('')
    const {users} = useGlobalUsers()
    const {userDetails} = useGlobalAuth()
    const navigate = useNavigate()
    const searchRef = useRef()
    const searchInputRef = useRef()

    const searchResult = users.filter(user => user?.firstName.toUpperCase().includes(searchInput.toUpperCase()) || user?.lastName.toUpperCase().includes(searchInput.toUpperCase()) || user?.username.toUpperCase().includes(searchInput.toUpperCase()))

    const searchInputHandler = (e) => {
        setSearchInput(e.target.value)
    }

    useEffect(() => {
        searchInputRef.current.focus()
        const handleModel = (e) => {
            if (searchRef.current) {
                if (!searchRef.current.contains(e.target)) {
                    setIsSearchModel(false)
                }
            }
        }
        document.addEventListener('mousedown', handleModel)
    }, [])

    const isFollowing = (userData) => {
        return userData?.followers.find(user => user._id === userDetails._id)
    }

    return (
        <div
            className={'search-model-main fixed inset-0 z-20 w-full h-full bg-black/60 p-8 text-black flex justify-center items-start'}>
            <div ref={searchRef} className={'flex flex-col gap-4 items-center'}>
                <div className="search-input w-[90vw] xs:w-auto">
                    <input ref={searchInputRef} type="search" name="search" id="search" placeholder={'Search Sociogram...'}
                           className={'w-full xs:w-[70vw] p-3 px-6 outline-0 rounded-[20px]'} onChange={searchInputHandler}
                           value={searchInput} autoComplete={'off'}/>
                </div>
                {
                    searchInput.length ?
                    <div
                        className="search-result bg-white/80 w-full xs:w-[70vw] rounded-lg p-4 overflow-auto max-h-[70vh]">
                        {
                            searchResult.length ?
                                searchResult.map(user => (
                                    <div key={user?._id} className="search-data flex gap-6 pt-2 hover:bg-black/10 cursor-pointer"
                                         onClick={() => {
                                             navigate(`/user/${user?.username}`)
                                             setIsSearchModel(false)
                                         }}>
                                        <div className="thumbnail">
                                            <img src={user?.avatarUrl} alt="avatar" className={'w-16 aspect-square object-cover'}/>
                                        </div>
                                        <div className="flex-1 details flex justify-between items-center">
                                            <div className="name">
                                                <h2 className={'line-clamp-2'}>{user?.firstName} {user?.lastName}</h2>
                                                <p className={'flex items-center text-black/60'}> @{user?.username}</p>
                                            </div>
                                            <div className="status text-black/80">
                                                <p>{isFollowing(user) ? 'Following' : 'Not Following'}</p>
                                            </div>
                                        </div>
                                    </div>
                                )) :
                                <p>No User Found for <b>"{searchInput}"</b></p>
                        }
                    </div> : null
                }
            </div>
        </div>
    );
};

export default SearchModel;