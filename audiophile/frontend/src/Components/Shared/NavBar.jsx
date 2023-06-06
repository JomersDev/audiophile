import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// components
import CategoryCard from "./CategoryCard";

export default function NavBar () {

  const [nav, setNav] = useState(false)
  const [scroll, setScroll] = useState(true)

  {/* opens and closes the mobile nav menu*/}
  function handleNav() {
    setNav(!nav)
    setScroll(!scroll)
    if (scroll === true) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'visible'
    }
  }

  {/* This closes the mobile nav if it is still open once the screen width is larger than 768px */}
  useEffect(() => {
      const x = window.matchMedia("(max-width: 1440px)")
      function myFunction(e) {
        setNav(false);
      };
      x.addListener(myFunction)
      return () => x.removeListener(myFunction);
    }, []);


  return (
    <nav className='px-6 py-8 text-white bg-cod-gray md:px-10'>
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <div className="flex items-center gap-x-20 md:gap-x-10">
          <div onClick={handleNav} className="block lg:hidden">
              <img src='/shared/tablet/icon-hamburger.svg'/>
          </div>
          <Link to="/">
              <img src='/shared/desktop/logo.svg'/>
          </Link>
        </div>

        {/* desktop nav menu */}
        <ul className="hidden tracking-[0.125rem] uppercase lg:flex gap-x-8 font-bold text-sm">
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
        <div className={`flex flex-col gap-y-4 pt-6  px-6 fixed overflow-y-scroll rounded-b-lg bg-white top-[5.5rem] w-full h-[45rem] ease-in-out duration-1000 z-50 ${nav ? "left-0" : "left-[-100%]"} `}>
          <CategoryCard category='headphones' image="/shared/desktop/image-category-thumbnail-headphones.png" />
          <CategoryCard category='speakers' image="/shared/desktop/image-category-thumbnail-speakers.png" />
          <CategoryCard category='earphones' image="/shared/desktop/image-category-thumbnail-earphones.png" />
        </div>
      </div>
    </nav>
  )
}
