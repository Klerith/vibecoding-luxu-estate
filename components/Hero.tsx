'use client';

import { useState, FormEvent } from 'react';
import FilterModal from './ui/FilterModal';
import { useRouter, useSearchParams } from 'next/navigation';

interface HeroDict {
  title_start: string;
  title_highlight: string;
  title_end: string;
  subtitle: string;
  search_placeholder: string;
  search_button: string;
}

export default function Hero({ dict }: { dict: HeroDict }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get('location') || '',
  );

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    if (searchQuery.trim()) {
      params.set('location', searchQuery.trim());
    } else {
      params.delete('location');
    }
    params.delete('page');
    router.push(`/?${params.toString()}`);
  };

  return (
    <section className="py-12 md:py-16">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-nordic leading-tight">
          {dict.title_start}
          <span className="relative inline-block">
            <span className="relative z-10 font-semibold">
              {dict.title_highlight}
            </span>
            <span className="absolute bottom-2 left-0 w-full h-3 bg-mosque/20 -rotate-1 z-0"></span>
          </span>
          {dict.title_end}
        </h1>

        <form
          onSubmit={handleSearch}
          className="relative group max-w-2xl mx-auto"
        >
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <span className="material-icons text-nordic-muted text-2xl group-focus-within:text-mosque transition-colors font-material-icons">
              search
            </span>
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-full pl-12 pr-4 py-4 rounded-xl border-none bg-white text-nordic shadow-soft placeholder-nordic-muted/60 focus:ring-2 focus:ring-mosque focus:bg-white transition-all text-lg"
            placeholder={dict.search_placeholder}
          />
          <button
            type="submit"
            className="absolute inset-y-2 right-2 px-6 bg-mosque hover:bg-mosque/90 text-white font-medium rounded-lg transition-colors flex items-center justify-center shadow-lg shadow-mosque/20"
          >
            {dict.search_button}
          </button>
        </form>

        <div className="flex items-center justify-center gap-3 overflow-x-auto hide-scroll py-2 px-4 -mx-4">
          {['All', 'House', 'Apartment', 'Villa', 'Penthouse'].map((pt) => {
            const isActive = (searchParams.get('type') || 'All') === pt;
            return (
              <button
                key={pt}
                onClick={() => {
                  const params = new URLSearchParams(searchParams.toString());
                  if (pt === 'All') {
                    params.delete('type');
                  } else {
                    params.set('type', pt);
                  }
                  params.delete('page');
                  router.push(`/?${params.toString()}`);
                }}
                className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-nordic text-white shadow-lg shadow-nordic/10 hover:-translate-y-0.5'
                    : 'bg-white border border-nordic/5 text-nordic-muted hover:text-nordic hover:border-mosque/50 hover:bg-mosque/5'
                }`}
              >
                {pt}
              </button>
            );
          })}
          <div className="w-px h-6 bg-nordic/10 mx-2"></div>
          <button
            onClick={() => setIsFilterModalOpen(true)}
            className="whitespace-nowrap flex items-center gap-1 px-4 py-2 rounded-full text-nordic font-medium text-sm hover:bg-black/5 transition-colors"
          >
            <span className="material-icons text-base font-material-icons">
              tune
            </span>{' '}
            Filters
          </button>
        </div>
      </div>

      <FilterModal
        isOpen={isFilterModalOpen}
        onClose={() => setIsFilterModalOpen(false)}
      />
    </section>
  );
}
