import profile from "../images/niket_img.png";
import {AiOutlinePlus} from "react-icons/ai";

const Suggestions = () => {
    return (
        <div className="suggestions bg-secondary my-8 rounded-lg p-3 hidden md:flex flex-col gap-6 md:sticky top-24">
            <h2 className={'text-lg'}>Suggestions for you</h2>
            <div className="all-suggestions flex flex-col gap-4">
                <div className="ind-suggestion flex items-center justify-between gap-5">
                    <div className="profile">
                        <img src={profile} alt="profile" className={'w-8 rounded-full aspect-square'}/>
                    </div>
                    <div className="details flex-1">
                        <p>John Doe</p>
                        <p>@johndeo</p>
                    </div>
                    <div className="button">
                        <button className={'bg-button text-sm px-4 py-2 rounded-3xl flex items-center justify-center gap-1'}><AiOutlinePlus/>Follow</button>
                    </div>
                </div>
                <div className="ind-suggestion flex items-center justify-between gap-5">
                    <div className="profile">
                        <img src={profile} alt="profile" className={'w-8 rounded-full aspect-square'}/>
                    </div>
                    <div className="details flex-1">
                        <p>John Doe</p>
                        <p>@johndeo</p>
                    </div>
                    <div className="button">
                        <button className={'bg-button text-sm px-4 py-2 rounded-3xl flex items-center justify-center gap-1'}><AiOutlinePlus/>Follow</button>
                    </div>
                </div>
                <div className="ind-suggestion flex items-center justify-between gap-5">
                    <div className="profile">
                        <img src={profile} alt="profile" className={'w-8 rounded-full aspect-square'}/>
                    </div>
                    <div className="details flex-1">
                        <p>John Doe</p>
                        <p>@johndeo</p>
                    </div>
                    <div className="button">
                        <button className={'bg-button text-sm px-4 py-2 rounded-3xl flex items-center justify-center gap-1'}><AiOutlinePlus/>Follow</button>
                    </div>
                </div>
                <div className="ind-suggestion flex items-center justify-between gap-5">
                    <div className="profile">
                        <img src={profile} alt="profile" className={'w-8 rounded-full aspect-square'}/>
                    </div>
                    <div className="details flex-1">
                        <p>John Doe</p>
                        <p>@johndeo</p>
                    </div>
                    <div className="button">
                        <button className={'bg-button text-sm px-4 py-2 rounded-3xl flex items-center justify-center gap-1'}><AiOutlinePlus/>Follow</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Suggestions;