import {AiOutlinePlus} from "react-icons/ai";
import {useGlobalAuth, useGlobalUsers} from "../contexts";
import {useNavigate} from "react-router-dom";

const Suggestions = () => {
    const navigate = useNavigate()
    const {users, followUser} = useGlobalUsers()
    const {userDetails} = useGlobalAuth()

    const suggestedUser = users.filter(user => user.username !== userDetails.username && !user.followers.find(user => user._id == userDetails._id))

    return (
        <div className="suggestions bg-secondary my-8 rounded-lg p-3 hidden md:flex flex-col gap-6 md:sticky top-24">
            <h2 className={'text-lg'}>Suggestions for you</h2>
            <div className="all-suggestions flex flex-col gap-4">
                {
                    suggestedUser.map(user => (
                        <div key={user._id} className="ind-suggestion flex items-center justify-between gap-5">
                            <div className="profile cursor-pointer" onClick={()=>navigate(`/user/${user.username}`)}>
                                <img src={user.avatarUrl} alt="profile" className={'w-8 rounded-full aspect-square object-cover'}/>
                            </div>
                            <div className="details flex-1 text-sm cursor-pointer" onClick={()=>navigate(`/user/${user.username}`)}>
                                <p>{user.firstName} {user.lastName}</p>
                                <p className={'text-[12px] text-white/40'}>@{user.username}</p>
                            </div>
                            <div className="button">
                                <button className={'bg-button text-sm px-4 py-2 rounded-3xl flex items-center justify-center gap-1'} onClick={()=>followUser(user._id)}><AiOutlinePlus/>Follow</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Suggestions;