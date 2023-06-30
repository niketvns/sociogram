import {createContext, useContext, useEffect, useReducer, useState} from "react";
import axios from "axios";
import {initialValue, reducerFunction} from "./Reducer/reducer";
import {useGlobalAlerts} from "./alertContext";
import {cookieStorageManager} from "@chakra-ui/react";

const postsContext = createContext()

const PostsProvider = ({children}) =>{
    const [selectedMedia, setSelectedMedia] = useState(null);
    const [uploadResult, setUploadResult] = useState(null);
    const [isPostLoading, setIsPostLoading] = useState(false)
    const [isPostEditLoading, setIsPostEditLoading] = useState(false)
    const [state, dispatch] = useReducer(reducerFunction, initialValue);
    const {getAlert} = useGlobalAlerts()

    useEffect(()=>{
        fetchAllPosts();
    },[])

    const fetchAllPosts = async () => {
        setIsPostLoading(true)
        try {
            const { data } = await axios.get('/api/posts')
            dispatch({ type: 'UPDATE_POST', payload: data.posts });
        } catch (error) {
            console.log(error)
        }finally {
            setIsPostLoading(false)
        }
    }

    const handleFileChange = (event) => {
        setSelectedMedia(event.target.files[0]);
    };

    const handleUpload = async () => {
        try {
            const formData = new FormData();
            formData.append('file', selectedMedia);
            formData.append('upload_preset', 'your_cloudinary_upload_preset'); // Replace with your Cloudinary upload preset

            const response = await axios.post(
                'https://api.cloudinary.com/v1_1/your_cloud_name/upload', // Replace with your Cloudinary cloud name
                formData
            );

            setUploadResult(response.data.secure_url);
            console.log('File uploaded successfully!');
            console.log('Public URL:', response.data.secure_url);
        } catch (error) {
            console.error('Error occurred during file upload:', error);
        }
    };

    const addPost = async (post) => {
        const token = localStorage.getItem('encodedToken')
        try {
            const { data } = await axios.post('/api/posts',{
                postData: post
            },{headers: {authorization: token}})
            console.log(data)
            dispatch({ type: 'UPDATE_POST', payload: data.posts });
            getAlert('success', 'Post Uploaded Successfully', '')
        } catch (error) {
            console.log(error)
        }
    }

    const editPost = async (post, postId) => {
        setIsPostEditLoading(true)
        const token = localStorage.getItem('encodedToken')
        try {
            const { data } = await axios.post(`/api/posts/edit/${postId}`,{
                postData: post
            },{headers: {authorization: token}})
            // console.log(data)
            dispatch({ type: 'UPDATE_POST', payload: data.posts });
            getAlert('success', 'Post Edited Successfully', '')
        } catch (error) {
            console.log(error)
        }finally {
            setIsPostEditLoading(false)
        }
    }

    const deletePost = async (postId) => {
        const token = localStorage.getItem('encodedToken')
        try {
            const { data } = await axios.delete(`/api/posts/${postId}`,{headers: {authorization: token}})
            console.log(data)
            dispatch({ type: 'UPDATE_POST', payload: data.posts });
            getAlert('success', 'Post Deleted Successfully', '')
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <postsContext.Provider value={{posts: state.allPosts, isPostLoading, setIsPostLoading, addPost, deletePost, editPost, isPostEditLoading}}>
            {children}
        </postsContext.Provider>
    )
}

const useGlobalPosts = () => useContext(postsContext);

export {PostsProvider, useGlobalPosts}