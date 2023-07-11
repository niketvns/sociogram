import React, {useEffect, useRef, useState} from 'react';
import {useGlobalPosts, useGlobalUsers} from "../contexts";
import {useNavigate} from "react-router-dom";
import {HiOutlineDotsHorizontal} from "react-icons/hi";
import {BiEdit} from 'react-icons/bi'
import {MdDelete} from 'react-icons/md'

const CommentCard = ({comment, post, userDetails}) => {
    const [isPostModel, setIsPostModel] = useState(false)
    const [isEdit, setIsEdit] = useState(false);
    const [editCommentData, setEditCommentData] = useState('')
    const isPostModelRef = useRef()
    const {findUser} = useGlobalUsers()
    const navigate = useNavigate()
    const {editComment, deleteComment} = useGlobalPosts()

    const userData = findUser(comment?.username)

    useEffect(() => {
        const handleModel = (e) => {
            if (isPostModelRef.current) {
                if (!isPostModelRef.current.contains(e.target)) {
                    setIsPostModel(false)
                }
            }
        }
        document.addEventListener('mousedown', handleModel)
    }, [])

    const editCommentHandler = (text) => {
        setEditCommentData(text);
    }

    const editCommentSubmitHandler = () => {
        editComment(post?._id, comment?._id, editCommentData)
        setIsEdit(false)
    }

    return (
        <div key={comment?._id}
             className="ind-comment flex flex-col items-start justify-start gap-2 my-2 p-2 py-4 rounded-lg bg-secondary relative">
            {
                userDetails?._id === userData?._id && !isEdit &&
                <div ref={isPostModelRef} className="hamburger absolute top-4 right-8 text-sociogram select-none">
                    <HiOutlineDotsHorizontal className={'text-2xl cursor-pointer'}
                                             onClick={() => setIsPostModel(prevState => !prevState)}/>
                    {
                        isPostModel &&
                        <div
                            className="post-edit-menu select-none absolute top-6 rounded right-2 bg-secondary border-2 border-black/20 dark:border-white/20 z-10">
                            <div
                                className="edit px-6 py-2 cursor-pointer hover:bg-black/20 hover:dark:bg-white/20 transition border-b flex gap-2 items-center"
                                onClick={() => {
                                    setIsEdit(true)
                                    setIsPostModel(false)
                                    setEditCommentData(comment.text)
                                }}
                            >
                                <BiEdit/> Edit
                            </div>
                            <div
                                className="delete px-6 py-2 cursor-pointer hover:bg-black/20 hover:dark:bg-white/20 transition flex gap-2 items-center"
                                onClick={() => deleteComment(post?._id, comment?._id)}
                            >
                                <MdDelete/>Delete
                            </div>
                        </div>
                    }
                </div>
            }
            <div className="user flex gap-2">
                <div className="profile">
                    {
                        findUser(comment?.username)?.avatarUrl ?
                            <img src={findUser(comment?.username)?.avatarUrl} alt="profile"
                                 className={'w-8 rounded-full aspect-square object-cover'}/>:
                            <div className={'w-8 aspect-square sm:w-10 object-cover rounded-full cursor-pointer bg-black/40 dark:bg-white/40 flex items-center justify-center text-lg font-bold text-white'}>
                                {(findUser(comment?.username) ?? userDetails)?.firstName.slice(0,1).toUpperCase()}
                            </div>
                    }
                </div>
                <div className={'text-lg'}>
                    <h3 className={''}>@{comment?.username}</h3>
                    <p className={'text-sm text-black/60 dark:text-white/60'}>Replying
                        to <span
                            className={'text-blue-600 hover:underline cursor-pointer'}
                            onClick={() => navigate(`/user/${post?.username}`)}>{userDetails?.username === post?.username ? "You" : `@${post?.username}` }</span>
                    </p>
                </div>
                {
                    comment?.isEdited &&
                    <div className="edited text-[12px] pt-1 text-black/30 dark:text-white/30">
                        (edited)
                    </div>
                }
            </div>
            {
                isEdit ?
                    <div className={'edit-comment flex flex-col w-full px-2 gap-2 items-end'}>
                        <textarea
                            name="comment"
                            id="comment"
                            rows="3"
                            placeholder={'Edit Your Comment!'}
                            className={'w-full flex-1 resize-none h-12 px-4 py-1 rounded-lg bg-sociogram text-sociogram border-none outline-0'}
                            value={editCommentData}
                            onChange={(e)=>editCommentHandler(e.target.value)}
                        ></textarea>
                        <div className="buttons flex gap-2">
                            <button className={`text-white px-3 py-1 rounded-2xl border-2 text-sociogram`} onClick={()=>setIsEdit(false)}>Close</button>
                            <button className={`text-white px-3 py-1 rounded-2xl ${editCommentData ? 'bg-button' : 'bg-gray-500 cursor-not-allowed'}`} onClick={editCommentSubmitHandler}>Update</button>
                        </div>
                    </div>:
                    <div className="comment-details flex-1 pl-9">
                        <div className="text line-clamp-3 text-lg whitespace-pre-line">{comment?.text}</div>
                        {
                            comment?.mediaURL &&
                            <div className="media">
                                <img src={comment.mediaURL} alt="media"/>
                            </div>
                        }
                    </div>
            }
        </div>
    );
};

export default CommentCard;