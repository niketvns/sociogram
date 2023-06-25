import profile from "../images/niket_img.png";
import {MdAddPhotoAlternate} from "react-icons/md";
import {MdOutlineAddReaction} from "react-icons/md";
import {useState} from "react";
import {useGlobalPosts} from "../contexts";

const CreatePost = () => {
    const [post, setPost] = useState({
        content: "",
        mediaURL: "",
    })

    const {addPost} = useGlobalPosts();

    const changeHandler = (e) => {
        const {name, value} = e.target;
        setPost(prevState => ({...prevState, [name]: value}))
    }

    const submitHandler = () => {
        if (!post.content)
            return;
        addPost(post);
        setPost({
            content: "",
            mediaURL: "",
        })
    }

    return (
        <div
            className="whats-on-your-mind flex flex-col items-start justify-center gap-2 bg-secondary rounded-lg py-2 px-3">
            <div className="top w-full flex border-b-[0.5px] border-white/20">
                <div className="profile">
                    <img src={profile} alt="profile" className={'w-8 rounded-full aspect-square'}/>
                </div>

                <div className="text-area flex-1 pl-2">
                    <textarea
                        name="content"
                        id="" cols="30"
                        rows="1"
                        placeholder={"What's on your mind ??"}
                        className={'h-16 w-full resize-none bg-secondary p-2 outline-0 border-none'}
                        onChange={changeHandler}
                        value={post.content}
                    >
                    </textarea>
                </div>
            </div>
            <div className="bottom w-full flex justify-around items-center">
                <label className={'cursor-pointer'}>
                    <MdAddPhotoAlternate className={'text-2xl'}/>
                    <input type="file" accept={'image/*, video/*'} className={'hidden'}/>
                </label>
                <button className={'text-2xl'}><MdOutlineAddReaction/></button>
                <button className={`px-6 py-1 rounded-2xl ${post.content ? 'bg-button' : 'bg-gray-500'}`} onClick={submitHandler}>Post</button>
            </div>
        </div>
    );
};

export default CreatePost;