import Link from 'next/link';
import Image from 'next/image';
import { cookies } from 'next/headers';
import { getDictionary } from '@/lib/i18n';
import LanguageSelector from './LanguageSelector';
import { createClient } from '@/lib/supabase/server';
import LogoutButton from './LogoutButton';

const Navbar = async () => {
  const cookieStore = await cookies();
  const locale = cookieStore.get('NEXT_LOCALE')?.value || 'es';
  const dict = getDictionary(locale);
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <nav className="sticky top-0 z-50 bg-clear-day/95 backdrop-blur-md border-b border-nordic/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            href="/"
            className="shrink-0 flex items-center gap-2 cursor-pointer"
          >
            <div className="w-8 h-8 rounded-lg bg-nordic flex items-center justify-center">
              <span className="material-icons text-white text-lg font-material-icons">
                apartment
              </span>
            </div>
            <span className="text-xl font-semibold tracking-tight text-nordic">
              LuxeEstate
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#"
              className="text-mosque font-medium text-sm border-b-2 border-mosque px-1 py-1"
            >
              {dict.navbar.buy}
            </Link>
            <Link
              href="#"
              className="text-nordic/70 hover:text-nordic font-medium text-sm hover:border-b-2 hover:border-nordic/20 px-1 py-1 transition-all"
            >
              {dict.navbar.rent}
            </Link>
            <Link
              href="#"
              className="text-nordic/70 hover:text-nordic font-medium text-sm hover:border-b-2 hover:border-nordic/20 px-1 py-1 transition-all"
            >
              {dict.navbar.sell}
            </Link>
            <Link
              href="#"
              className="text-nordic/70 hover:text-nordic font-medium text-sm hover:border-b-2 hover:border-nordic/20 px-1 py-1 transition-all"
            >
              {dict.navbar.saved_homes}
            </Link>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-6">
            <button className="text-nordic hover:text-mosque transition-colors">
              <span className="material-icons font-material-icons">search</span>
            </button>
            <button className="text-nordic hover:text-mosque transition-colors relative">
              <span className="material-icons font-material-icons">
                notifications_none
              </span>
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-clear-day"></span>
            </button>

            {/* Profile */}
            {user ? (
              <div className="flex items-center">
                <button className="flex items-center gap-2 pl-2 border-l border-nordic/10 ml-2">
                  <div className="w-9 h-9 rounded-full bg-gray-200 overflow-hidden ring-2 ring-transparent hover:ring-mosque transition-all relative">
                    <Image
                      src={
                        user.user_metadata.avatar_url ||
                        'https://lh3.googleusercontent.com/aida-public/AB6AXuCAWhQZ663Bd08kmzjbOPmUk4UIxYooNONShMEFXLR-DtmVi6Oz-TiaY77SPwFk7g0OobkeZEOMvt6v29mSOD0Xm2g95WbBG3ZjWXmiABOUwGUyLOySRfVDo-JTXQ0-gtwjWxbmue0qDm91m-zEOEZwAW6iRFB1qC1bAU-wkjxm67Sbztq8w7srHkFT9bVEC86qG-FzhOBTomhAurNRmx9l8Yfqabk328NfdKuVLckgCdaPsNFE3yN65MeoRi05GA_gXIMwG4YDIeA'
                      }
                      alt="Profile"
                      fill
                      className="object-cover"
                    />
                  </div>
                </button>
                <div className="ml-2 pl-2 border-l border-nordic/10 flex items-center">
                  <LogoutButton />
                </div>
              </div>
            ) : (
              <Link
                href="/login"
                className="text-nordic hover:text-mosque font-medium text-sm pl-2 border-l border-nordic/10 ml-2 transition-colors"
              >
                {dict.navbar.login}
              </Link>
            )}

            <LanguageSelector currentLocale={locale} />
          </div>
        </div>
      </div>

      {/* Mobile Menu (Hidden by default for now as per design) */}
      <div className="md:hidden border-t border-nordic/5 bg-clear-day overflow-hidden h-0 transition-all duration-300">
        <div className="px-4 py-2 space-y-1">
          <Link
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-mosque bg-mosque/10"
          >
            {dict.navbar.buy}
          </Link>
          <Link
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-nordic hover:bg-black/5"
          >
            {dict.navbar.rent}
          </Link>
          <Link
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-nordic hover:bg-black/5"
          >
            {dict.navbar.sell}
          </Link>
          <Link
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-nordic hover:bg-black/5"
          >
            {dict.navbar.saved_homes}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
