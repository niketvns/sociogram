import logo from '../images/logo-full.png'
import profile from '../images/niket_img.png'
import {LuSearch} from 'react-icons/lu'

const Navbar = () => {
    return (
        <>
            <nav className={'navbar-main bg-secondary flex justify-around md:justify-evenly items-center py-3 sticky top-0 z-10 border-b-[0.5px] border-white/10'}>
                <div className="logo w-20 md:w-1/12">
                    <img src={logo} alt="logo" className={'logo w-full'}/>
                </div>
                <div className="search w-1/2 md:w-1/3 relative">
                    <div className={'absolute left-4 h-full flex items-center'}>
                        <LuSearch/>
                    </div>
                    <input type="search" name="search" id="search" autoComplete={'off'}
                           placeholder={'Search Sociogram...'}
                           className={'bg-sociogram outline-0 py-2 pr-4 pl-11 rounded-[20px] w-full sm:block autofill:bg-red-600'}/>
                </div>
                <div className="user-profile flex justify-center items-center gap-2">
                    <button className={'bg-button py-1 px-5 rounded-[20px] hidden md:block'}>Update</button>
                    <div className="profile">
                        <img src={profile} alt="pic"
                             className={'w-8 aspect-square sm:w-10 object-cover rounded-full cursor-pointer'}/>
                    </div>
                    {/*<button className={'bg-button py-1 px-5 rounded-[20px]'}>Login</button>*/}
                </div>
            </nav>
        </>
    );
};

export default Navbar;