import React, {useEffect, useRef, useState} from 'react';
import profile from "../images/niket_img.png";
import {MdOutlineAddReaction, MdPermMedia} from "react-icons/md";
import {AiOutlineClose} from "react-icons/ai";
import {useGlobalPosts} from "../contexts";

const CommentBox = ({setIsCommentModel, post}) => {
    const [comment, setComment] = useState('')
    const commentModelRef = useRef()
    const {addComment} = useGlobalPosts()

    useEffect(() => {
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
        if (comment){
            addComment(post._id, comment)
            setIsCommentModel(false)
        }
    }

    return (
        <div className={'comment-main flex items-center justify-center bg-black/70 fixed inset-0 z-10'}>
            <div ref={commentModelRef}
                className="comment-card w-[90%] sm:w-[500px] flex flex-col items-start justify-center gap-2 bg-secondary rounded-lg p-3 pt-5 relative">
                <div className="close-icon text-xl p-2 bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 rounded-full aspect-square cursor-pointer absolute top-0 right-0" onClick={()=>setIsCommentModel(false)}>
                    <AiOutlineClose/>
                </div>
                <div className="top w-full flex border-b-[0.5px] border-white/20">
                    <div className="profile">
                        <img src={profile} alt="profile" className={'w-8 rounded-full aspect-square'}/>
                    </div>

                    <div className="text-area flex-1 pl-2">
                    <textarea
                        name="post"
                        id="" cols="30"
                        rows="1"
                        placeholder={"Post Your Reply!"}
                        className={'h-44 w-full text-lg resize-none bg-secondary p-2 outline-0 border-none'}
                        onChange={(e)=>setComment(e.target.value)}
                    >
                    </textarea>
                    </div>
                </div>
                <div className="bottom w-full flex justify-around items-center">
                    <label className={'cursor-pointer'}>
                        <MdPermMedia className={'text-2xl'}/><input type="file" accept={'image/*, video/*'} className={'hidden'}/>
                    </label>
                    <button className={'text-2xl'}><MdOutlineAddReaction/></button>
                    <button className={'bg-button text-white px-6 py-1 rounded-2xl text-lg'} onClick={submitHandler}>Reply</button>
                </div>
            </div>
        </div>
    );
};

export default CommentBox;