import React, {useEffect, useRef} from 'react';
import {IoLogoWhatsapp} from 'react-icons/io'
import {BsFacebook} from 'react-icons/bs'
import {AiFillLinkedin, AiFillTwitterCircle,AiOutlineClose} from 'react-icons/ai'

const ShareModel = ({setIsShareModel, postId}) => {

    const shareModelRef = useRef()

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
                 className="share-card w-[90%] sm:w-[500px] flex flex-col items-start justify-center gap-6 bg-secondary rounded-lg p-10 pb-14 relative">
                <div className="close-icon text-2xl p-2 bg-white/10 hover:bg-white/20 rounded-full aspect-square cursor-pointer absolute top-0 right-0" onClick={()=>setIsShareModel(false)}>
                    <AiOutlineClose/>
                </div>
                <h1>Share</h1>
                <div className="share-option flex gap-6 text-3xl">
                    <div className="icons cursor-pointer text-5xl">
                        <IoLogoWhatsapp className={'text-green-400'}/>
                    </div>
                    <div className="icons cursor-pointer text-5xl">
                        <BsFacebook className={'text-blue-400'}/>
                    </div>
                    <div className="icons cursor-pointer text-5xl">
                        <AiFillLinkedin className={'text-blue-300'}/>
                    </div>
                    <div className="icons cursor-pointer text-5xl">
                        <AiFillTwitterCircle className={'text-blue-300'}/>
                    </div>
                </div>
                <div className="share-url flex gap-2 text-sm w-full">
                    <div className="url border rounded-lg px-5 py-2 flex-1 max-w-[80%] line-clamp-1">https://sociogramapp.netlify.app/post/{postId}</div>
                    <button className="button bg-button px-3 py-1 rounded-[20px]">Copy</button>
                </div>
            </div>
        </div>
    );
};

export default ShareModel;