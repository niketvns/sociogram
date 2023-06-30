import {AiFillHeart, AiFillLinkedin, AiFillTwitterCircle, AiFillGithub} from 'react-icons/ai'

const Footer = () => {

    const date = new Date().getFullYear()

    return (
        <footer className={'flex flex-col items-center gap-2 justify-center p-4 pb-8 sm:pb-4 border-t border-black/20 dark:border-white/20 text-sociogram mt-8'}>
            <div className={'w-[45%]] flex items-center gap-2'}>
                Made With <AiFillHeart className={'text-red-500'}/> by Niket Kumar Mishra
            </div>
            <div className="social-media flex gap-6 text-3xl">
                <a rel="noreferrer" href="https://twitter.com/Niketmishravns" target={"_blank"}>
                    <AiFillTwitterCircle/>
                </a>
                <a rel="noreferrer" href="https://github.com/niketvns" target={"_blank"}>
                    <AiFillGithub/>
                </a>
                <a rel="noreferrer" href="https://www.linkedin.com/in/niket-kumar-mishra-37ab5a215/" target={"_blank"}>
                    <AiFillLinkedin/>
                </a>
            </div>
            <div className="copyrighy">
                Copyright @ {date} | Sociogram
            </div>
        </footer>
    );
};

export default Footer;