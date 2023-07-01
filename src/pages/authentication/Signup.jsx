import {Link, useLocation, useNavigate} from "react-router-dom";
import {useGlobalAuth} from "../../contexts";
import {useEffect} from "react";

const Signup = () => {
    const {signupHandler, loginToken, signupFormChange} = useGlobalAuth()
    const navigate = useNavigate()
    const location = useLocation();

    useEffect(()=>{
        const token = localStorage.getItem('encodedToken')
        if(token){
            navigate(location?.state?.from?.pathname || '/')
        }
        document.title = 'Signup | Sociogram'
    },[loginToken])

    return (
        <div className={'signup-main pt-16 min-h-[90vh] flex justify-center items-center text-sociogram'}>
            <div className="signup-form-card w-[90vw] xs:w-[400px] bg-secondary p-6 rounded-lg">
                <h1 className={'text-center text-3xl pb-4'}>Signup</h1>
                <form className={'flex flex-col gap-3'} onSubmit={signupHandler}>
                    <label htmlFor="firstName" className={'flex flex-col'}>
                        First Name
                        <input required type="text" name={'firstName'} id={'firstName'} placeholder={'John'} className={'rounded-lg py-2 px-3 text-black bg-sociogram dark:bg-white'} onChange={signupFormChange}/>
                    </label>
                    <label htmlFor="lastName" className={'flex flex-col'}>
                        Last Name
                        <input required type="text" name={'lastName'} id={'lastName'} placeholder={'Doe'} className={'rounded-lg py-2 px-3 text-black bg-sociogram dark:bg-white'} onChange={signupFormChange}/>
                    </label>
                    <label htmlFor="username" className={'flex flex-col'}>
                        Username
                        <input required type="text" name={'username'} id={'username'} placeholder={'@johndoe'} className={'rounded-lg py-2 px-3 text-black bg-sociogram dark:bg-white'} onChange={signupFormChange}/>
                    </label>
                    <label htmlFor="password" className={'flex flex-col'}>
                        Password
                        <input required type="password" name={'password'} id={'password'} placeholder={'*******'} className={'rounded-lg py-2 px-3 text-black bg-sociogram dark:bg-white'} onChange={signupFormChange}/>
                    </label>
                    <label className="checkbox flex gap-2 items-center cursor-pointer select-none">
                        <input required type="checkbox" name="remember" id="remember" className={'w-4 h-4'}/>
                        Accept Terms & Conditions
                    </label>
                    <button type={'submit'} className={'bg-button p-3 rounded-lg text-white'}>Submit</button>
                </form>
                <div className="signup mt-4 text-lg">
                    Already have an Account ? <Link to={'/authentication/login'} className={'text-indigo-400 hover:underline'}>Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Signup;