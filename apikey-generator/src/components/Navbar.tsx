import Link from 'next/link'
import { buttonVarients } from '@/components/ui/Button'
import SignInButton from '@/components/SignInButton'
import SignOutButton from '@/components/SignOutButton'
import { useEffect, useState } from 'react'
import { Session } from 'inspector'

const Navbar = ({}) => {
  const [session, setSession] = useState<Session | any>();

  useEffect(() => {
    async function fetchSession() {
      try {
        const response = await fetch('/api/session');
        const data = await response.json();
        setSession(data.session);
      } catch (error) {
        console.error(error);
      }
    }

    fetchSession();
  }, []);
  return (
    <div className='fixed backdrop-blur-sm bg-white/75 dark:bg-slate-900 z-50 top-0 left-0 right-0 height-20 py-2 px-10 border-b border-slate-300 dark:border-slate-700 shadow-sm flex items-center justify-between'>
      <div className='container max-w-7xl mx-auto w-full flex justify-between items-center'>
        <Link href="/" className={buttonVarients({variant: "link"})}>
          api generator 5.0
        </Link>
        <div className='md:hidden'>
          {/* <ThemeToggle /> */}
        </div>

        <div className='hidden md:flex gap-4'>
          {/* <ThemeToggle /> */}
          <Link 
            href="/"
            className={buttonVarients({variant: "ghost"})}
          >
            Documentation
          </Link>

          {session ? 
            <>
              <Link
                href="/dashboard"
                className={buttonVarients({ variant: 'ghost' })}
              >
                Dashboard
              </Link>
              <SignOutButton />
            </> 
          : 
            <SignInButton />
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar
