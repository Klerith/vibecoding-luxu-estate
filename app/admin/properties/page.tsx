import { createClient } from '@/lib/supabase/server';
import Link from 'next/link';

export default async function AdminPropertiesPage(props: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParams = await props.searchParams;
  const page = Number(searchParams?.page) || 1;
  const limit = 10;
  const from = (page - 1) * limit;
  const to = from + limit - 1;

  const supabase = await createClient();

  const { count } = await supabase
    .from('properties')
    .select('*', { count: 'exact', head: true });

  const totalPages = count ? Math.ceil(count / limit) : 1;

  const { data: properties, error } = await supabase
    .from('properties')
    .select('*')
    .order('created_at', { ascending: false })
    .range(from, to);

  const { data: allProperties } = await supabase
    .from('properties')
    .select('is_featured');

  if (error) {
    return <div className="p-8 text-red-500">Error loading properties</div>;
  }

  const activePropertiesCount =
    allProperties?.filter((p) => p.is_featured)?.length || 0;
  const totalListings = count || 0;
  const pendingCount = 0;

  return (
    <main className="grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-nordic tracking-tight">
            My Properties
          </h1>
          <p className="text-nordic/60 mt-1 text-sm">
            Manage your portfolio and track performance.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-white border border-nordic/10 text-nordic hover:bg-gray-50 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors shadow-sm inline-flex items-center gap-2">
            <span className="material-icons text-base">filter_list</span> Filter
          </button>
          <Link
            href="/"
            className="bg-mosque hover:bg-mosque/90 text-white px-5 py-2.5 rounded-lg text-sm font-medium shadow-md shadow-mosque/20 transition-all transform hover:-translate-y-0.5 inline-flex items-center gap-2"
          >
            <span className="material-icons text-base">add</span> Add New
            Property
          </Link>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-5 rounded-xl border border-nordic/10 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-nordic/60">Total Listings</p>
            <p className="text-2xl font-bold text-nordic mt-1">
              {totalListings}
            </p>
          </div>
          <div className="h-10 w-10 rounded-full bg-mosque/10 flex items-center justify-center text-mosque">
            <span className="material-icons">apartment</span>
          </div>
        </div>
        <div className="bg-white p-5 rounded-xl border border-nordic/10 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-nordic/60">
              Active Properties
            </p>
            <p className="text-2xl font-bold text-nordic mt-1">
              {activePropertiesCount}
            </p>
          </div>
          <div className="h-10 w-10 rounded-full bg-hint-of-green flex items-center justify-center text-mosque">
            <span className="material-icons">check_circle</span>
          </div>
        </div>
        <div className="bg-white p-5 rounded-xl border border-nordic/10 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-nordic/60">Pending Sale</p>
            <p className="text-2xl font-bold text-nordic mt-1">
              {pendingCount}
            </p>
          </div>
          <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
            <span className="material-icons">pending</span>
          </div>
        </div>
      </div>

      {/* Property List Container */}
      <div className="bg-white rounded-xl shadow-sm border border-nordic/10 overflow-hidden">
        {/* Table Header */}
        <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 bg-gray-50/50 border-b border-nordic/10 text-xs font-semibold text-nordic/60 uppercase tracking-wider">
          <div className="col-span-6">Property Details</div>
          <div className="col-span-2">Price</div>
          <div className="col-span-2">Status</div>
          <div className="col-span-2 text-right">Actions</div>
        </div>

        {properties?.map((property) => (
          <div
            key={property.id}
            className="group grid grid-cols-1 md:grid-cols-12 gap-4 px-6 py-5 border-b border-nordic/10 hover:bg-clear-day transition-colors items-center"
          >
            {/* Property Details */}
            <div className="col-span-12 md:col-span-6 flex gap-4 items-center">
              <div className="relative h-20 w-28 shrink-0 rounded-lg overflow-hidden bg-gray-200">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt={property.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src={
                    property.images?.[0] ||
                    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=400'
                  }
                />
              </div>
              <div className="overflow-hidden">
                <Link href={`/properties/${property.slug}`}>
                  <h3 className="text-lg font-bold text-nordic group-hover:text-mosque transition-colors cursor-pointer truncate">
                    {property.title}
                  </h3>
                </Link>
                <p className="text-sm text-nordic/60 truncate">
                  {property.location}
                </p>
                <div className="flex items-center gap-3 mt-1.5 text-xs text-nordic/50">
                  <span className="flex items-center gap-1">
                    <span className="material-icons text-[14px]">bed</span>{' '}
                    {property.beds || 0} Beds
                  </span>
                  <span className="w-1 h-1 rounded-full bg-nordic/20"></span>
                  <span className="flex items-center gap-1">
                    <span className="material-icons text-[14px]">bathtub</span>{' '}
                    {property.baths || 0} Baths
                  </span>
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="col-span-6 md:col-span-2">
              <div className="text-base font-semibold text-nordic">
                ${property.price.toLocaleString()}
              </div>
              <div className="text-xs text-nordic/50 capitalize">
                {property.type}
              </div>
            </div>

            {/* Status */}
            <div className="col-span-6 md:col-span-2">
              {property.is_featured ? (
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-hint-of-green text-mosque border border-mosque/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-mosque mr-1.5"></span>
                  Featured
                </span>
              ) : (
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600 border border-gray-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mr-1.5"></span>
                  Standard
                </span>
              )}
            </div>

            {/* Actions */}
            <div className="col-span-12 md:col-span-2 flex items-center justify-end gap-2">
              <Link
                href={`/properties/${property.slug}`}
                className="p-2 rounded-lg text-nordic/40 hover:text-mosque hover:bg-hint-of-green/50 transition-all tooltip-trigger"
                title="Edit Property"
              >
                <span className="material-icons text-xl">edit</span>
              </Link>
              <button
                className="p-2 rounded-lg text-nordic/40 hover:text-red-600 hover:bg-red-50 transition-all tooltip-trigger"
                title="Delete Property"
              >
                <span className="material-icons text-xl">delete_outline</span>
              </button>
            </div>
          </div>
        ))}

        {(!properties || properties.length === 0) && (
          <div className="text-center py-12 text-sm text-nordic/50">
            No properties found.
          </div>
        )}

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between px-6 py-4 border-t border-nordic/10 bg-gray-50/50">
            <div className="text-sm text-nordic/60">
              Showing{' '}
              <span className="font-medium text-nordic">{from + 1}</span> to{' '}
              <span className="font-medium text-nordic">
                {Math.min(to + 1, totalListings)}
              </span>{' '}
              of{' '}
              <span className="font-medium text-nordic">{totalListings}</span>{' '}
              results
            </div>
            <div className="flex items-center gap-2">
              <Link
                href={`/admin/properties?page=${Math.max(1, page - 1)}`}
                className={`p-2 rounded-lg border border-nordic/10 bg-white text-nordic/60 hover:text-nordic hover:bg-gray-50 transition-colors ${page === 1 ? 'pointer-events-none opacity-50' : ''}`}
              >
                <span className="material-icons text-xl block">
                  chevron_left
                </span>
              </Link>
              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (p) => (
                    <Link
                      key={p}
                      href={`/admin/properties?page=${p}`}
                      className={`w-8 h-8 flex items-center justify-center rounded-lg text-sm font-medium transition-colors ${page === p ? 'bg-mosque text-white' : 'text-nordic/60 hover:text-nordic hover:bg-gray-100'}`}
                    >
                      {p}
                    </Link>
                  ),
                )}
              </div>
              <Link
                href={`/admin/properties?page=${Math.min(totalPages, page + 1)}`}
                className={`p-2 rounded-lg border border-nordic/10 bg-white text-nordic/60 hover:text-nordic hover:bg-gray-50 transition-colors ${page === totalPages ? 'pointer-events-none opacity-50' : ''}`}
              >
                <span className="material-icons text-xl block">
                  chevron_right
                </span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
