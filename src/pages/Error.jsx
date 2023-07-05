import {NavLink} from "react-router-dom";

const Error = () => {
    return (
        <div className='error-page min-h-[60vh] flex flex-col justify-center items-center gap-4 text-sociogram bg-sociogram'>
            <img src='https://metacartshop.netlify.app/static/media/error404.a23914714d93616242c8997894e3c0d8.svg' alt="" className={'w-36'}/>
            <p className={'text-lg lg:text-3xl'}>Page Not Found</p>
            <NavLink className='home-icon' to='/'>
                <button className={'bg-button text-white px-6 py-1 rounded-2xl'}>Home</button>
            </NavLink>
        </div>
    );
};

export default Error;