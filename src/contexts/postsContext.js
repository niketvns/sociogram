import {createContext, useContext, useEffect, useReducer, useState} from "react";
import axios from "axios";
import {initialValue, reducerFunction} from "./Reducer/reducer";
import {useGlobalAlerts} from "./alertContext";
import copy from 'copy-to-clipboard';

const postsContext = createContext()

const PostsProvider = ({children}) => {
    const [isMediaUploading, setIsMediaUploading] = useState(false);
    const [isPostLoading, setIsPostLoading] = useState(false)
    const [isPostEditLoading, setIsPostEditLoading] = useState(false)
    const [isLikedLoading, setIsLikedLoading] = useState(false)
    const [isCommentLoading, setIsCommentLoading] = useState(false)
    const [state, dispatch] = useReducer(reducerFunction, initialValue);
    const {getAlert} = useGlobalAlerts()

    useEffect(() => {
        fetchAllPosts();
    }, [])

    const fetchAllPosts = async () => {
        setIsPostLoading(true)
        try {
            const {data} = await axios.get('/api/posts')
            dispatch({type: 'UPDATE_POST', payload: data.posts});
        } catch (error) {
            console.log(error)
        } finally {
            setIsPostLoading(false)
        }
    }

    const handleMediaUpload = async (event) => {
        console.log(event.target.files)
        setIsMediaUploading(true)
        try {
            const formData = new FormData();
            formData.append('file', event.target.files[0]);
            formData.append('upload_preset', 'sociogramapp');
            formData.append('cloud_name', 'dyzu4lzqz');

            const response = await axios.post(
                'https://api.cloudinary.com/v1_1/dyzu4lzqz/image/upload',
                formData
            );
            console.log('File uploaded successfully!');
            console.log('Public URL:', response);
        } catch (error) {
            getAlert('error', 'Error occurred during file upload:', error.message);
        } finally {
            setIsMediaUploading(false)
        }
    };

    const addPost = async (post) => {
        setIsPostEditLoading(true)
        const token = localStorage.getItem('encodedToken')
        try {
            const {data} = await axios.post('/api/posts', {
                postData: post
            }, {headers: {authorization: token}})
            dispatch({type: 'UPDATE_POST', payload: data.posts});
            getAlert('success', 'Post Uploaded Successfully', '')
        } catch (error) {
            console.log(error)
        }finally {
            setIsPostEditLoading(false)
        }
    }

    const editPost = async (post, postId) => {
        setIsPostEditLoading(true)
        const token = localStorage.getItem('encodedToken')
        try {
            const {data} = await axios.post(`/api/posts/edit/${postId}`, {
                postData: post
            }, {headers: {authorization: token}})
            dispatch({type: 'UPDATE_POST', payload: data.posts});
            getAlert('success', 'Post Edited Successfully', '')
        } catch (error) {
            console.log(error)
        } finally {
            setIsPostEditLoading(false)
        }
    }

    const deletePost = async (postId) => {
        const token = localStorage.getItem('encodedToken')
        try {
            const {data} = await axios.delete(`/api/posts/${postId}`, {headers: {authorization: token}})
            dispatch({type: 'UPDATE_POST', payload: data.posts});
            getAlert('success', 'Post Deleted Successfully', '')
        } catch (error) {
            console.log(error)
        }
    }

    const handleCopyToClipboard = (text) => {
        copy(text)
        getAlert('success', 'Copied', text);
    }

    const addToLikes = async (postId) => {
        setIsLikedLoading(true)
        const token = localStorage.getItem('encodedToken')
        try {
            const {data} = await axios.post(
                `/api/posts/like/${postId}`,
                {},
                {headers: {authorization: token}}
            )
            dispatch({type: 'UPDATE_POST', payload: data.posts});
        } catch (error) {
            getAlert('error', 'Error in Likes', error.message)
        } finally {
            setIsLikedLoading(false)
        }
    }

    const removeFromLikes = async (postId) => {
        setIsLikedLoading(true)
        const token = localStorage.getItem('encodedToken')
        try {
            const {data} = await axios.post(
                `/api/posts/dislike/${postId}`,
                {},
                {headers: {authorization: token}}
            )
            dispatch({type: 'UPDATE_POST', payload: data.posts});
        } catch (error) {
            getAlert('error', 'Error in Action', error.message)
        } finally {
            setIsLikedLoading(false)
        }
    }

    const isInLiked = (likedBy, userId) => {
        return likedBy.some(user => user?._id === userId)
    }

    const addComment = async (postId, comment) => {
        setIsCommentLoading(true)
        const token = localStorage.getItem('encodedToken')
        try {
            const {data} = await axios.post(
                `/api/comments/add/${postId}`,
                {commentData: comment},
                {headers: {authorization: token}}
            )
            dispatch({type: 'UPDATE_POST', payload: data.posts});
        } catch (error) {
            getAlert('error', 'Error in Comment', error.message)
        }finally {
            setIsCommentLoading(false)
        }
    }

    const editComment = async (postId, commentId, comment) => {
        setIsCommentLoading(true)
        const token = localStorage.getItem('encodedToken')
        try {
            const {data} = await axios.post(
                `/api/comments/edit/${postId}/${commentId}`,
                {commentData: comment},
                {headers: {authorization: token}}
            )
            dispatch({type: 'UPDATE_POST', payload: data.posts});
            getAlert('success', 'Comment Edited Successfully!', '')
        } catch (error) {
            getAlert('error', 'Error in Comment', error.message)
        }finally {
            setIsCommentLoading(false)
        }
    }

    const deleteComment = async (postId, commentId) => {
        setIsCommentLoading(true)
        const token = localStorage.getItem('encodedToken')
        try {
            const {data} = await axios.delete(
                `/api/comments/delete/${postId}/${commentId}`,
                {headers: {authorization: token}}
            )
            dispatch({type: 'UPDATE_POST', payload: data.posts});
            getAlert('success', 'Comment Deleted Successfully', '')
        } catch (error) {
            // getAlert('error', 'Error in Comment delete', error.message)
            console.log(error)
        }finally {
            setIsCommentLoading(false)
        }
    }

    return (
        <postsContext.Provider value={{
            posts: state.allPosts,
            isPostLoading,
            setIsPostLoading,
            addPost,
            deletePost,
            editPost,
            isPostEditLoading,
            handleMediaUpload,
            isMediaUploading,
            addToLikes,
            removeFromLikes,
            isInLiked,
            isLikedLoading,
            isCommentLoading,
            handleCopyToClipboard,
            addComment,
            editComment,
            deleteComment
        }}>
            {children}
        </postsContext.Provider>
    )
}

const useGlobalPosts = () => useContext(postsContext);

export {PostsProvider, useGlobalPosts}