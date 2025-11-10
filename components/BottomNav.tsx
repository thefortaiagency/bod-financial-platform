'use client'

import Link from 'next/link'
import { Home, Briefcase, Cpu, UserCircle } from 'lucide-react'

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-secondary shadow-2xl z-50">
      <div className="flex justify-around items-center py-3 px-4 max-w-screen-xl mx-auto">
        <Link
          href="/"
          className="flex flex-col items-center space-y-1 text-primary hover:text-bod-blue transition-colors group"
        >
          <Home className="w-6 h-6 group-hover:scale-110 transition-transform" />
          <span className="text-xs font-medium">Home</span>
        </Link>

        <Link
          href="/services"
          className="flex flex-col items-center space-y-1 text-primary hover:text-bod-blue transition-colors group"
        >
          <Briefcase className="w-6 h-6 group-hover:scale-110 transition-transform" />
          <span className="text-xs font-medium">Services</span>
        </Link>

        <Link
          href="/technology"
          className="flex flex-col items-center space-y-1 text-primary hover:text-bod-blue transition-colors group"
        >
          <Cpu className="w-6 h-6 group-hover:scale-110 transition-transform" />
          <span className="text-xs font-medium">Technology</span>
        </Link>

        <Link
          href="/about"
          className="flex flex-col items-center space-y-1 text-primary hover:text-bod-blue transition-colors group"
        >
          <UserCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
          <span className="text-xs font-medium">About</span>
        </Link>
      </div>
    </nav>
  )
}
