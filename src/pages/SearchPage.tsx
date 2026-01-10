import React, { useState } from 'react';
import { SlidersHorizontal } from 'lucide-react';
import { SearchBar } from '../components/SearchBar';
import { FilterPanel, FilterOptions } from '../components/FilterPanel';
import { PetCard } from '../components/PetCard';
import { Button } from '../components/Button';
import { mockPets } from '../data/mockData';
export function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(true);
  const [filters, setFilters] = useState<Partial<FilterOptions>>({});
  const [sortBy, setSortBy] = useState('newest');
  const handleFilterChange = (category: keyof FilterOptions, value: string) => {
    setFilters(prev => ({
      ...prev,
      [category]: [value]
    }));
  };
  return <div className="min-h-screen bg-[var(--color-background)]">
      {/* Search Header */}
      <div className="bg-white border-b border-[var(--color-border)] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-[var(--color-text)] mb-6">
            Find Your Perfect Pet
          </h1>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <SearchBar value={searchQuery} onChange={setSearchQuery} placeholder="Search by breed, age, size, location..." />
            </div>
            <Button variant="outline" icon={<SlidersHorizontal className="w-5 h-5" />} onClick={() => setShowFilters(!showFilters)}>
              {showFilters ? 'Hide' : 'Show'} Filters
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Sidebar */}
          {showFilters && <aside className="lg:w-64 flex-shrink-0">
              <FilterPanel filters={filters} onFilterChange={handleFilterChange} />
            </aside>}

          {/* Results */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-[var(--color-text-light)]">
                <span className="font-semibold text-[var(--color-text)]">
                  {mockPets.length}
                </span>{' '}
                pets found
              </p>
              <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="px-4 py-2 border-2 border-[var(--color-border)] rounded-xl focus:outline-none focus:border-[var(--color-primary)] text-sm">
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="name">Name (A-Z)</option>
                <option value="age">Age (Young to Old)</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockPets.map((pet, index) => <PetCard key={pet.id} pet={pet} index={index} />)}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Pets
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>;
}