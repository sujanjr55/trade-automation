"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Zap, Sun, Moon, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { config } from "@/lib/config";
import { BookingModal } from "@/components/modals/BookingModal";
import Link from "next/link";

export function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-accent text-accent-foreground shadow-lg group-hover:scale-105 transition-transform">
              <Zap className="w-6 h-6 fill-current" />
            </div>
            <span className="text-xl font-bold tracking-tight text-foreground hidden sm:inline-block">
              TradeAutomation <span className="text-accent">AI</span>
            </span>
          </Link>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#calculator" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Calculated Loss</Link>
            <Link href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">How It Works</Link>
            <Link href="#demos" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Demos</Link>
            <Link href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Pricing</Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            <a href={`tel:${config.phone.replace(/[^0-9]/g, '')}`} className="hidden lg:flex items-center gap-2 text-sm font-bold text-foreground hover:text-accent transition-colors">
              <Phone className="w-4 h-4" />
              {config.phone}
            </a>

            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </Button>
            )}

            <Button size="sm" onClick={() => setIsModalOpen(true)} className="sm:hidden">
              Book Demo
            </Button>
            <Button size="default" onClick={() => setIsModalOpen(true)} className="hidden sm:inline-flex shadow-lg shadow-accent/20">
              Book 10-Min Demo
            </Button>
          </div>
        </div>
      </header>

      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
