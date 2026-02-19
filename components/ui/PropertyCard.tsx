import Image from 'next/image';
import { Property } from '@/data/mockData';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  return (
    <article className="bg-white rounded-xl overflow-hidden shadow-card hover:shadow-soft transition-all duration-300 group cursor-pointer h-full flex flex-col">
      {/* Image Container */}
      <div className="relative aspect-4/3 overflow-hidden">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Favorite Button */}
        <button className="absolute top-3 right-3 p-2 bg-white/90 rounded-full hover:bg-mosque hover:text-white transition-colors text-nordic z-10">
          <span className="material-icons text-lg font-material-icons">
            favorite_border
          </span>
        </button>

        {/* Type Tag */}
        <div
          className={`absolute bottom-3 left-3 text-white text-xs font-bold px-2 py-1 rounded ${property.type === 'sale' ? 'bg-nordic/90' : 'bg-mosque/90'}`}
        >
          {property.type === 'sale' ? 'FOR SALE' : 'FOR RENT'}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col grow">
        <div className="flex justify-between items-baseline mb-2">
          <h3 className="font-bold text-lg text-nordic">
            ${property.price.toLocaleString()}
            {property.type === 'rent' && (
              <span className="text-sm font-normal text-nordic-muted">/mo</span>
            )}
          </h3>
        </div>

        <h4 className="text-nordic font-medium truncate mb-1">
          {property.title}
        </h4>
        <p className="text-nordic-muted text-xs mb-4">{property.location}</p>

        {/* Footer Features */}
        <div className="mt-auto flex items-center justify-between pt-3 border-t border-gray-100">
          <div className="flex items-center gap-1 text-nordic-muted text-xs">
            <span className="material-icons text-sm text-mosque/80 font-material-icons">
              king_bed
            </span>{' '}
            {property.beds}
          </div>
          <div className="flex items-center gap-1 text-nordic-muted text-xs">
            <span className="material-icons text-sm text-mosque/80 font-material-icons">
              bathtub
            </span>{' '}
            {property.baths}
          </div>
          <div className="flex items-center gap-1 text-nordic-muted text-xs">
            <span className="material-icons text-sm text-mosque/80 font-material-icons">
              square_foot
            </span>{' '}
            {property.sqft}m²
          </div>
        </div>
      </div>
    </article>
  );
};

export default PropertyCard;
