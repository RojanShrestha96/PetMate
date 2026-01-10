import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { SearchBar } from '../components/SearchBar';
import { Button } from '../components/Button';
import { PetCarousel } from '../components/PetCarousel';
import { ShelterCard } from '../components/ShelterCard';
import { Badge } from '../components/Badge';
import { PawPrint, Heart, Home, CheckCircle } from 'lucide-react';
import { mockPets, mockShelters } from '../data/mockData';
export function HomePage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const featuredPets = mockPets.filter(p => p.adoptionStatus === 'available').slice(0, 6);
  const quickFilters = [{
    label: 'Dogs',
    icon: '🐕',
    species: 'dog'
  }, {
    label: 'Cats',
    icon: '🐈',
    species: 'cat'
  }, {
    label: 'Birds',
    icon: '🦜',
    species: 'bird'
  }, {
    label: 'Rabbits',
    icon: '🐰',
    species: 'rabbit'
  }];
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden" style={{
      background: 'var(--color-surface)'
    }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} className="text-center max-w-3xl mx-auto">
            <motion.div initial={{
            scale: 0
          }} animate={{
            scale: 1
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{
            background: 'var(--color-card)',
            boxShadow: 'var(--shadow-sm)'
          }}>
              <PawPrint className="w-5 h-5" style={{
              color: 'var(--color-primary)'
            }} />
              <span className="text-sm font-medium" style={{
              color: 'var(--color-text)'
            }}>
                Find Your Perfect Companion
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight" style={{
            color: 'var(--color-text)'
          }}>
              Give a Pet a{' '}
              <span style={{
              color: 'var(--color-primary)'
            }}>
                Forever Home
              </span>
            </h1>
            <p className="text-xl mb-10" style={{
            color: 'var(--color-text-light)'
          }}>
              Connect with loving pets waiting for adoption. Start your journey
              to finding a loyal companion today.
            </p>

            <div className="flex flex-col items-center gap-6">
              <SearchBar value={searchQuery} onChange={setSearchQuery} onSearch={() => navigate('/search')} />

              <div className="flex flex-wrap items-center justify-center gap-3">
                {quickFilters.map(filter => <button key={filter.label} onClick={() => navigate('/search')} className="px-4 py-2 rounded-full transition-all hover:-translate-y-0.5" style={{
                background: 'var(--color-card)',
                boxShadow: 'var(--shadow-sm)'
              }}>
                    <span>{filter.icon}</span>
                    <span className="text-sm font-medium ml-2" style={{
                  color: 'var(--color-text)'
                }}>
                      {filter.label}
                    </span>
                  </button>)}
              </div>

              <div className="flex gap-4 mt-4">
                <Button variant="primary" size="lg" onClick={() => navigate('/search')}>
                  Browse Pets
                </Button>
                <Button variant="outline" size="lg" onClick={() => navigate('/signup')}>
                  Sign Up
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Pets Carousel */}
      <section className="py-16" style={{
      background: 'var(--color-background)'
    }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" style={{
            color: 'var(--color-text)'
          }}>
              Featured Pets
            </h2>
            <p className="text-lg" style={{
            color: 'var(--color-text-light)'
          }}>
              Meet some of our adorable pets waiting for their forever homes
            </p>
          </div>

          <PetCarousel pets={featuredPets} />

          <div className="text-center mt-8">
            <Button variant="outline" size="lg" onClick={() => navigate('/search')}>
              View All Pets
            </Button>
          </div>
        </div>
      </section>

      {/* Why Adopt Section */}
      <section className="py-16" style={{
      background: 'var(--color-surface)'
    }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" style={{
            color: 'var(--color-text)'
          }}>
              Why Adopt?
            </h2>
            <p className="text-lg" style={{
            color: 'var(--color-text-light)'
          }}>
              Make a difference in a pet's life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
            icon: <Heart className="w-8 h-8" />,
            title: 'Save a Life',
            description: 'Give a homeless pet a second chance at happiness and love'
          }, {
            icon: <Home className="w-8 h-8" />,
            title: 'Find Your Match',
            description: 'Discover the perfect companion that fits your lifestyle'
          }, {
            icon: <CheckCircle className="w-8 h-8" />,
            title: 'Trusted Process',
            description: 'All pets are health-checked and ready for adoption'
          }].map((item, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }} viewport={{
            once: true
          }} className="p-8 rounded-2xl text-center" style={{
            background: 'var(--color-card)',
            boxShadow: 'var(--shadow-sm)'
          }}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4" style={{
              background: 'var(--color-primary)',
              opacity: 0.1
            }}>
                  <div style={{
                color: 'var(--color-primary)',
                opacity: 1
              }}>
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{
              color: 'var(--color-text)'
            }}>
                  {item.title}
                </h3>
                <p style={{
              color: 'var(--color-text-light)'
            }}>
                  {item.description}
                </p>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Nearby Shelters */}
      <section className="py-16" style={{
      background: 'var(--color-background)'
    }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-2" style={{
              color: 'var(--color-text)'
            }}>
                Nearby Shelters
              </h2>
              <p className="text-lg" style={{
              color: 'var(--color-text-light)'
            }}>
                Visit local shelters in your area
              </p>
            </div>
            <Badge variant="info" size="md">
              Based on your location
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockShelters.map(shelter => <ShelterCard key={shelter.id} shelter={shelter} />)}
          </div>
        </div>
      </section>
    </div>;
}