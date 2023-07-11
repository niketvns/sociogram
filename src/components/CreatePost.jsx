import profile from "../images/niket_img.png";
import {MdAddPhotoAlternate} from "react-icons/md";
import {MdOutlineAddReaction} from "react-icons/md";
import React, {useState} from "react";
import {useGlobalAuth, useGlobalPosts, useGlobalUsers} from "../contexts";
import {AiOutlineClose} from "react-icons/ai";
import {EmojiBox} from "./index";

const CreatePost = () => {
    const [post, setPost] = useState({
        content: "",
        mediaURL: "",
        hashTags: []
    })
    const [isEmojiModel, setIsEmojiModel] = useState(false)
    const {addPost} = useGlobalPosts();
    const {userDetails} = useGlobalAuth()
    const {findUser} = useGlobalUsers()

    const changeHandler = (e) => {
        const {name, value} = e.target;
        setPost(prevState => ({...prevState, [name]: value}))
    }

    const convertHashTags = (hashTagStr) => {
        setPost(prevState => ({...prevState, hashTags: hashTagStr.split(", ").join(" ").split(",").join(" ").split(" ")}))
    }

    const submitHandler = () => {
        if (!post.content && !post.mediaURL)
            return;
        addPost(post);
        setPost({
            content: "",
            mediaURL: "",
            hashTags: []
        })
    }
    const userData = findUser(userDetails?.username)

    return (
        <div
            className="whats-on-your-mind flex flex-col items-start justify-center gap-2 bg-secondary rounded py-2 px-3">
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
                        name="content"
                        id="" cols="30"
                        rows="1"
                        placeholder={"What's on your mind ??"}
                        className={'h-16 w-full resize-none bg-secondary text-sociogram p-2 outline-0 border-none'}
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
                                className={'w-full bg-secondary text-sociogram border outline-0 p-2 rounded'}
                                onChange={(e)=>convertHashTags(e.target.value)}
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
            <div className="bottom w-full flex justify-around items-center text-sociogram">
                <label className={'cursor-pointer'}>
                    <MdAddPhotoAlternate className={'text-2xl'}/>
                    <input type="file" accept={'image/*'} className={'hidden'} onChange={(e) => setPost(prevState => ({
                        ...prevState,
                        mediaURL: URL.createObjectURL(e.target.files[0])
                    }))}/>
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
                    onClick={submitHandler}>Post
                </button>
            </div>
        </div>
    );
};

export default CreatePost;