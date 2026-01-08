import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PawPrint, Heart, User } from 'lucide-react';
import { Button } from './Button';
import { ThemeSwitcher } from './ThemeSwitcher';
export function Navbar() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  // Mock auth state - in real app, this would come from auth context
  const isLoggedIn = true; // Change to false to see login button
  return <nav className="sticky top-0 z-50 border-b" style={{
    background: 'var(--color-card)',
    borderColor: 'var(--color-border)',
    boxShadow: 'var(--shadow-sm)'
  }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-2 rounded-xl group-hover:scale-110 transition-transform" style={{
            background: 'var(--color-primary)'
          }}>
              <PawPrint className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold" style={{
            color: 'var(--color-text)'
          }}>
              PetMate
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className={`text-sm font-medium transition-colors ${isActive('/') ? 'text-[var(--color-primary)]' : 'text-[var(--color-text)] hover:text-[var(--color-primary)]'}`}>
              Home
            </Link>
            <Link to="/search" className={`text-sm font-medium transition-colors ${isActive('/search') ? 'text-[var(--color-primary)]' : 'text-[var(--color-text)] hover:text-[var(--color-primary)]'}`}>
              Browse Pets
            </Link>
            <Link to="/about" className={`text-sm font-medium transition-colors ${isActive('/about') ? 'text-[var(--color-primary)]' : 'text-[var(--color-text)] hover:text-[var(--color-primary)]'}`}>
              About
            </Link>
            <Link to="/donate">
              <Button variant="primary" size="sm">
                Donate
              </Button>
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <ThemeSwitcher />
            <Link to="/favourites">
              <button className="p-2 rounded-lg transition-all hover:scale-110" style={{
              background: isActive('/favourites') ? 'var(--color-surface)' : 'transparent'
            }} aria-label="View favourites">
                <Heart className="w-5 h-5" style={{
                color: 'var(--color-primary)',
                fill: isActive('/favourites') ? 'var(--color-primary)' : 'none'
              }} />
              </button>
            </Link>

            {isLoggedIn ? <Link to="/profile">
                <button className="p-2 rounded-lg transition-all hover:scale-110" style={{
              background: isActive('/profile') ? 'var(--color-primary)' : 'var(--color-surface)'
            }} aria-label="View profile">
                  <User className="w-5 h-5" style={{
                color: isActive('/profile') ? 'white' : 'var(--color-primary)'
              }} />
                </button>
              </Link> : <Link to="/login">
                <Button variant="outline" size="sm" icon={<User className="w-4 h-4" />}>
                  Sign In
                </Button>
              </Link>}
          </div>
        </div>
      </div>
    </nav>;
}