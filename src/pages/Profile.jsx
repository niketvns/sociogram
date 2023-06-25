import {PostCard, ProfileCard, Sidebar, SkeletonLoader, Suggestions} from "../components";
import {useEffect, useState} from "react";
import {useGlobalAlerts, useGlobalAuth, useGlobalPosts} from "../contexts";
import axios from "axios";
import {useParams} from "react-router-dom";

const Profile = () => {
    const [myPosts, setMyPosts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const {getAlert} = useGlobalAlerts()
    const {isPostLoading} = useGlobalPosts()

    const {username} = useParams()

    const fetchMyPosts = async () => {
        setIsLoading(true)
        try {
            const {data} = await axios.get(`/api/posts/user/${username}`)
            setMyPosts(data.posts)
        } catch (e) {
            getAlert('error', 'Error', e.message)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        if(isPostLoading){
            window.scrollTo({top: 0, left: 0});
            fetchMyPosts();
        }
    }, [username, isPostLoading])

    return (
        <div
            className={'home-main flex gap-5 sm:p-2 sm:justify-start lg:justify-center items-start lg:gap-4 sm:pl-0 relative'}>
            <Sidebar/>
            <div className="posts w-full md:w-1/2 lg:w-[45%] sm:pt-8 flex flex-col md:flex-1 lg:flex-none gap-4">
                {!isLoading && <ProfileCard username={username} myPosts={myPosts}/>}
                <div className={'all-posts flex flex-col gap-3 justify-center'}>
                    {
                        isLoading ?
                            <SkeletonLoader count={2}/> :
                            myPosts.length ?
                                myPosts.map(post => <PostCard key={post._id} post={post}/>) :
                                <p className={'my-28 text-white/40 text-xl text-center'}>No Post Yet</p>
                    }
                </div>

            </div>
            <Suggestions/>
        </div>
    );
};

export default Profile;