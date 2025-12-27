import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import {
  Home,
  Menu,
  X,
  LayoutDashboard,
  Sparkles
} from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { to: '/', label: 'Home', icon: Home },
    { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  ]

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-sm border-b border-border/50 text-foreground">
        <div className="max-w-7xl mx-auto w-full px-2 sm:px-0 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden p-2 hover:bg-accent/50 rounded-xl transition-colors"
              aria-label="Open menu"
            >
              <Menu size={24} className="text-foreground" />
            </button>
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center font-black text-white">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="text-xl font-black tracking-tight hidden sm:block bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">Revio</span>
            </Link>
          </div>

          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-muted-foreground hover:text-foreground font-bold transition-colors px-4 py-2 rounded-lg hover:bg-accent/50"
                activeProps={{ className: 'text-emerald-600 font-black bg-emerald-50/50' }}
              >
                {item.label}
              </Link>
            ))}
            <Button 
              asChild 
              size="default"
              className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/95 hover:to-primary/85 shadow-[0_4px_16px_rgba(99,102,241,0.2)] hover:shadow-[0_6px_24px_rgba(99,102,241,0.3)]"
            >
              <Link to="/dashboard" className="flex items-center gap-2">
                <Sparkles size={16} />
                Launch App
              </Link>
            </Button>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-white text-foreground z-50 transform transition-transform duration-300 ease-in-out flex flex-col border-r border-border/50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-border/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center font-black text-white">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="text-xl font-black bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">Revio</span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-accent/50 rounded-xl transition-colors"
            aria-label="Close menu"
          >
            <X size={24} className="text-foreground" />
          </button>
        </div>

        <nav className="flex-1 p-6 flex flex-col gap-2">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 p-3 rounded-xl text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all mb-1 font-bold"
              activeProps={{
                className: 'flex items-center gap-3 p-3 rounded-xl bg-emerald-50/50 text-emerald-600 font-black transition-all mb-1',
              }}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="p-6 border-t border-border/50">
          <Button 
            asChild 
            size="default" 
            className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/95 hover:to-primary/85 shadow-[0_4px_16px_rgba(99,102,241,0.2)] hover:shadow-[0_6px_24px_rgba(99,102,241,0.3)]"
          >
            <Link to="/dashboard" className="flex items-center gap-2 justify-center">
              <Sparkles size={16} />
              Launch App
            </Link>
          </Button>
        </div>
      </aside>

      {/* Spacer to prevent content overlap */}
      <div className="h-[72px]"></div>
    </>
  )
}
