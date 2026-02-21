import Image from 'next/image';
import { Collection } from '@/data/mockData';
import Link from 'next/link';

interface CollectionCardProps {
  collection: Collection;
}

const CollectionCard = ({ collection }: CollectionCardProps) => {
  return (
    <Link
      href={`/properties/${collection.slug || collection.id}`}
      className="block group relative rounded-xl overflow-hidden shadow-soft bg-white cursor-pointer"
    >
      {/* Image Container */}
      <div className="aspect-4/3 w-full overflow-hidden relative">
        <Image
          src={collection.image}
          alt={collection.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Tag */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-nordic">
          {collection.tag}
        </div>

        {/* Favorite Button */}
        <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-nordic hover:bg-mosque hover:text-white transition-all z-10">
          <span className="material-icons text-xl font-material-icons">
            favorite_border
          </span>
        </button>

        {/* Gradient Overlay */}
        <div className="absolute bottom-0 inset-x-0 h-1/2 bg-linear-to-t from-black/60 to-transparent opacity-60"></div>
      </div>

      {/* Content */}
      <div className="p-6 relative">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-xl font-medium text-nordic group-hover:text-mosque transition-colors">
              {collection.title}
            </h3>
            <p className="text-nordic-muted text-sm flex items-center gap-1 mt-1">
              <span className="material-icons text-sm font-material-icons">
                place
              </span>{' '}
              {collection.location}
            </p>
          </div>
          <span className="text-xl font-semibold text-mosque">
            ${collection.price.toLocaleString()}
          </span>
        </div>

        {/* Features */}
        <div className="flex items-center gap-6 mt-6 pt-6 border-t border-nordic/5">
          <div className="flex items-center gap-2 text-nordic-muted text-sm">
            <span className="material-icons text-lg font-material-icons">
              king_bed
            </span>{' '}
            {collection.beds} Beds
          </div>
          <div className="flex items-center gap-2 text-nordic-muted text-sm">
            <span className="material-icons text-lg font-material-icons">
              bathtub
            </span>{' '}
            {collection.baths} Baths
          </div>
          <div className="flex items-center gap-2 text-nordic-muted text-sm">
            <span className="material-icons text-lg font-material-icons">
              square_foot
            </span>{' '}
            {collection.sqft.toLocaleString()} m²
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CollectionCard;
