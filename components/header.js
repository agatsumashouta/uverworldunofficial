import React from "react";
import '../styles/globals.css';

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
    return (
        <header>
            <h1 className="rounded-full font-mono font-bold text-7xl">UVERworld非公式ファンサイト</h1>
            <nav>
                <ul className="flex">
                    <li><button onClick= {HomeButtonOnclick} className="w-50 h-20 hover:bg-gradient-to-b from-blue-500 to-blue-150 pl-3">Home</button></li>
                    <li><button onClick= {MenberButtonOnclick} className="w-50 h-20 hover:bg-gradient-to-b from-blue-500 to-blue-150 pl-1">Menber</button></li>
                    <li><button onClick= {MusicButtonOnclick} className="w-50 h-20 hover:bg-gradient-to-b from-blue-500 to-blue-150 pl-1">Music</button></li>
                    <li><button onClick= {LinkButtonOnclick} className="w-50 h-20 hover:bg-gradient-to-b from-blue-500 to-blue-150 pl-1">Link</button></li>
                    <li><button onClick= {StaffButtonOnclick} className="w-50 h-20 hover:bg-gradient-to-b from-blue-500 to-blue-150 pl-1">Staff</button></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;