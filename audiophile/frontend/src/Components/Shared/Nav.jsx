import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {

  const [nav, setNav] = useState(false)

  // controls opening and closing of navbar
  function handleNav() {
    setNav(!nav)
  }

  // closes mobile nav if it is still open and screen width larger than 768px
  useEffect(() => {
    const x = window.matchMedia("(max-width: 768px)")
    function closeNav(e) {
      setNav(false)
    }
    x.addEventListener("resize", closeNav)
    return () => x.removeEventListener("resize", closeNav)
  }, [])

  return (
    <nav className='px-6 py-8 text-white bg-cod-gray md:px-10 lg:px-0'>
      <div className='flex items-center justify-between max-w-6xl mx-auto'>
        <div className='flex items-center row gap-x-20 md:gap-x-10'>
          <div onClick={handleNav} className="block lg:hidden">
            <img src='/shared/tablet/icon-hamburger.svg'/>
          </div>
          <img src='/shared/desktop/logo.svg'/>
        </div>
        <div className='hidden tracking-[0.125rem] uppercase lg:flex gap-x-8 font-bold text-sm'>
          <Link>home</Link>
          <Link>headphones</Link>
          <Link>speakers</Link>
          <Link>earphones</Link>
        </div>
        <img src='/shared/desktop/icon-cart.svg'/>
      </div>
    </nav>
  )
}