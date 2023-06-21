import React, {useState} from 'react';
import {AiOutlineArrowUp} from 'react-icons/ai'

const BackToTop = () => {
    const [goToTop, setGoToTop] = useState(false)

    const scrollToTop = () => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setGoToTop(true)
        } else if (scrolled <= 300) {
            setGoToTop(false)
        }
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        goToTop &&
        <div onClick={scrollToTop} className='go-to-top hidden sm:block fixed bottom-4 right-4 bg-button p-3 rounded-full text-2xl cursor-pointer'>
            <AiOutlineArrowUp/>
        </div>
    )
}

export default BackToTop;