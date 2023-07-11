import {Link, useLocation, useNavigate} from "react-router-dom";
import {useGlobalAuth} from "../../contexts/index.js";
import {useEffect} from "react";


const Login = () => {
    const {loginHandler, loginToken, loginFormData, applyDummyCredential, loginFormChange} = useGlobalAuth()
    const navigate = useNavigate()
    const location = useLocation();

    useEffect(()=>{
        const token = localStorage.getItem('encodedToken')
        if(token){
            navigate(location?.state?.from?.pathname || '/')
        }
        document.title = 'Login | Sociogram'
    },[loginToken])

    return (
        <div className={'login-main pt-16 min-h-[90vh] flex justify-center items-center text-sociogram'}>
            <div className="login-form-card w-[90vw] xs:w-[400px] bg-secondary p-6 rounded-lg">
                <h1 className={'text-center text-3xl pb-4'}>Login</h1>
                <form onSubmit={loginHandler} className={'flex flex-col gap-3'}>
                    <label htmlFor="email" className={'flex flex-col'}>
                        Username
                        <input required type="text" name={'username'} id={'username'} placeholder={'@johndoe'} onChange={loginFormChange} value={loginFormData.username} className={'rounded-lg py-2 px-3 text-black bg-sociogram dark:bg-white'}/>
                    </label>
                    <label htmlFor="password" className={'flex flex-col'}>
                        Password
                        <input required type="password" name={'password'} id={'password'} placeholder={'*******'} onChange={loginFormChange} value={loginFormData.password} className={'rounded-lg py-2 px-3 text-black bg-sociogram dark:bg-white'}/>
                    </label>
                    <label className="checkbox flex gap-2 items-center cursor-pointer">
                        <input type="checkbox" name="remember" id="remember" className={'w-4 h-4'}/>
                        Remember Me
                    </label>
                    <button type={'button'} className={'bg-transparent border-2 p-3 rounded-lg'} onClick={applyDummyCredential}>Guest Credential</button>
                    <button type={'submit'} className={'bg-button p-3 rounded-lg text-white'}>Submit</button>
                </form>
                <div className="signup mt-4 text-lg">
                    Not have Account ? <Link to={'/authentication/signup'} className={'text-indigo-400 hover:underline'}>Signup</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;