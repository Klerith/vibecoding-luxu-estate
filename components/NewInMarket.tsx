import { newInMarket } from '@/data/mockData';
import PropertyCard from './ui/PropertyCard';

const NewInMarket = () => {
  return (
    <section>
      <div className="flex items-end justify-between mb-8">
        <div>
          <h2 className="text-2xl font-light text-nordic">New in Market</h2>
          <p className="text-nordic-muted mt-1 text-sm">
            Fresh opportunities added this week.
          </p>
        </div>
        <div className="hidden md:flex bg-white p-1 rounded-lg">
          <button className="px-4 py-1.5 rounded-md text-sm font-medium bg-nordic text-white shadow-sm">
            All
          </button>
          <button className="px-4 py-1.5 rounded-md text-sm font-medium text-nordic-muted hover:text-nordic">
            Buy
          </button>
          <button className="px-4 py-1.5 rounded-md text-sm font-medium text-nordic-muted hover:text-nordic">
            Rent
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {newInMarket.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>

      <div className="mt-12 text-center">
        <button className="px-8 py-3 bg-white border border-nordic/10 hover:border-mosque hover:text-mosque text-nordic font-medium rounded-lg transition-all hover:shadow-md">
          Load more properties
        </button>
      </div>
    </section>
  );
};

export default NewInMarket;
