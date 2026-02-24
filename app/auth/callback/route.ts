import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { createServerClient } from '@supabase/ssr';

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get('code');
  // if "next" is in param, use it as the redirect URL
  const next = searchParams.get('next') ?? '/';

  if (code) {
    const cookieStore = await cookies();
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return cookieStore.getAll();
          },
          setAll(cookiesToSet) {
            try {
              cookiesToSet.forEach(({ name, value, options }) =>
                cookieStore.set(name, value, options),
              );
            } catch {
              // The `setAll` method was called from a Server Component.
              // This can be ignored if you have middleware refreshing
              // user sessions.
            }
          },
        },
      },
    );

    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      // Ensure user has a role record
      await supabase.rpc('ensure_user_role');

      const isLocalEnv = process.env.NODE_ENV === 'development';
      // Use NEXT_PUBLIC_SITE_URL in production to avoid redirect issues when
      // Supabase Site URL is still pointing to localhost.
      const baseUrl = isLocalEnv
        ? origin
        : (process.env.NEXT_PUBLIC_SITE_URL ??
          `https://${request.headers.get('x-forwarded-host') ?? new URL(request.url).host}`);

      return NextResponse.redirect(`${baseUrl}${next}`);
    }
  }

  // return the user to an error page with instructions
  return NextResponse.redirect(`${origin}/auth/auth-code-error`);
}
