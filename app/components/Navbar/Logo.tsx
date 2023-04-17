'use client';

import { NavbarStyle } from "@/app/utils/constantStyle";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const Logo = () => {
    const router = useRouter();
    return(
        <Image
            alt="Logo"
            className={NavbarStyle.logoStyle.logo}
            height="100"
            width="100"
            src="/images/logo.png"
        />
    )
}