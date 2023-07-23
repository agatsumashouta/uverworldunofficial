import '../styles/globals.css';
import React, { useEffect, useState } from "react";

const Header = () => {
    const HomeButtonOnclick = () => {
        window.location.href = '#Home';
    };
    const MenberButtonOnclick = () => {
        window.location.href = '#Menber';
    };
    const MusicButtonOnclick = () => {
        window.location.href = '#Music';
    };
    const LinkButtonOnclick = () => {
        window.location.href = '#Link';
    };
    const StaffButtonOnclick = () => {
        window.location.href = '#Staff';
    };

    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const headerHeight = document.getElementById('header').clientHeight;
            const mainImageHeight = document.getElementById('main-image').clientHeight;
            const scrollY = window.scrollY;
    
            if(scrollY >= mainImageHeight - headerHeight) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };
    
        window.addEventListener('scroll',handleScroll);
        return() => {
            window.removeEventListener('scroll',handleScroll);
        };
    },[]);


    return (
        <header id="header" className={`${isFixed ? 'fixed top-0 left-0 w-full' : ''} border-b-5 p-b-3 border-gray-500 shadow-md m-t-5 bg-white` }>
            <nav>
                <ul className="flex p-b-3 border-b-5 border-gray-500 shadow-md ">
                    <li className="flex-1"><button onClick= {HomeButtonOnclick} className="w-full h-20 hover:bg-gradient-to-b from-blue-500 to-blue-150 pl-3 
                        font-customFont text-2xl">UVERworld</button></li>
                    <li className="flex-1"><button onClick= {HomeButtonOnclick} className="w-full h-20 hover:bg-gradient-to-b from-blue-500 to-blue-150 pl-3
                        font-customFont text-2xl">Home</button></li>
                    <li className="flex-1"><button onClick= {MenberButtonOnclick} className="w-full h-20 hover:bg-gradient-to-b from-blue-500 to-blue-150 pl-1
                        font-customFont text-2xl">Menber</button></li>
                    <li className="flex-1"><button onClick= {MusicButtonOnclick} className="w-full h-20 hover:bg-gradient-to-b from-blue-500 to-blue-150 pl-1
                        font-customFont text-2xl">Music</button></li>
                    <li className="flex-1"><button onClick= {LinkButtonOnclick} className="w-full h-20 hover:bg-gradient-to-b from-blue-500 to-blue-150 pl-1
                        font-customFont text-2xl">Link</button></li>
                    <li className="flex-1"><button onClick= {StaffButtonOnclick} className="w-full h-20 hover:bg-gradient-to-b from-blue-500 to-blue-150 pl-1
                        font-customFont text-2xl">Staff</button></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;