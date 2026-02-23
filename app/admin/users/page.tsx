import { createClient } from '@/lib/supabase/server';
import { toggleUserRole } from './actions';

export default async function AdminUsersPage() {
  const supabase = await createClient();
  const { data: users, error } = await supabase.rpc('get_admin_users');

  if (error) {
    return (
      <div className="p-8 text-red-500">
        Error loading users: {error.message}
      </div>
    );
  }

  return (
    <>
      <header className="w-full pt-8 pb-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-nordic">
              User Directory
            </h1>
            <p className="text-nordic/60 mt-1 text-sm">
              Manage user access and roles for your properties.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <div className="relative group w-full md:w-80">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="material-icons text-nordic/40 group-focus-within:text-mosque text-xl">
                  search
                </span>
              </div>
              <input
                className="block w-full pl-10 pr-3 py-2.5 border-none rounded-lg bg-white text-nordic shadow-soft placeholder-nordic/30 focus:ring-2 focus:ring-mosque focus:bg-white transition-all text-sm"
                placeholder="Search by name, email..."
                type="text"
              />
            </div>
            <button className="inline-flex items-center justify-center px-4 py-2.5 border border-mosque text-sm font-medium rounded-lg text-mosque bg-transparent hover:bg-mosque/5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mosque transition-colors whitespace-nowrap">
              <span className="material-icons text-lg mr-2">add</span>
              Add User
            </button>
          </div>
        </div>
        <div className="mt-8 flex gap-6 border-b border-nordic/10 overflow-x-auto">
          <button className="pb-3 text-sm font-semibold text-mosque border-b-2 border-mosque">
            All Users
          </button>
          <button className="pb-3 text-sm font-medium text-nordic/60 hover:text-nordic transition-colors">
            Agents
          </button>
          <button className="pb-3 text-sm font-medium text-nordic/60 hover:text-nordic transition-colors">
            Brokers
          </button>
          <button className="pb-3 text-sm font-medium text-nordic/60 hover:text-nordic transition-colors">
            Admins
          </button>
        </div>
      </header>
      <main className="grow px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full pb-12 space-y-4">
        <div className="hidden md:grid grid-cols-12 gap-4 px-6 text-xs font-semibold uppercase tracking-wider text-nordic/50 mb-2">
          <div className="col-span-4">User Details</div>
          <div className="col-span-3">Role &amp; Status</div>
          <div className="col-span-3">Performance</div>
          <div className="col-span-2 text-right">Actions</div>
        </div>

        {users?.map((user) => (
          <div
            key={user.id}
            className={`user-card group relative rounded-xl p-5 shadow-sm border border-gray-100 flex flex-col md:grid md:grid-cols-12 gap-4 items-center transition-all ${user.role === 'admin' ? 'bg-hint-of-green hover:shadow-soft border-transparent' : 'bg-white hover:bg-hint-of-green/30'}`}
          >
            <div className="col-span-12 md:col-span-4 flex items-center w-full">
              <div className="relative shrink-0">
                <div className="h-12 w-12 rounded-full border-2 border-white bg-nordic/10 flex items-center justify-center text-nordic/60 font-bold uppercase">
                  {user.email?.charAt(0) || 'U'}
                </div>
                <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-green-400 ring-2 ring-white"></span>
              </div>
              <div className="ml-4 overflow-hidden">
                <div className="text-sm font-bold text-nordic truncate">
                  {user.email?.split('@')[0] || 'Unknown User'}
                </div>
                <div className="text-xs text-nordic/70 truncate">
                  {user.email}
                </div>
                <div className="mt-1 text-[10px] px-2 py-0.5 inline-block bg-gray-50/50 rounded text-nordic/60 group-hover:bg-white/50 transition-colors">
                  ID: #{user.id.substring(0, 8).toUpperCase()}
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-3 w-full flex items-center justify-between md:justify-start gap-4">
              <span
                className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium ${user.role === 'admin' ? 'bg-mosque/10 text-mosque' : 'bg-gray-100 text-gray-600'}`}
              >
                {user.role === 'admin' ? 'Administrator' : 'User'}
              </span>
              <div className="flex items-center text-xs text-nordic/60">
                <span className="material-icons text-[14px] mr-1 text-mosque">
                  check_circle
                </span>
                Active
              </div>
            </div>
            <div className="col-span-12 md:col-span-3 w-full grid grid-cols-2 gap-4">
              <div>
                <div className="text-[10px] uppercase tracking-wider text-nordic/50">
                  Properties
                </div>
                <div className="text-sm font-semibold text-nordic">-</div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-wider text-nordic/50">
                  Access Level
                </div>
                <div className="text-sm font-semibold text-nordic">
                  {user.role === 'admin' ? 'Level 5' : 'Level 1'}
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-2 w-full flex justify-end relative">
              <form
                action={async () => {
                  'use server';
                  await toggleUserRole(user.id, user.role);
                }}
                className="w-full md:w-auto"
              >
                <button
                  type="submit"
                  className="inline-flex items-center px-4 py-2 border border-nordic/10 bg-white shadow-sm text-xs font-medium rounded-lg text-nordic hover:bg-nordic hover:text-white focus:outline-none transition-colors w-full md:w-auto justify-center"
                >
                  {user.role === 'admin' ? 'Remove Admin' : 'Make Admin'}
                  <span className="material-icons text-[16px] ml-2">
                    sync_alt
                  </span>
                </button>
              </form>
            </div>
          </div>
        ))}

        {(!users || users.length === 0) && (
          <div className="text-center py-12 text-sm text-nordic/50">
            No users found.
          </div>
        )}
      </main>
    </>
  );
}
