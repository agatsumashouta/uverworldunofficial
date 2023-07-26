import React, { useState } from "react";
import ReactDOM from "react-dom";
import Modal from "./modal";

const Example = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedMember, setSelectedMember] = useState(null);
    const [selectedDescription, setSelectedDescription] = useState(null);
    const [selectedBirthDate, setSelectedBirthDate] = useState(null);


    const openModal = (member,description,birthdate) => {
        setIsOpen(true);
        setSelectedMember(member);
        setSelectedDescription(description);
        setSelectedBirthDate(birthdate);

    };
    const closeModal = () => {
        setIsOpen(false);
        setSelectedMember(null);
        setSelectedDescription(null);
        setSelectedBirthDate(null);
    };
    const memberDescriptions = {
        "TAKUYA∞": "Vo.",
        "AKIRA": "Gt.",
        "KATSUYA": "Gt.",
        "NOBUTO" : "Ba.",
        "SHINTARO" : "Dr.",
        "SEIKA" : "Sax.",
      };
      const birthDate = {
        "TAKUYA∞": "BirthDate: Dec.21",
        "AKIRA": "BirthDate: Mar.8",
        "KATSUYA": "BirthDate: Feb.22",
        "NOBUTO" : "BirthDate: Feb.14",
        "SHINTARO" : "BirthDate: Nov.5",
        "SEIKA" : "BirthDate: Sep.25",
      };

    return (
        <div>
            <section id='Menber' className='m-5'>
                <h2 className='font-customFont1 text-4xl'>Menber</h2>
                <button onClick={() => openModal("TAKUYA∞",memberDescriptions["TAKUYA∞"],birthDate["TAKUYA∞"])} className='font-customFont1 text-xl m-2'>TAKUYA∞</button>
                <button onClick={() => openModal("AKIRA",memberDescriptions["AKIRA"],birthDate["AKIRA"])} className='font-customFont1 text-xl m-2'>AKIRA</button>
                <button onClick={() => openModal("KATSUYA",memberDescriptions["KATSUYA"],birthDate["KATSUYA"])} className='font-customFont1 text-xl m-2'>KATSUYA</button>
                <button onClick={() => openModal("NOBUTO",memberDescriptions["NOBUTO"],birthDate["NOBUTO"])} className='font-customFont1 text-xl m-2'>NOBUTO</button>
                <button onClick={() => openModal("SHINTARO",memberDescriptions["SHINTARO"],birthDate["SHINTARO"])} className='font-customFont1 text-xl m-2'>SHINTARO</button>
                <button onClick={() => openModal("SEIKA",memberDescriptions["SEIKA"],birthDate["SEIKA"])} className='font-customFont1 text-xl m-2'>SEIKA</button>
            </section>


            {selectedMember && (
                <Modal isOpen={isOpen} onClose={closeModal}>
                    <div >
                        <div className="fixed top-0 left-0 flex w-screen h-screen justify-center items-center bg-myColor4" onClick={closeModal}>
                            <div className="w-5/6  lg:w-1/2 bg-white h-3/4">
                                <img src="./images/enigmasis.jpg" className=" w-full h-3/5 lg:w-3/5 lg:h-3/5 "></img>
                                <p className="font-customFont1 text-3xl m-2">{selectedMember}</p>
                                <p className="font-customFont1 text-xl m-2">{selectedDescription}</p>
                                <p className="font-customFont1 text-xl m-2">{selectedBirthDate}</p>
                            </div>
                        </div>
                    </div>
                </Modal>
            )}

        </div>
    );
};

export default Example;