import PropertyForm from '@/components/admin/PropertyForm';
import { createClient } from '@/lib/supabase/server';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Property } from '@/types/property';

export default async function EditPropertyPage(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const supabase = await createClient();

  const { data: property, error } = await supabase
    .from('properties')
    .select('*')
    .eq('slug', params.id)
    .single();

  if (error || !property) {
    notFound();
  }

  return (
    <main className="grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-200 pb-8">
        <div className="space-y-4">
          <nav aria-label="Breadcrumb" className="flex">
            <ol className="flex items-center space-x-2 text-sm text-gray-500 font-medium font-sans">
              <li>
                <Link
                  href="/admin/properties"
                  className="hover:text-mosque transition-colors"
                >
                  Properties
                </Link>
              </li>
              <li>
                <span className="material-icons text-xs text-gray-400">
                  chevron_right
                </span>
              </li>
              <li aria-current="page" className="text-nordic">
                Edit {property.title}
              </li>
            </ol>
          </nav>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-nordic tracking-tight mb-2">
              Edit Property
            </h1>
            <p className="text-base text-gray-500 max-w-2xl font-normal font-sans">
              Update the details below to modify the existing listing. Fields
              marked with * are mandatory.
            </p>
          </div>
        </div>
      </header>
      <PropertyForm initialData={property as unknown as Property} />
    </main>
  );
}
