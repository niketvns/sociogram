import React, {useEffect, useRef, useState} from 'react';
import profile from "../images/niket_img.png";
import {MdOutlineAddReaction, MdPermMedia} from "react-icons/md";
import {AiOutlineClose} from "react-icons/ai";
import {useGlobalAuth, useGlobalPosts, useGlobalUsers} from "../contexts";
import {EmojiBox} from "./index";

const CommentBox = ({setIsCommentModel, post}) => {
    const [comment, setComment] = useState('')
    const [isEmojiModel, setIsEmojiModel] = useState(false)
    const commentModelRef = useRef()
    const inputRef = useRef()
    const {addComment} = useGlobalPosts()
    const {userDetails} = useGlobalAuth()
    const {findUser} = useGlobalUsers()

    useEffect(() => {
        inputRef.current.focus()
        const handleModel = (e) => {
            if (commentModelRef.current) {
                if (!commentModelRef.current.contains(e.target)) {
                    setIsCommentModel(false)
                }
            }
        }
        document.addEventListener('mousedown', handleModel)
    }, [])

    const submitHandler = () => {
        if (comment) {
            addComment(post._id, comment)
            setIsCommentModel(false)
        }
    }

    const userData = findUser(userDetails?.username)

    return (
        <div className={'comment-main flex items-center justify-center bg-black/70 fixed inset-0 z-10'}>
            <div ref={commentModelRef}
                 className="comment-card w-[90%] sm:w-[500px] flex flex-col items-start justify-center gap-2 bg-secondary rounded p-3 pt-5 relative">
                <div
                    className="close-icon p-2 bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 rounded-full aspect-square cursor-pointer absolute top-1 right-1 text-lg"
                    onClick={() => setIsCommentModel(false)}>
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
                        name="post"
                        id="" cols="30"
                        rows="1"
                        placeholder={"Post Your Reply!"}
                        className={'h-28 w-full text-[1rem] resize-none bg-secondary p-2 outline-0 border-none'}
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    >
                    </textarea>
                    </div>
                </div>
                <div className="bottom w-full flex justify-between px-6 items-center">
                    <button className={'text-2xl relative'}>
                        <MdOutlineAddReaction onClick={() => setIsEmojiModel(true)}/>
                        {
                            isEmojiModel &&
                            <div
                                 className={'emoji-box-main absolute -left-6 top-full z-10'}>
                                <EmojiBox setIsEmojiModel={setIsEmojiModel} setPost={setComment} isComment={true}/>
                            </div>
                        }
                    </button>
                    <button
                        className={`text-white px-6 py-2 rounded-2xl text-sm ${comment ? 'bg-button' : 'bg-gray-500 cursor-not-allowed'}`}
                        onClick={submitHandler}>Comment
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CommentBox;