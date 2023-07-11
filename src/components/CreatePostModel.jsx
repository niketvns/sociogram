import React, {useEffect, useRef, useState} from 'react';
import profile from "../images/niket_img.png";
import {MdAddPhotoAlternate, MdOutlineAddReaction, MdPermMedia} from "react-icons/md";
import {AiOutlineClose} from "react-icons/ai";
import {useGlobalAuth, useGlobalPosts, useGlobalUsers} from "../contexts";
import {EmojiBox} from "./index";

const CreatePostModel = ({isEdit, editPostData, setIsCreatePostModel}) => {
    const [post, setPost] = useState({
        content: "",
        mediaURL: "",
        hashTags: []
    })
    const [isEmojiModel, setIsEmojiModel] = useState(false)
    const createPostModelRef = useRef()
    const inputRef = useRef()
    const {addPost, editPost, handleMediaUpload, isMediaUploading} = useGlobalPosts();
    const {findUser} = useGlobalUsers()
    const {userDetails} = useGlobalAuth()

    const changeHandler = (e) => {
        const {name, value} = e.target;
        setPost(prevState => ({...prevState, [name]: value}))
    }

    const convertHashTags = (hashTagStr) => {
        setPost(prevState => ({
            ...prevState,
            hashTags: hashTagStr.split(", ").join(" ").split(",").join(" ").split(" ")
        }))
    }

    const submitHandler = () => {
        if (!post.content && !post.mediaURL)
            return;
        // function call
        if (isEdit) {
            editPost(post, editPostData._id);
        } else {
            addPost(post);
        }
        // reset
        setPost({
            content: "",
            mediaURL: "",
        })
        setIsCreatePostModel(false)
    }

    useEffect(() => {
        if (isEdit) {
            setPost({
                content: editPostData?.content,
                mediaURL: editPostData?.mediaURL,
                hashTags: editPostData?.hashTags
            })
        }
        inputRef.current.focus()
        const handleModel = (e) => {
            if (createPostModelRef.current) {
                if (!createPostModelRef.current.contains(e.target)) {
                    setIsCreatePostModel(false)
                }
            }
        }
        document.addEventListener('mousedown', handleModel)
    }, [])

    const userData = findUser(userDetails?.username)

    return (
        <div className={'create-post-model-main flex items-center justify-center bg-black/70 fixed inset-0 z-40'}>
            <div ref={createPostModelRef}
                 className="create-post-card w-[90%] sm:w-[500px] flex flex-col items-start justify-center gap-2 bg-secondary rounded p-3 pt-5 relative">
                <div
                    className="close-icon text-xl p-2 bg-black/20 dark:bg-white/20 hover:bg-black/40 dark:hover:bg-white/40 transition rounded-full aspect-square cursor-pointer absolute top-1 right-1"
                    onClick={() => setIsCreatePostModel(false)}>
                    <AiOutlineClose/>
                </div>
                <div className="top w-full flex border-b-[0.5px] border-black/20 dark:border-white/20">
                    <div className="profile">
                        {
                            userData?.avatarUrl ?
                                <img src={userData?.avatarUrl} alt="profile" className={'w-8 rounded-full aspect-square'}/> :
                                <div className={'w-8 aspect-square sm:w-10 object-cover rounded-full cursor-pointer bg-black/40 dark:bg-white/40 flex items-center justify-center text-lg font-bold text-white'}>
                                    {(userData ?? userDetails)?.firstName.slice(0,1).toUpperCase()}
                                </div>
                        }
                    </div>

                    <div className="text-area flex-1 pl-2">
                        <textarea
                            ref={inputRef}
                            name="content"
                            cols="30"
                            rows="4"
                            placeholder={"What's on your mind ??"}
                            className={'w-full resize-none bg-secondary text-sociogram p-2 outline-0 border-none max-h-32'}
                            onChange={changeHandler}
                            value={post.content}
                        >
                        </textarea>
                        {
                            post?.content &&
                            <div className="hashtags text-sociogram">
                                <input
                                    type="text"
                                    placeholder={'Enter tags (comma seperated) eg: sayari, quotes'}
                                    className={'w-full border outline-0 p-2 rounded'}
                                    value={isEdit ? post?.hashTags?.join(" ") : post?.hashTags?.join('')}
                                    onChange={(e) => convertHashTags(e.target.value)}
                                />
                            </div>
                        }
                    </div>
                </div>
                {
                    post.mediaURL &&
                    <div className={'relative'}>
                        <img src={post.mediaURL} className={'w-36 aspect-square rounded-lg'} alt="media"/>
                        <div
                            className="close-icon text-sm p-2 bg-black/20 dark:bg-white/20 hover:bg-black/40 dark:hover:bg-white/40 transition rounded-full aspect-square cursor-pointer absolute top-0 right-0"
                            onClick={() => setPost(prevState => ({...prevState, mediaURL: ''}))}>
                            <AiOutlineClose/>
                        </div>
                    </div>
                }
                {isMediaUploading && <p className={'text-sociogram'}>Uploading...</p>}
                <div className="bottom w-full flex justify-around items-center text-sociogram">
                    <label className={'cursor-pointer'}>
                        <MdAddPhotoAlternate className={'text-2xl'}/>
                        <input type="file" accept={'image/*'} className={'hidden'}
                               onChange={(e) => setPost(prevState => ({
                                   ...prevState,
                                   mediaURL: URL.createObjectURL(e.target.files[0])
                               }))}/>
                        {/*<input type="file" accept={'image/*, video/*'} className={'hidden'}*/}
                        {/*       onChange={handleMediaUpload}/>*/}
                    </label>
                    <button className={'text-2xl relative'}>
                        <MdOutlineAddReaction onClick={() => setIsEmojiModel(true)}/>
                        {
                            isEmojiModel &&
                            <div
                                className={'emoji-box-main absolute top-full z-10 -translate-x-[50%]'}>
                                <EmojiBox setIsEmojiModel={setIsEmojiModel} setPost={setPost}/>
                            </div>
                        }
                    </button>
                    <button
                        className={`px-6 py-1 rounded-2xl ${post.content || post.mediaURL ? 'bg-button' : 'bg-gray-500 cursor-not-allowed'} text-white`}
                        onClick={submitHandler}>
                        {isEdit ? 'Save' : 'Post'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreatePostModel;