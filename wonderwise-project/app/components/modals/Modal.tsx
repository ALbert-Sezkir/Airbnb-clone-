'use client'

import {useCallback, useEffect, useState} from 'react';

interface ModalProps { 
    isOpen?: boolean;
    onClose: () => void;
    onSubmit: () => void;
    title?: string; 
    body?: React.ReactElement;
    fotter?: React.ReactElement;
    actionLabel?: string;
    disabled?: boolean;
    secondaryAction?:() => void;
    secondaryLabel?: string;

}



const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    onSubmit,
    title,
    body,
    fotter,
    actionLabel,
    disabled,
    secondaryAction,
    secondaryLabel,
}) => {
    const [showModal, setShowModal] = useState(isOpen);

    useEffect(() => { // när isOpen ändras, uppdatera showmodal
        setShowModal(isOpen);

    }, [isOpen]); 

    const handleClose = useCallback(()=> {
        if (disabled) {
            return;
        }

        setShowModal(false);
        setTimeout(() => {
        }, 300);
        onClose();    
    }, [disabled, onClose]);

    const handleSubmit = useCallback(() => {
        if (disabled) {
            return;
        }
     
            onSubmit();
        }, [disabled, onSubmit]);
    }

    const handleSecondaryAction = useCallback(() => { 
        if(disabled || !secondaryAction) {
            return;
        }
        secondaryAction();
    }, [disabled, secondaryAction]);

    if(!isOpen) {
        return null;

    }

   

return (
    <div></div>
)

}

export default Modal;