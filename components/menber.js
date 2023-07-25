import React, { useState } from "react";
import ReactDOM from "react-dom";
import Modal from "./modal";

const Example = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedMember, setSelectedMember] = useState(null);
    const [selectedDescription, setSelectedDescription] = useState(null);


    const openModal = (member,description) => {
        setIsOpen(true);
        setSelectedMember(member);
        setSelectedDescription(description);
    };
    const closeModal = () => {
        setIsOpen(false);
        setSelectedMember(null);
        setSelectedDescription(null);
    };
    const memberDescriptions = {
        "TAKUYA∞": "TAKUYA∞の説明",
        "AKIRA": "AKIRAの説明",
        "KATSUYA": "KATSUYAの説明",
        "NOBUTO" : "NOBUTOの説明",
        "SHINTARO" : "SHINTAROの説明",
        "SEIKA" : "SEIKAの説明",
      };

    return (
        <div>
            <section id='Menber' className='m-5'>
                <h2 className='font-customFont text-4xl'>Menber</h2>
                <button onClick={() => openModal("TAKUYA∞",memberDescriptions["TAKUYA∞"])} className='font-customFont text-xl m-2'>TAKUYA∞</button>
                <button onClick={() => openModal("AKIRA",memberDescriptions["AKIRA"])} className='font-customFont text-xl m-2'>AKIRA</button>
                <button onClick={() => openModal("KATSUYA",memberDescriptions["KATSUYA"])} className='font-customFont text-xl m-2'>KATSUYA</button>
                <button onClick={() => openModal("NOBUTO",memberDescriptions["NOBUTO"])} className='font-customFont text-xl m-2'>NOBUTO</button>
                <button onClick={() => openModal("SHINTARO",memberDescriptions["SHINTARO"])} className='font-customFont text-xl m-2'>SHINTARO</button>
                <button onClick={() => openModal("SEIKA",memberDescriptions["SEIKA"])} className='font-customFont text-xl m-2'>SEIKA</button>
            </section>


            {selectedMember && (
                <Modal isOpen={isOpen} onClose={closeModal}>
                    <div >
                        <div className="fixed top-0 left-0 flex w-screen h-screen justify-center items-center bg-myColor4" onClick={closeModal}>
                            <div className="w-5/6 bg-white h-3/4">
                                <img src="./images/enigmasis.jpg" className=" w-2/5 h-3/5"></img>
                                <p className="font-customFont text-3xl m-2">{selectedMember}</p>
                                <p className="font-customFont text-xl m-2">{selectedDescription}</p>
                            </div>
                        </div>
                    </div>
                </Modal>
            )}

        </div>
    );
};

export default Example;