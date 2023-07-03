import {AiOutlinePlus} from "react-icons/ai";
import {useGlobalAuth, useGlobalUsers} from "../contexts";
import {useNavigate} from "react-router-dom";

const Suggestions = () => {
    const navigate = useNavigate()
    const {users, followUser} = useGlobalUsers()
    const {userDetails} = useGlobalAuth()

    const suggestedUser = users.filter(user => user.username !== userDetails.username && !user.followers.find(user => user._id === userDetails._id))

    return (
        <div className="suggestions bg-secondary my-8 rounded py-3 hidden md:flex flex-col gap-4 md:sticky top-28 min-w-[230px]">
            <h2 className={'text-xl font-bold text-sociogram border-b px-2'}>Who to follow</h2>
            <div className="all-suggestions flex flex-col gap-1 max-h-[60vh] overflow-auto">
                {
                    suggestedUser.length ?
                    suggestedUser.map(user => (
                        <div key={user._id} className="px-2 ind-suggestion py-2 hover:bg-black/5 hover:dark:bg-white/5 flex items-center justify-between gap-5">
                            <div className="profile flex gap-3 items-center cursor-pointer" onClick={()=>navigate(`/user/${user.username}`)}>
                                <img src={user.avatarUrl} alt="profile" className={'w-8 rounded-full aspect-square object-cover'}/>
                                <div className="details flex-1 text-sm cursor-pointer" onClick={()=>navigate(`/user/${user.username}`)}>
                                    <p className={'text-sociogram line-clamp-1'}>{user.firstName} {user.lastName}</p>
                                    <p className={'text-[12px] text-black/40 dark:text-white/40'}>@{user.username}</p>
                                </div>
                            </div>
                            <div className="button">
                                <button className={'bg-button text-sm px-4 py-1 rounded-3xl flex items-center justify-center gap-1'} onClick={()=>followUser(user._id)}><AiOutlinePlus/>Follow</button>
                            </div>
                        </div>
                    )) :
                        <p className={'text-black/60 dark:text-white/60 text-center pb-2'}>Nothing</p>
                }
            </div>
        </div>
    );
};

export default Suggestions;