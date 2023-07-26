import React from "react";

const Links = () => {

    return (
        <div>
            <section id='Link' className='m-5'>
                <h2 className='font-customFont1 text-4xl'>Links</h2>
                <div className='flex justify-between lg:justify-normal'>
                    <a href='https://www.youtube.com/@uverworldSMEJ/featured'>
                        <figure>
                            <img src='./images/YouTube.png' alt='UVERworld Official YouTube Channel' className='flex-1 m-2 w-20 lg:w-50 lg:h-50' />
                            <figcaption className="text-xs">公式Youtube</figcaption>
                        </figure>
                    </a>
                    <a href='https://www.instagram.com/uverworld_official'>
                        <figure>
                            <img src='./images/Instagram.png' alt='uverworld_official_instagram' className='flex-1 m-2 w-20 lg:w-50 lg:h-50' />
                            <figcaption className="text-xs">公式instagram</figcaption>
                        </figure>
                    </a>
                    <a href="https://twitter.com/uverworld_dr2">
                        <figure>
                            <img src="./images/Twitter_logo.png" alt="uverworld_officialtwitter" className='flex-1 m-2 w-20 lg:w-50 lg:h-50'></img>
                            <figcaption className="text-xs">公式Twitter</figcaption>
                        </figure>
                    </a>
                </div>
                <div className="flex justify-between lg:justify-normal">
                    <a href='https://uw-takuya-rooms.fanpla.jp'>
                        <figure>
                            <img src='./images/takuyanotukurikata.jpg' alt='TAKUYA∞の創り方' className='flex-1 m-2 w-20 lg:w-50 lg:h-50'></img>
                            <figcaption className="text-xs">TAKUYA∞の創り方</figcaption>
                        </figure>
                    </a>
                    <a href="https://www.uverworld.jp">
                        <figure>
                            <img src="./images/uverworld_logo.png" alt="uverworld_officialsite" className='flex-1 m-2 w-20 lg:w-50 lg:h-50'></img>
                            <figcaption className="text-xs">公式サイト</figcaption>
                        </figure>
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Links;