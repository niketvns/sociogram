import React, {useEffect, useRef} from 'react';
import {IoLogoWhatsapp} from 'react-icons/io'
import {BsFacebook} from 'react-icons/bs'
import {AiFillLinkedin, AiFillTwitterCircle,AiOutlineClose} from 'react-icons/ai'
import {useGlobalPosts} from "../contexts";

const ShareModel = ({setIsShareModel, postId}) => {
    const shareModelRef = useRef()
    const {handleCopyToClipboard} = useGlobalPosts()

    useEffect(() => {
        const handleModel = (e) => {
            if (shareModelRef.current) {
                if (!shareModelRef.current.contains(e.target)) {
                    setIsShareModel(false)
                }
            }
        }
        document.addEventListener('mousedown', handleModel)
    }, [])


    return (
        <div className={'comment-main flex items-center justify-center bg-black/70 fixed inset-0 z-10 text-lg'}>
            <div ref={shareModelRef}
                 className="share-card w-[90%] sm:w-[500px] flex flex-col items-start justify-center gap-6 bg-secondary rounded p-10 pb-14 relative">
                <div className="close-icon text-lg sm:text-xl p-2 bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 rounded-full aspect-square cursor-pointer absolute top-1 right-1" onClick={()=>setIsShareModel(false)}>
                    <AiOutlineClose/>
                </div>
                <h1>Share</h1>
                <div className="share-option flex gap-6 text-3xl">
                    <a rel={'noreferrer'} href={`whatsapp://send?text=https://sociogramapp.netlify.app/post/${postId}`} target={'_blank'} className="icons cursor-pointer text-3xl sm:text-5xl">
                        <IoLogoWhatsapp className={'text-green-400'}/>
                    </a>
                    <a rel={'noreferrer'} target={'_blank'} href={`https://www.linkedin.com/cws/share?url=https://sociogramapp.netlify.app/post/${postId}`} className="icons cursor-pointer text-3xl sm:text-5xl">
                        <AiFillLinkedin className={'text-blue-300'}/>
                    </a>
                    <a rel={'noreferrer'} href={`https://twitter.com/intent/tweet?text=https://sociogramapp.netlify.app/post/${postId}`}  target={'_blank'} className="icons cursor-pointer text-3xl sm:text-5xl">
                        <AiFillTwitterCircle className={'text-blue-300'}/>
                    </a>
                </div>
                <div className="share-url flex gap-2 text-sm w-full">
                    <div className="url border rounded-lg px-2 sm:px-5 py-2 flex-1 max-w-[80%] h-[33px] line-clamp-1">https://sociogramapp.netlify.app/post/{postId}</div>
                    <button className="button text-white bg-button px-3 py-1 rounded-[20px]" onClick={()=>handleCopyToClipboard(`https://sociogramapp.netlify.app/post/${postId}`)}>Copy</button>
                </div>
            </div>
        </div>
    );
};

export default ShareModel;