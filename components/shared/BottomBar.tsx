'use client'

import { sidebarLinks } from '@/constants'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

const BottomBar = () => {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <section className='bottombar'>
      <div className='bottombar_container'>
        {sidebarLinks.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route

          let isCreatePostLink = ''
          if (link.route === '/create-post') {
            isCreatePostLink = link.route
          }

          return (
            <Link
              href={link.route}
              key={link.label}
              className={`bottombar_link ${
                isActive && 'leftsidebar_link_active'
              } ${isCreatePostLink && 'hidden'}`}
            >
              <Image src={link.imgURL} alt={link.label} />
              <p className='text-subtle-medium text-light-1 max-sm:hidden'>
                {link.label.split(/\s+/)[0]}
              </p>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

export default BottomBar
