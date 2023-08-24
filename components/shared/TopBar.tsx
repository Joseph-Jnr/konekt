import { LogoutIcon } from '@/public/assets'
import { SignedIn, SignOutButton, OrganizationSwitcher } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { IconCirclesRelation } from '@tabler/icons-react'
//import { dark } from '@clerk/themes'

const TopBar = () => {
  const isUserLoggedIn = false

  return (
    <nav className='topbar'>
      <Link href='/' className='flex items-center gap-2'>
        <div className='logo text-purple-600'>
          <IconCirclesRelation size={40} />
        </div>
        <p className='text-heading3-bold text-light-1 max-xs:hidden'>Konekt</p>
      </Link>

      <div className='flex items-center gap-1'>
        <div className='block md:hidden'>
          <SignedIn>
            <SignOutButton>
              <div className='flex cursor-pointer'>
                <Image src={LogoutIcon} alt='logout' />
              </div>
            </SignOutButton>
          </SignedIn>
        </div>
        {/* 
        <OrganizationSwitcher
          appearance={{
            baseTheme: dark,
            elements: {
              organizationSwitcherTrigger: 'py-2 px-4',
            },
          }}
        /> */}
      </div>
    </nav>
  )
}

export default TopBar
