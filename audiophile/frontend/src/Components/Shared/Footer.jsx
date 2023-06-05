import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="flex flex-col items-center px-6 pb-10 text-white bg-cod-gray gap-y-12">
      <div className="h-1 w-28 bg-raw-siena"></div>
      <img src="/shared/desktop/logo.svg" alt="logo" />
      <div className='tracking-[0.125rem] uppercase flex flex-col gap-y-4 font-bold text-sm items-center'>
        <Link>home</Link>
        <Link>headphones</Link>
        <Link>speakers</Link>
        <Link>earphones</Link>
      </div>
      <p className="text-center opacity-50 leading-[1.5625rem]">
        Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
      </p>
      <p className="text-center opacity-50 leading-[1.5625rem] font-bold">
        Copyright 2021. All Rights Reserved
      </p>
      <div className="flex gap-x-4">
        <img src="/shared/desktop/icon-facebook.svg" alt="facebook logo" />
        <img src="/shared/desktop/icon-twitter.svg" alt="facebook logo" />
        <img src="/shared/desktop/icon-instagram.svg" alt="facebook logo" />
      </div>
    </footer>
  )
}