import { useRouter } from 'next/router'
import React from 'react'
import { AnimatePresence, motion as m } from 'framer-motion'
import Link from 'next/link'
import { Menu, X, Home, Search, Youtube, FileText } from 'react-feather'
import { useState } from 'react'

const MenuList = ({ children }) => {
  const router = useRouter()
  const [open, setOpen] = useState(false)

  const menuList = [
    {
      title: 'Home',
      route: '/',
      icon: <Home strokeWidth={2.5} size={32} />,
    },
    {
      title: 'Updates',
      route: '/update',
      icon: <FileText strokeWidth={2.5} size={32} />,
    },
    {
      title: 'Trailers',
      route: '/trailer',
      icon: <Youtube strokeWidth={2.5} size={32} />,
    },
    {
      title: 'Search',
      route: '/',
      icon: <Search strokeWidth={2.5} size={32} />,
    },
  ]

  return (
    <main>
      <nav className="flex items-center justify-between w-full h-20 px-6 text-4xl font-semibold text-black bg-opacity-50 bg-sec">
        <Link href="/">
          <p>Black Ticket</p>
        </Link>
        <Menu
          strokeWidth={3}
          size={34}
          onClick={() => {
            setOpen(true)
          }}
        />
      </nav>
      <AnimatePresence>
        {open && (
          <m.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100%' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-0 left-0 z-50 w-full h-full bg-sec bg-opacity-95"
          >
            <div className="flex justify-between w-full p-4 bg-sec bg-opacity-80">
              <p className="text-5xl font-semibold text-black font-pri">Menu</p>
              <X
                strokeWidth={3}
                size={42}
                onClick={() => {
                  setOpen(false)
                }}
              />
            </div>
            <div className="flex items-center justify-center w-full my-12">
              <ul
                className="space-y-10"
                onClick={() => {
                  setOpen(false)
                }}
              >
                {menuList.map((item, key) => {
                  return (
                    <m.li
                      key={key}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ delay: (key + 1) * 0.05 }}
                      className="flex items-center space-x-10 text-4xl font-semibold"
                    >
                      {item.icon}
                      <Link href={item.route}>{item.title}</Link>
                    </m.li>
                  )
                })}
              </ul>
            </div>
          </m.div>
        )}
      </AnimatePresence>
      <section>{children}</section>
    </main>
  )
}

export default MenuList
