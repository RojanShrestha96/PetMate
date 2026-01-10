import React from 'react';
import { MapPin, PawPrint } from 'lucide-react';
import { Card } from './Card';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import type { Shelter } from '../data/mockData';
export interface ShelterCardProps {
  shelter: Shelter;
}
export function ShelterCard({
  shelter
}: ShelterCardProps) {
  return <Card padding="none" hover className="overflow-hidden cursor-pointer">
      <img src={shelter.image} alt={shelter.name} className="w-full h-40 object-cover" />
      <div className="p-5">
        <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">
          {shelter.name}
        </h3>
        <div className="flex items-center gap-2 text-sm text-[var(--color-text-light)] mb-3">
          <MapPin className="w-4 h-4" />
          <span>{shelter.location}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 text-[var(--color-primary)]">
            <PawPrint className="w-4 h-4" />
            <span className="font-medium">
              {shelter.petsAvailable} pets available
            </span>
          </div>
          <span className="text-[var(--color-text-light)]">
            {shelter.distance}
          </span>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-gray-100">
        <Link to={`/shelter/${shelter.id}`}>
          <Button variant="primary" className="w-full">
            View Shelter Profile
          </Button>
        </Link>
      </div>
    </Card>;
}