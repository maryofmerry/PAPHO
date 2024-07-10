import Image from 'next/image';

export default function Footer() {
    return (
        <div className="bg-black text-white p-10 flex flex-col items-center mt-auto text-sm">
            <Image src='/logo-dark.png' width={193} height={70} />
            <div className='mt-5'>palygunnmathcamp@gmail.com</div>
            <div>©{new Date().getFullYear()}</div>
        </div>
    )
}