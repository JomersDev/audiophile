import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Nav () {

    const [nav, setNav] = useState(false)

    {/* opens and closes the mobile nav menu*/}
    function handleNav() {
      console.log('click')
        setNav(!nav)
    }

    {/* This closes the mobile nav if it is still open once the screen width is larger than 768px */}
    useEffect(() => {
        const x = window.matchMedia("(max-width: 768px)")
        function myFunction(e) {
          setNav(false);
        };
        x.addListener(myFunction)
        return () => x.removeListener(myFunction);
      }, []);


    return (
        <nav className='flex items-center justify-between max-w-6xl px-6 py-8 mx-auto text-white bg-cod-gray md:px-10 lg:px-0'>

            <div onClick={handleNav} className="block md:hidden">
                <img src='/shared/tablet/icon-hamburger.svg'/>
            </div>

            <Link to="/">
                <img src='/shared/desktop/logo.svg'/>
            </Link>

            {/* desktop nav menu */}
            <ul className="hidden md:flex tracking-[0.125rem] uppercase lg:flex gap-x-8 font-bold text-sm">
                <li>
                   <Link>home</Link> 
                </li>
                <li>
                   <Link>headphones</Link>
                </li>
                <li>
                   <Link>speakers</Link>
                </li>
                <li>
                   <Link>earphones</Link>
                </li>
            </ul>

            <img src='/shared/desktop/icon-cart.svg'/>

            {/* Mobile nav menu */}
            {/* Clean up the way this class is written as alot of classes are written twice */}
            <ul className={nav ? 
                            'flex flex-col justify-between py-12 px-6 uppercase text-white text-2xl fixed bg-black left-0 top-[5.75rem] w-full h-60 ease-in-out duration-1000 z-50' 
                                : 
                            'flex flex-col justify-between py-12 px-6 uppercase text-white text-2xl fixed bg-black left-[-100%] top-[5.75rem] w-full h-60 ease-in-out duration-1000 z-50'}>
                <li>
                    <Link to="/about">Our Company</Link> 
                </li>
                <li>
                    <Link to="/locations">Locations</Link>
                </li>
                <li >
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}