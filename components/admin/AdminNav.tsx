'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { type User } from '@supabase/supabase-js';
import Image from 'next/image';
import { createClient } from '@/lib/supabase/client';

interface AdminNavProps {
  user: User;
}

export default function AdminNav({ user }: AdminNavProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const supabase = createClient();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/login');
    router.refresh();
  };

  const isActive = (path: string) => {
    return pathname === path
      ? 'text-mosque font-bold border-b-2 border-mosque'
      : 'text-nordic/60 hover:text-mosque cursor-pointer border-b-2 border-transparent';
  };

  const getProfileInitial = () => {
    return user.email ? user.email.charAt(0).toUpperCase() : 'U';
  };

  const avatarUrl =
    user.user_metadata?.avatar_url || user.user_metadata?.picture;

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-nordic/5 px-4 sm:px-6 lg:px-8 backdrop-blur-md bg-opacity-90">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16">
        <div className="flex items-center gap-12 h-full">
          <Link href="/" className="shrink-0 flex items-center gap-2">
            <span className="material-icons text-mosque text-2xl">
              apartment
            </span>
            <span className="font-bold text-lg tracking-tight text-nordic">
              LuxeEstate
            </span>
          </Link>
          <div className="hidden md:flex space-x-8 h-full">
            <Link
              href="/admin"
              className={`flex items-center px-1 text-sm transition-colors h-full ${isActive('/admin')}`}
            >
              Dashboard
            </Link>
            <Link
              href="/admin/properties"
              className={`flex items-center px-1 text-sm transition-colors h-full ${isActive('/admin/properties')}`}
            >
              Properties
            </Link>
            <Link
              href="/admin/users"
              className={`flex items-center px-1 text-sm transition-colors h-full ${isActive('/admin/users')}`}
            >
              Users
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <button className="text-nordic/60 hover:text-mosque transition-colors relative">
            <span className="material-icons text-xl">notifications</span>
            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
          </button>
          <div
            className="flex items-center gap-3 pl-4 border-l border-nordic/10 relative"
            ref={dropdownRef}
          >
            <div className="hidden sm:flex flex-col items-end">
              <span className="text-sm font-semibold text-nordic">
                {user.email}
              </span>
              <span className="text-xs text-nordic/60">Administrator</span>
            </div>

            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="focus:outline-none transition-transform hover:scale-105 rounded-full ring-2 ring-transparent hover:ring-mosque/30"
              aria-expanded={isDropdownOpen}
              aria-haspopup="true"
            >
              {avatarUrl ? (
                <div className="h-8 w-8 rounded-full flex items-center justify-center overflow-hidden border border-nordic/10 relative">
                  <Image
                    src={avatarUrl}
                    alt={user.email || 'Admin'}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="h-8 w-8 rounded-full bg-nordic/10 flex items-center justify-center overflow-hidden border border-nordic/10">
                  <span className="text-sm font-bold text-nordic/60">
                    {getProfileInitial()}
                  </span>
                </div>
              )}
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 border border-nordic/10 z-50">
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center gap-2 transition-colors"
                >
                  <span className="material-icons text-sm">logout</span>
                  Cerrar sesión
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
