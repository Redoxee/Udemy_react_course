import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
    const [showModal , setShowModal] = useState(false);

    const handleOpenModal = ()=> {
        setShowModal(true);
    }

    const handleCloseModal = () =>{
        setShowModal(false);
    }

    const actionBar = <div><Button primary onClick={handleCloseModal}>Sure</Button></div>
    const modal = <Modal onClose={handleCloseModal} actionBar={actionBar}>
        <p>Here is an important message</p>
    </Modal>;

    return <div>
        <Button primary onClick={handleOpenModal}>Open Modal</Button>
        {showModal && modal}
    </div>
}

export default ModalPage;