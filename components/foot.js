import Image from 'next/image';

export default function Footer() {
    return (
        <div className="bg-black text-white p-10 flex flex-col items-center mt-auto text-sm">
            <Image src='/images/weblogo.png' width={200} height={200} />
            <div className='mt-5'>thegunnphysicsclub@gmail.com</div>
            <div>©{new Date().getFullYear()}</div>
        </div>
    )
}