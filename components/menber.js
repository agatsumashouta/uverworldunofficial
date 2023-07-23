import React, { useState } from "react";
import ReactDOM from "react-dom";
import Modal from "./modal";

const Example = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <div>
            <section id='Menber' className='m-5'>
                <h2 className='font-customFont text-4xl'>Menber</h2>
                <button onClick={openModal} className='font-customFont text-xl m-2'>TAKUYA∞</button>
                <button onClick={openModal} className='font-customFont text-xl m-2'>AKIRA</button>
                <button onClick={openModal} className='font-customFont text-xl m-2'>KATSUYA</button>
                <button onClick={openModal} className='font-customFont text-xl m-2'>NOBUTO</button>
                <button onClick={openModal} className='font-customFont text-xl m-2'>SHINTARO</button>
                <button onClick={openModal} className='font-customFont text-xl m-2'>SEIKA</button>
            </section>


            <Modal isOpen={isOpen} onClose={closeModal}>
                <h2 className='font-customFont text-xl'>Modal Content</h2>
                <p className='font-customFont text-xl'>aaa</p>
            </Modal>
        </div>
    );
};

export default Example;