
import { Button } from '@headlessui/react'
import Plus from '../../../public/images/Plus.svg'
import Image from 'next/image'

const ButtonPurple = () => {
    return (
        <div className='flex justify-end p-8'>
            <Button className="flex rounded bg-[#5027D9] py-2 px-4 text-sm text-white items-center gap-2">
                <Image
                src={Plus}
                alt="add"
                width={22}
                height={22}
                />
                New Ticket
                </Button>
        </div>
    )
}

export default ButtonPurple;