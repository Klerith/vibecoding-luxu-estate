'use client';

import { useRouter } from 'next/navigation';
import { useTransition } from 'react';

export default function LanguageSelector({
  currentLocale,
}: {
  currentLocale: string;
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;

    // Set cookie valid for 1 year
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`;

    startTransition(() => {
      router.refresh();
    });
  };

  return (
    <div className="relative inline-block text-left ml-4">
      <select
        value={currentLocale}
        onChange={handleLanguageChange}
        disabled={isPending}
        className={`bg-transparent text-sm font-medium text-nordic border-none cursor-pointer focus:outline-none focus:ring-0 ${isPending ? 'opacity-50' : 'opacity-100'}`}
      >
        <option value="es">🇪🇸 ES</option>
        <option value="en">🇺🇸 EN</option>
        <option value="fr">🇫🇷 FR</option>
      </select>
    </div>
  );
}
