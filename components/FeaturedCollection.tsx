import Link from 'next/link';
import { featuredCollections } from '@/data/mockData';
import CollectionCard from './ui/CollectionCard';

const FeaturedCollection = () => {
  return (
    <section className="mb-16">
      <div className="flex items-end justify-between mb-8">
        <div>
          <h2 className="text-2xl font-light text-nordic">
            Featured Collections
          </h2>
          <p className="text-nordic-muted mt-1 text-sm">
            Curated properties for the discerning eye.
          </p>
        </div>
        <Link
          href="#"
          className="hidden sm:flex items-center gap-1 text-sm font-medium text-mosque hover:opacity-70 transition-opacity"
        >
          View all{' '}
          <span className="material-icons text-sm font-material-icons">
            arrow_forward
          </span>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {featuredCollections.map((collection) => (
          <CollectionCard key={collection.id} collection={collection} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedCollection;
