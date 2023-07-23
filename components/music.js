import React from "react";

const Music = () => {

    return (
        <div className="overflow-x-auto">
            <section id='Music' className='m-5'>
                <h2 className='font-customFont text-4xl'>Music</h2>
                <div className='flex w-full'>
                    <figure>
                        <iframe width="200" height="100" src="https://www.youtube.com/embed/q3tvnCbFbo8" title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='m-1'></iframe>
                        <figcaption>FINALIST</figcaption>
                    </figure>

                    <figure>
                        <iframe width="200" height="100" src="https://www.youtube.com/embed/lJ8njmZjTMU" title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='m-1 '></iframe>
                        <figcaption>VICTOSPIN</figcaption>
                    </figure>
                    
                    <figure>
                        <iframe width="200" height="100" src="https://www.youtube.com/embed/KDJ9fv9EQys" title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='m-1 '></iframe>
                        <figcaption>ENCORE AGAIN</figcaption>
                    </figure>
                    
                </div>
            </section>
        </div>
    );
};

export default Music;