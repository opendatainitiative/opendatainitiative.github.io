import Link from 'next/link'
import Image from 'next/image'
import { NavigationMenu, NavigationMenuList, NavigationMenuItem } from '@/app/components/ui/navigation-menu'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Work' },
  { href: '/resources', label: 'Resources' },
  { href: '/blog', label: 'Blog' },
  { href: '/contributing', label: 'Contributing' },
]

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-blue-900 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex h-24 items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className="h-12 w-48">
              <Image
                src="/logo.png"
                alt="Open Data Initiative"
                width={192}
                height={48}
                className="h-auto w-full"
                priority
              />
            </div>
          </Link>
          
          <NavigationMenu>
            <NavigationMenuList className="flex gap-6">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <Link href={item.href} className="text-white hover:text-white/80 px-4 py-2 rounded transition-colors">
                    {item.label}
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  )
} 