import { type ReactNode } from 'react';
import Link from 'next/link';
import { Home, Users, Building } from 'lucide-react';
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
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r">
        <div className="h-full flex flex-col pt-5 pb-4 overflow-y-auto">
          <div className="flex items-center shrink-0 px-4 mb-6">
            <span className="text-xl font-semibold text-gray-900">
              Admin Dashboard
            </span>
          </div>
          <nav className="mt-5 flex-1 px-2 space-y-1">
            <Link
              href="/admin/properties"
              className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            >
              <Building className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" />
              Properties
            </Link>
            <Link
              href="/admin/users"
              className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            >
              <Users className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" />
              Users & Roles
            </Link>
          </nav>
          <div className="mt-auto px-4 py-4 space-y-4">
            <div className="text-sm text-gray-500">
              Logged in as: <br />
              <span className="font-medium">{user.email}</span>
            </div>
            <Link
              href="/"
              className="group flex items-center text-sm font-medium text-gray-600 hover:text-gray-900"
            >
              <Home className="mr-3 h-5 w-5 text-gray-400" />
              Back to Site
            </Link>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto w-full">{children}</main>
    </div>
  );
}
