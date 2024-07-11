import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import RegisterButton from './reg';

export default function NavBar () {
    const router = useRouter();

    return <>
        <nav className="hidden lg:flex items-center gap-[70px] p-[50px] h-[150px]">
            <Link href="/">
                <a>
                    <Image src="/images/weblogo.png" width={125} height={125} alt="Home" />
                </a>
            </Link>

            <div className={router.route === "/" ? 'underline decoration-8 nav-box' : 'nav-box'}>
                <Link href="/#sponsors">
                    <a>Sponsors</a>
                </Link>
            </div>

            <div className={router.route === "/format" ? 'border underline decoration-8 nav-box' : 'nav-box'}>
                <Link href="/format">Format</Link>
            </div>
            
            <div className={router.route === "/format" ? 'underline decoration-8 nav-box' : 'nav-box'}>
                <Link href="format/#schedule">Schedule</Link>
            </div>

            <div className={router.route === "/about" ? 'border underline decoration-8 nav-box' : 'nav-box'}>
                <Link href="/about">About us</Link>
            </div>
           
            <div className={router.route === "/about" ? 'underline decoration-8 nav-box' : 'nav-box'}>
                <Link href="about/#contact">Contact</Link>
            </div>
            <RegisterButton />
        </nav>

        <nav className="flex lg:hidden flex-col items-center m-5">
            <Link href="/">
                <a>
                    <Image src="/images/weblogo.png" width={125} height={125} alt="Home" />
                </a>
            </Link>

            <div className={router.route === "/home" ? 'underline decoration-8 nav-box' : 'nav-box'}>
                <a href="#sponsors">Sponsors</a>
            </div>
            
            <div className={router.route === "/format" ? 'border underline decoration-8 nav-box' : 'nav-box'}>
                <Link href="/format">Format</Link>
            </div>
            
            <div className={router.route === "/format" ? 'underline decoration-8 nav-box' : 'nav-box'}>
                <Link href="format/#schedule">Schedule</Link>
            </div>

            <div className={router.route === "/about" ? 'border underline decoration-8 nav-box' : 'nav-box'}>
                <Link href="/about">About us</Link>
            </div>
           
            <div className={router.route === "/about" ? 'underline decoration-8 nav-box' : 'nav-box'}>
                <Link href="about/#contact">Contact</Link>
            </div>
            <RegisterButton />
        </nav>
    </>
}
