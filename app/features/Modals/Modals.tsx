'use client';

import { Button } from "@/app/features/Button/Button";
import { ModalsStyles } from "@/app/utils/constantStyle";
import { useCallback, useEffect, useState } from "react";

import { IoMdClose } from 'react-icons/io'

interface ModalProps {
    isOpen?: boolean;
    onClose: () => void;
    onSubmit: () => void;
    title?: string;
    body?: React.ReactElement;
    footer?: React.ReactElement;
    actionLabel: string;
    disabled?: boolean;
    secondaryAction?: () => void;
    secondaryActionLabel?: string;
}

export const Modals: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    onSubmit,
    title,
    body,
    footer,
    actionLabel,
    disabled,
    secondaryAction,
    secondaryActionLabel
}) => {

    const [showModal, setShowModal] = useState(isOpen);

    useEffect(() =>{
        setShowModal(isOpen)
    }, [isOpen]);

    const handleClose = useCallback(() => {

        if(disabled) {
            return;
        }
        setShowModal(false);

        setTimeout(() => {
            onClose();
        }, 300);

    }, [disabled, onClose]);

    const handleSubmit = useCallback(() => {
        if(disabled) {
            return;
        }

        onSubmit();

    }, [disabled, onSubmit]);

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
        <>
            <div className={ModalsStyles.main}>
                <div className={ModalsStyles.subMain}>
                    {/* CONTENT MODAL */}
                    <div className={`
                        ${ModalsStyles.modalsStyle.contentMain}
                        ${showModal ? 'translate-x-0' : 'translate-y-full'}
                        ${showModal ? 'opacity-100' : 'opacity-0'}
                    `}>
                        <div className={ModalsStyles.modalsStyle.headerMain}>
                            {/* MODAL HEADER */}
                            <div className={ModalsStyles.modalsStyle.headerModal.main}>
                                <button onClick={handleClose} className={ModalsStyles.modalsStyle.headerModal.subMain}>
                                    <IoMdClose size={18} />
                                </button>
                                <div className={ModalsStyles.modalsStyle.headerModal.titleModal}>
                                    {title}
                                </div>
                            </div>
                            {/* BODY */}
                            <div className={ModalsStyles.modalsStyle.modalBody.mainBlock}>
                                {body}
                            </div>
                            {/* FOOTER */}
                            <div className={ModalsStyles.modalsStyle.modalFooter.mainFooter}>
                                <div className={ModalsStyles.modalsStyle.modalFooter.buttonFooterBlock}>
                                    {secondaryAction && secondaryActionLabel && (
                                        <Button 
                                            disabled={disabled}
                                            label={secondaryActionLabel}
                                            onClick={handleSecondaryAction}
                                        />
                                    )}
                                    <Button 
                                        disabled={disabled}
                                        label={actionLabel}
                                        onClick={handleSubmit}
                                    />
                                </div>
                                {footer}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}