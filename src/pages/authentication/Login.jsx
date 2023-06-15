import {Link} from "react-router-dom";
import {useGlobalAuth} from "../../contexts/index.js";

const Login = () => {

    const {loginHandler} = useGlobalAuth()

    return (
        <div className={'login-main pt-16 min-h-[90vh] flex justify-center items-center'}>
            <div className="login-form-card w-[90vw] xs:w-[400px] bg-secondary p-6 rounded-lg">
                <h1 className={'text-center text-3xl pb-4'}>Login</h1>
                <form onSubmit={loginHandler} className={'flex flex-col gap-3'}>
                    <label htmlFor="email" className={'flex flex-col'}>
                        Email Address
                        <input required type="text" name={'email'} id={'email'} placeholder={'johndoe@email.com'} className={'rounded-lg py-2 px-3 text-black'}/>
                    </label>
                    <label htmlFor="password" className={'flex flex-col'}>
                        Password
                        <input required type="password" name={'password'} id={'password'} placeholder={'*******'} className={'rounded-lg py-2 px-3 text-black'}/>
                    </label>
                    <label className="checkbox flex gap-2 items-center cursor-pointer">
                        <input type="checkbox" name="remember" id="remember" className={'w-4 h-4'}/>
                        Remember Me
                    </label>
                    <button type={'submit'} className={'bg-button p-3 rounded-lg'}>Submit</button>
                </form>
                <div className="signup mt-4 text-lg">
                    Not have Account ? <Link to={'/authentication/signup'} className={'text-indigo-400 hover:underline'}>Signup</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;