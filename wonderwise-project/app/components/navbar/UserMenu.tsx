'use client'

import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import { useCallback, useState } from "react";
import MenyItem from "./MenuItem";

const UserMenu = () => { 

    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value ); }, []); 
    

    return (
        <div className ='relative '> 
        <div className = 'flex flex-row items-center gap-3'> 
            <div 
            onClick ={  () => {}   } 
            className='hidden px-4 py-3 text-sm font-semibold transition rounded-full cursor-pointer md:block hover:bg-neutral-100'
            > 
            WanderWise Your Home

            </div>
            <div 
            onClick ={toggleOpen} 
            className='
            p-4
            md:py-1
            md:px-2
            border-[1px]
            border-netural-200
            flex
            flex-row
            items-center
            gap-3
            rounded-full
            cursor-pointer
            hover:shadow-md 
            transition

            '
            >
                <AiOutlineMenu/> 
                <div className='hidden md:block'>
                    <Avatar/> 
                </div>
            </div>
        </div>
        {isOpen && (
            <div 
            className ='
            absolute
            rounded-lg
            shadow-md
            w-[40vh]
            md:w-3/4
            bg-white
            overflow-hidden
            right-0
            top-12
            text-sm
            '
            >
                <div className='flex flex-col cursor-pointer'>
                    <>
                    <MenyItem
                    onClick={() => {}}
                    label='Login'
                    
                    />
                     <MenyItem
                    onClick={() => {}}
                    label='Sign up'
                    
                    />
                    </>
                

                </div>

            </div>
        )}


        </div>

    )
}

export default UserMenu