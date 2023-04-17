'use client';

import { RegisterStyle } from "@/app/utils/constantStyle";

interface HeadingProps {
    title: string;
    subtitle?: string;
    center?: boolean;
}
export const Heading: React.FC<HeadingProps> = ({
    title,
    subtitle,
    center
}) => {
    return (
        <div className={center ? 'text-center' : 'text-start'}>
            <div className={RegisterStyle.headingStyle.title}>
                {title}
            </div>
            <div className={RegisterStyle.headingStyle.subtitle}>
                {subtitle}
            </div>
        </div>
    )
}