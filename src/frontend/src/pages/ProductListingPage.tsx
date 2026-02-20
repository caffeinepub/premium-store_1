import { useState } from 'react';
import { PRODUCTS } from '../utils/constants';
import ProductGridCard from '../components/ProductGridCard';
import FiltersSidebar from '../components/FiltersSidebar';
import SortDropdown from '../components/SortDropdown';

export default function ProductListingPage() {
  const [filters, setFilters] = useState({
    categories: [] as string[],
    priceRange: [0, 1000] as [number, number],
    minRating: 0,
  });
  const [sortBy, setSortBy] = useState('featured');

  let filteredProducts = [...PRODUCTS];

  // Apply filters
  if (filters.categories.length > 0) {
    filteredProducts = filteredProducts.filter((p) =>
      filters.categories.includes(p.category)
    );
  }
  filteredProducts = filteredProducts.filter(
    (p) => p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]
  );
  filteredProducts = filteredProducts.filter((p) => p.rating >= filters.minRating);

  // Apply sorting
  if (sortBy === 'price-low') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'rating') {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            All Products
          </h1>
          <p className="text-lg text-gray-600">
            Discover our complete collection of premium products.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <FiltersSidebar filters={filters} onFiltersChange={setFilters} />
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
              </p>
              <SortDropdown value={sortBy} onChange={setSortBy} />
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {filteredProducts.map((product) => (
                <ProductGridCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
