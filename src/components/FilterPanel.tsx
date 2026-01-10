import React from 'react';
import { Card } from './Card';
export interface FilterOptions {
  species: string[];
  breed: string[];
  gender: string[];
  ageRange: string[];
  size: string[];
  healthStatus: string[];
  adoptionStatus: string[];
}
export interface FilterPanelProps {
  filters: Partial<FilterOptions>;
  onFilterChange: (category: keyof FilterOptions, value: string) => void;
}
export function FilterPanel({
  filters,
  onFilterChange
}: FilterPanelProps) {
  const filterCategories = [{
    key: 'species' as const,
    label: 'Species',
    options: ['All', 'Dogs', 'Cats']
  }, {
    key: 'gender' as const,
    label: 'Gender',
    options: ['All', 'Male', 'Female']
  }, {
    key: 'size' as const,
    label: 'Size',
    options: ['All', 'Small', 'Medium', 'Large']
  }, {
    key: 'ageRange' as const,
    label: 'Age',
    options: ['All', 'Puppy/Kitten', '1-3 years', '4+ years']
  }, {
    key: 'healthStatus' as const,
    label: 'Health Status',
    options: ['All', 'Healthy', 'Vaccinated', 'Special Needs']
  }, {
    key: 'adoptionStatus' as const,
    label: 'Status',
    options: ['All', 'Available', 'Pending']
  }];
  return <Card padding="lg" className="sticky top-24">
      <h3 className="text-xl font-semibold mb-6">Filters</h3>
      <div className="space-y-6">
        {filterCategories.map(category => <div key={category.key}>
            <h4 className="text-sm font-medium text-[var(--color-text)] mb-3">
              {category.label}
            </h4>
            <div className="space-y-2">
              {category.options.map(option => <label key={option} className="flex items-center gap-3 cursor-pointer group">
                  <input type="radio" name={category.key} value={option} onChange={() => onFilterChange(category.key, option)} className="w-4 h-4 text-[var(--color-primary)] focus:ring-[var(--color-primary)] cursor-pointer" />
                  <span className="text-sm text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">
                    {option}
                  </span>
                </label>)}
            </div>
          </div>)}
      </div>
    </Card>;
}