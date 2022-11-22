import { useRouter } from "next/router";
import { Home, Search, Series, Trailer } from "../assets/AllSvg";
import React from "react";

const Menu = () => {
  const router = useRouter()

  return (
    <nav className="fixed bottom-0 flex w-full p-2 md:right-auto md:left-2 md:bottom-3 md:top-20 md:w-auto">
      <div className="flex w-full items-center justify-around rounded-3xl border-2 border-white px-10 py-4 md:flex-col md:justify-start md:space-x-0 md:space-y-12 md:rounded-tl-none md:rounded-bl-none md:border-l-0 md:px-6 md:py-10 md:pl-2">
        <Home
          className={`${router.pathname === '/' && 'text-blue'} h-6 w-6`}
          onClick={() => {
            router.push('/')
          }}
        />
        <Trailer
          className={`${
            router.pathname === '/trailers' && 'text-blue'
          } h-6 w-6`}
          onClick={() => {
            router.push('/trailers')
          }}
        />
        <Series
          className={`${router.pathname === '/series' && 'text-blue'} h-6 w-6`}
          onClick={() => {
            router.push('/series')
          }}
        />
        <Search
          className={`${router.pathname === '/search' && 'text-blue'} h-6 w-6`}
          onClick={() => {
            router.push('/search')
          }}
        />
      </div>
    </nav>
  )
};

export default Menu;
