'use client';

import Image from 'next/image';
import Link from 'next/link';

import { usePathname } from 'next/navigation';
import logoWhite from '../../../public/images/sidebarLogo.svg';
// import dashboardGrp from '../../../public/images/dashboardGrp.svg';
// import profileGrp from '../../../public/images/profileGrp.svg';
// import ticketmanagementgrp from '../../../public/images/ticketManagementGrp.svg';
import circle from '../../../public/images/circle.svg';
import Ellipse from '../../../public/images/Ellipse.svg';
import { useEffect, useState } from 'react';
const PassSidebar = () => {
    const pathname = usePathname();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true); // Component is mounted on client side
        return () => {
            setIsMounted(false); // Component is unmounted
        };
    }, []);

    const passSidebarRoutes = ['/FirstPassword', '/AccountDetails'];

    if (!isMounted) {
        return null; // Render nothing until component is mounted on client side
    }



    // Define the paths where you want to show PassSidebar
  

    return (
        <div className="flex flex-col gap-10 w-[20%] bg-[#2A2C3E] h-screen p-8 m-auto">
            <div className='flex justify-center items-center'>
                <Image 
                   src={logoWhite}
                    alt="logo"
                    height={80}
                    width={150}
                />
            </div>

            <div className='flex flex-col gap-5'>
                {passSidebarRoutes.includes(pathname) && (
                    <>
                        <div className='flex gap-3 text-white pt-3 pb-3 pl-4 w-[90%] rounded-md hover:bg-[#5027D9]'>
                            <Image src={circle} alt="reset password"/>
                            <Link href="/FirstPassword">Reset Password</Link>
                        
                        </div>
                        <div className='flex gap-3 text-white pt-3 pb-3 pl-4 w-[90%] rounded-md hover:bg-[#5027D9]'>
                            <Image src={circle} alt="change password"/>
                            <Link href="/AccountDetails">Enter Account details</Link>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default PassSidebar;