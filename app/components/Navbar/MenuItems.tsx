'use client';

import { NavbarStyle } from "@/app/utils/constantStyle";

interface MenuItemsProps {
    onClick: () => void;
    label: string;
}
export const MenuItems: React.FC<MenuItemsProps> = ({
    onClick,
    label
}) => {
    return (
        <div onClick={onClick} className={NavbarStyle.userMenu.subMenuItems.main}>
            {label}
        </div>
    )
}