import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Grid, List, Search, Edit, Trash2, Eye, TrendingUp } from 'lucide-react';
import { ShelterSidebar } from '../components/ShelterSidebar';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';
import { Card } from '../components/Card';
import { EditPetModal, Pet } from '../components/EditPetModal';
import { DeleteConfirmModal } from '../components/DeleteConfirmModal';
import { mockPets } from '../data/mockData';
import { useNavigate } from 'react-router-dom';
export function PetsManagementPage() {
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [pets, setPets] = useState(mockPets);
  const [editingPet, setEditingPet] = useState<Pet | null>(null);
  const [deletingPet, setDeletingPet] = useState<Pet | null>(null);
  const handleEditPet = (pet: any) => {
    setEditingPet({
      id: pet.id,
      name: pet.name,
      species: pet.species,
      breed: pet.breed,
      age: pet.age,
      gender: pet.gender,
      weight: pet.weight,
      description: pet.description,
      adoptionStatus: pet.adoptionStatus,
      images: pet.images
    });
  };
  const handleSavePet = (updatedPet: Pet) => {
    setPets(pets.map(p => p.id === updatedPet.id ? {
      ...p,
      ...updatedPet
    } : p));
    // Show success message
    alert(`${updatedPet.name} has been updated successfully!`);
  };
  const handleDeletePet = (pet: any) => {
    setDeletingPet(pet);
  };
  const confirmDelete = () => {
    if (deletingPet) {
      setPets(pets.filter(p => p.id !== deletingPet.id));
      alert(`${deletingPet.name} has been deleted.`);
      setDeletingPet(null);
    }
  };
  const filteredPets = pets.filter(pet => pet.name.toLowerCase().includes(searchQuery.toLowerCase()) || pet.breed.toLowerCase().includes(searchQuery.toLowerCase()));
  return <div className="flex min-h-screen" style={{
    background: 'var(--color-background)'
  }}>
      <ShelterSidebar />

      <main className="flex-1 p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2" style={{
            color: 'var(--color-text)'
          }}>
              Manage Pets
            </h1>
            <p style={{
            color: 'var(--color-text-light)'
          }}>
              {filteredPets.length} pets listed
            </p>
          </div>
          <Button variant="primary" size="lg" icon={<Plus className="w-5 h-5" />} onClick={() => navigate('/shelter/add-pet')}>
            Add New Pet
          </Button>
        </div>

        {/* Filters & View Toggle */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" style={{
            color: 'var(--color-text-light)'
          }} />
            <input type="text" placeholder="Search pets..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-full pl-12 pr-4 py-3 rounded-xl border-2 focus:outline-none transition-colors" style={{
            borderColor: 'var(--color-border)',
            background: 'var(--color-card)',
            color: 'var(--color-text)'
          }} />
          </div>
          <div className="flex gap-2">
            <button onClick={() => setViewMode('grid')} className="p-3 rounded-xl transition-all" style={{
            background: viewMode === 'grid' ? 'var(--color-primary)' : 'var(--color-surface)',
            color: viewMode === 'grid' ? 'white' : 'var(--color-text)'
          }}>
              <Grid className="w-5 h-5" />
            </button>
            <button onClick={() => setViewMode('list')} className="p-3 rounded-xl transition-all" style={{
            background: viewMode === 'list' ? 'var(--color-primary)' : 'var(--color-surface)',
            color: viewMode === 'list' ? 'white' : 'var(--color-text)'
          }}>
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Pets Grid/List */}
        {viewMode === 'grid' ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPets.map((pet, index) => <motion.div key={pet.id} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.4,
          delay: index * 0.05
        }}>
                <Card padding="none" className="overflow-hidden">
                  <div className="relative">
                    <img src={pet.images[0]} alt={pet.name} className="w-full h-48 object-cover" />
                    <div className="absolute top-3 right-3">
                      <Badge variant={pet.adoptionStatus === 'available' ? 'success' : 'warning'}>
                        {pet.adoptionStatus}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-semibold mb-2" style={{
                color: 'var(--color-text)'
              }}>
                      {pet.name}
                    </h3>
                    <p className="text-sm mb-4" style={{
                color: 'var(--color-text-light)'
              }}>
                      {pet.breed} • {pet.age}
                    </p>

                    {/* Quick Stats */}
                    <div className="flex items-center gap-4 mb-4 text-sm" style={{
                color: 'var(--color-text-light)'
              }}>
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        <span>234 views</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <TrendingUp className="w-4 h-4" />
                        <span>12 requests</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" fullWidth icon={<Edit className="w-4 h-4" />} onClick={() => handleEditPet(pet)}>
                        Edit
                      </Button>
                      <Button variant="ghost" size="sm" icon={<Trash2 className="w-4 h-4" />} onClick={() => handleDeletePet(pet)} />
                    </div>
                  </div>
                </Card>
              </motion.div>)}
          </div> : <div className="space-y-4">
            {filteredPets.map((pet, index) => <motion.div key={pet.id} initial={{
          opacity: 0,
          x: -20
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.4,
          delay: index * 0.05
        }}>
                <Card padding="md">
                  <div className="flex items-center gap-6">
                    <img src={pet.images[0]} alt={pet.name} className="w-24 h-24 rounded-xl object-cover" />
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-xl font-semibold mb-1" style={{
                      color: 'var(--color-text)'
                    }}>
                            {pet.name}
                          </h3>
                          <p style={{
                      color: 'var(--color-text-light)'
                    }}>
                            {pet.breed} • {pet.age} • {pet.location}
                          </p>
                        </div>
                        <Badge variant={pet.adoptionStatus === 'available' ? 'success' : 'warning'}>
                          {pet.adoptionStatus}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-6 text-sm" style={{
                  color: 'var(--color-text-light)'
                }}>
                        <span>234 views</span>
                        <span>12 requests</span>
                        <span>Last updated 2 days ago</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" icon={<Edit className="w-4 h-4" />} onClick={() => handleEditPet(pet)}>
                        Edit
                      </Button>
                      <Button variant="ghost" size="sm" icon={<Trash2 className="w-4 h-4" />} onClick={() => handleDeletePet(pet)} />
                    </div>
                  </div>
                </Card>
              </motion.div>)}
          </div>}

        {filteredPets.length === 0 && <div className="text-center py-20">
            <p className="text-lg" style={{
          color: 'var(--color-text-light)'
        }}>
              No pets found matching "{searchQuery}"
            </p>
          </div>}
      </main>

      {/* Modals */}
      {editingPet && <EditPetModal pet={editingPet} isOpen={!!editingPet} onClose={() => setEditingPet(null)} onSave={handleSavePet} />}

      {deletingPet && <DeleteConfirmModal isOpen={!!deletingPet} petName={deletingPet.name} onClose={() => setDeletingPet(null)} onConfirm={confirmDelete} />}
    </div>;
}