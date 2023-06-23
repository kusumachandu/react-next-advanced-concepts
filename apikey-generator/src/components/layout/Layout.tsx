import { cn } from '@/lib/utils'
import { Inter } from 'next/font/google'
import Providers from '../Providers'
import Navbar from '../Navbar'

const inter = Inter({subsets: ['latin']})

export default function RootLayout({ children }: {children: React.ReactNode}) {
  return (
    <div lang='en' className={cn(
      'bg-white text-slate-900 antialiased', inter.className
    )}>
      <div className='min-h-screen bg-slate-50 dark:bg-slate-900 antialiased'>
        <Providers>
          <Navbar />
          <div className='pt-24'>
            {children}
          </div>
        </Providers>

        <div className='h-40 md:hidden' />
      </div>
    </div>
  )
}