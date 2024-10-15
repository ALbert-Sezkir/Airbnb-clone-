'use client'
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";

const UserMenu = () => { 
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
            onClick ={  () => {}   } 
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


        </div>

    )
}

export default UserMenu