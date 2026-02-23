'use server';

import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';

export async function toggleUserRole(userId: string, currentRole: string) {
  const supabase = await createClient();

  // Verify admin status
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) throw new Error('Not authenticated');

  const { data: roleData } = await supabase
    .from('user_roles')
    .select('role')
    .eq('user_id', user.id)
    .single();

  if (!roleData || roleData.role !== 'admin') {
    throw new Error('Not authorized');
  }

  const newRole = currentRole === 'admin' ? 'user' : 'admin';

  const { error } = await supabase
    .from('user_roles')
    .update({ role: newRole })
    .eq('user_id', userId);

  if (error) {
    console.error('Error updating role:', error);
    throw new Error('Failed to update role');
  }

  revalidatePath('/admin/users');
}
