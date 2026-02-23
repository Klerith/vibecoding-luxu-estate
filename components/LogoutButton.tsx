'use client';

import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';

export default function LogoutButton() {
  const supabase = createClient();
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  return (
    <button
      onClick={handleLogout}
      className="text-nordic hover:text-red-500 transition-colors ml-4 flex items-center justify-center p-1 rounded-md hover:bg-red-50"
      title="Cerrar sesión"
    >
      <span className="material-icons font-material-icons text-xl">logout</span>
    </button>
  );
}
