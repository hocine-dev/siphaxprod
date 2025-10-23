"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-neutral-950/95 text-white shadow-lg shadow-black/20 backdrop-blur">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex h-full items-center">
            <Image
              src="/logo.png"
              alt="Logo Siphax Productions"
              width={44}
              height={44}
              className="h-[90%] w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
            <div
              className="hidden md:flex items-center gap-8"
            >
            <Link href="/artistes" className="text-lg font-bold text-white/90 transition-colors hover:text-white tracking-wide">
              Artistes
            </Link>
            <Link href="/billetterie" className="text-lg font-bold text-white/90 transition-colors hover:text-white tracking-wide">
              Billetterie
            </Link>
            <Link href="/contacts" className="text-lg font-bold text-white/90 transition-colors hover:text-white tracking-wide">
              Contacts
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:bg-white/10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10 bg-neutral-900/90 text-white">
            <div className="flex flex-col gap-4">
              <Link
                href="/artistes"
                className="text-sm font-medium py-2 text-white/80 transition-colors hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Artistes
              </Link>
              <Link
                href="/billetterie"
                className="text-sm font-medium py-2 text-white/80 transition-colors hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Billetterie
              </Link>
              <Link
                href="/contacts"
                className="text-sm font-medium py-2 text-white/80 transition-colors hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contacts
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
