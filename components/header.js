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
            <nav>
                <ul className="flex">
                    <li><button onClick= {HomeButtonOnclick} className="hover:bg-gradient-to-b from-blue-500 to-blue-150 pl-3">Home</button></li>
                    <li><button onClick= {MenberButtonOnclick} className="hover:bg-gradient-to-b from-blue-500 to-blue-150 pl-1">Menber</button></li>
                    <li><button onClick= {MusicButtonOnclick} className="hover:bg-gradient-to-b from-blue-500 to-blue-150 pl-1">Music</button></li>
                    <li><button onClick= {LinkButtonOnclick} className="hover:bg-gradient-to-b from-blue-500 to-blue-150 pl-1">Link</button></li>
                    <li><button onClick= {StaffButtonOnclick} className="hover:bg-gradient-to-b from-blue-500 to-blue-150 pl-1">Staff</button></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;