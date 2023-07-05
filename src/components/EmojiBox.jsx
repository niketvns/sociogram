import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import {useEffect, useRef} from "react";

const EmojiBox = ({setIsEmojiModel, setPost, isComment}) => {
    const emojiModelRef = useRef()

    useEffect(() => {
        const handleModel = (e) => {
            if (emojiModelRef.current) {
                if (!emojiModelRef.current.contains(e.target)) {
                    setIsEmojiModel(false)
                }
            }
        }
        document.addEventListener('mousedown', handleModel)
    }, [])

    const emojiSelectHandler = (e) => {
        if (isComment){
            setPost(prev => prev + e.native)
        }else{
            setPost(prev => ({...prev, content: prev.content + e.native}))
        }
    }

    // emoji-box-main absolute top-full -translate-x-[50%] z-10

    return (
        <div ref={emojiModelRef} className={'emoji-box-main z-10'}>
            <Picker
                data={data}
                onEmojiSelect={emojiSelectHandler}
                emojiButtonSize={28}
                emojiSize={20}
                previewPosition="none"
            />
        </div>
    )
};

export default EmojiBox;