'use client';

import { NavbarStyle } from "@/app/utils/constantStyle";
import { AiOutlineMenu } from "react-icons/ai"
import { Avatar } from "../../features/Avatar/Avatar";
import { useCallback, useState } from "react";
import { MenuItems } from "./MenuItems";
import useRegisterModal from "@/app/hooks/useRegisterModal";
export const UserMenu = () => {
    const registerModal = useRegisterModal();
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value);
    }, []);

    return (
        <div className={NavbarStyle.userMenu.main}>
            <div className={NavbarStyle.userMenu.subStyle}>
                <div className={NavbarStyle.userMenu.yourHomeText} onClick={()=>{}}>
                    Airbnb your home
                </div>
                <div className={NavbarStyle.userMenu.userMenuBarIcon} onClick={toggleOpen}>
                    <AiOutlineMenu />
                    <div className={NavbarStyle.userMenu.avatarBlock}>
                        <Avatar/>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className={NavbarStyle.userMenu.menuItemsMain}>
                    <div className={NavbarStyle.userMenu.menuItems}>
                        <>
                            <MenuItems onClick={()=>{}} label="Login"/>
                            <MenuItems onClick={ registerModal.onOpen } label="Sign Up"/>
                        </>
                    </div>
                </div>
            )}
        </div>
    )
}