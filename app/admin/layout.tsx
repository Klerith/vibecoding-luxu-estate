import { type ReactNode } from 'react';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';

export default async function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  return (
    <div className="bg-clear-day text-nordic font-display min-h-screen flex flex-col antialiased">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white border-b border-nordic/5 px-4 sm:px-6 lg:px-8 backdrop-blur-md bg-opacity-90">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-16">
          <div className="flex items-center gap-12">
            <Link href="/" className="shrink-0 flex items-center gap-2">
              <span className="material-icons text-mosque text-2xl">
                apartment
              </span>
              <span className="font-bold text-lg tracking-tight text-nordic">
                LuxeEstate
              </span>
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link
                href="/admin"
                className="text-nordic/60 hover:text-mosque px-1 py-2 text-sm font-medium transition-colors"
              >
                Dashboard
              </Link>
              <Link
                href="/admin/properties"
                className="text-nordic/60 hover:text-mosque px-1 py-2 text-sm font-medium transition-colors"
              >
                Properties
              </Link>
              <Link
                href="/admin/users"
                className="text-nordic/60 hover:text-mosque px-1 py-2 text-sm font-medium transition-colors"
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
            <div className="flex items-center gap-3 pl-4 border-l border-nordic/10">
              <div className="hidden sm:flex flex-col items-end">
                <span className="text-sm font-semibold text-nordic">
                  {user.email}
                </span>
                <span className="text-xs text-nordic/60">Administrator</span>
              </div>
              <div className="h-8 w-8 rounded-full bg-nordic/10 flex items-center justify-center overflow-hidden border border-nordic/10">
                <span className="material-icons text-nordic/60 text-lg">
                  person
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <div className="grow flex flex-col w-full">{children}</div>

      {/* Footer */}
      <footer className="mt-auto border-t border-nordic/5 bg-clear-day py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <p className="text-center text-sm text-nordic/60 w-full md:text-left md:w-auto">
            © {new Date().getFullYear()} LuxeEstate Properties. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
