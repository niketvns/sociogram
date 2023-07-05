import {LuSearch} from 'react-icons/lu'
import {BsFillMoonStarsFill, BsSunFill} from 'react-icons/bs'
import {CreatePostModel, ProfileMenu, SearchModel} from "./index";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {useGlobalAuth} from "../contexts";

const Navbar = () => {
    const [isSearchModel, setIsSearchModel] = useState(false)
    const navigate = useNavigate()
    const {handleThemeSwitcher, theme} = useGlobalAuth()

    return (
        <>
            <nav className={'navbar-main bg-secondary flex justify-around md:justify-evenly items-center py-3 sticky top-0 z-10 border-b-[0.5px] border-white/10'}>
                <div className="logo w-20 md:w-1/12 cursor-pointer" onClick={()=>navigate('/')}>
                    {/*<img src={logo} alt="logo" className={'logo w-full'}/>*/}
                    <p className={'text-sociogram text-sm sm:text-lg min-w-fit lg:text-2xl font-bold italic select-none'}>Sociogram</p>
                </div>
                <div className="search w-1/2 md:w-1/3 relative">
                    <div className={'absolute left-4 h-full flex items-center text-sociogram dark:text-white'}>
                        <LuSearch/>
                    </div>
                    <input type="search" name="search" id="search" autoComplete={'off'}
                           placeholder={'Search Sociogram...'}
                           className={'bg-sociogram outline-0 py-2 pr-4 pl-11 rounded-[20px] w-full sm:block autofill:bg-red-600'}
                           onClick={()=>setIsSearchModel(true)}
                    />
                </div>
                { isSearchModel && <SearchModel setIsSearchModel={setIsSearchModel}/>}
                <div className="user-profile flex justify-center items-center gap-2">
                    {
                        theme === 'dark' ?
                            <button className={'bg-button p-2 sm:py-1 sm:px-5 rounded-[20px] flex items-center gap-1'} onClick={handleThemeSwitcher}>
                                <BsSunFill/> <span className={'hidden sm:block'}>Light</span>
                            </button> :
                            <button className={'bg-[#6b4ce6] dark:bg-button p-2 sm:py-1 sm:px-5 rounded-[20px] flex items-center gap-1 text-white'} onClick={handleThemeSwitcher}>
                                <BsFillMoonStarsFill/> <span className={'hidden sm:block'}>Dark</span>
                            </button>
                    }
                    <div className="profile">
                        <ProfileMenu/>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;