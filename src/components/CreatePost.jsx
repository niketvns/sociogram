import profile from "../images/niket_img.png";
import {BsImages} from "react-icons/bs";
import {MdOutlineAddReaction} from "react-icons/md";

const CreatePost = () => {
    return (
        <div
            className="whats-on-your-mind flex flex-col items-start justify-center gap-2 bg-secondary rounded-lg py-2 px-3">
            <div className="top w-full flex border-b-[0.5px] border-white/20">
                <div className="profile">
                    <img src={profile} alt="profile" className={'w-8 rounded-full aspect-square'}/>
                </div>

                <div className="text-area flex-1 pl-2">
                    <textarea
                        name="post"
                        id="" cols="30"
                        rows="1"
                        placeholder={"What's on your mind ??"}
                        className={'h-16 w-full resize-none bg-secondary p-2 outline-0 border-none'}>
                    </textarea>
                </div>
            </div>
            <div className="bottom w-full flex justify-around items-center">
                <label className={'cursor-pointer'}>
                    <BsImages/><input type="file" accept={'image/*, video/*'} className={'hidden'}/>
                </label>
                <button className={'text-xl'}><MdOutlineAddReaction/></button>
                <button className={'bg-button px-6 py-1 rounded-2xl'}>Post</button>
            </div>
        </div>
    );
};

export default CreatePost;