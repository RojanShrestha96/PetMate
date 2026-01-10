import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { ShelterSidebar } from '../components/ShelterSidebar';
import { Card } from '../components/Card';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { ImageUpload } from '../components/ImageUpload';
import { Badge } from '../components/Badge';
import { useNavigate } from 'react-router-dom';
export function AddPetPage() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [images, setImages] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    species: '',
    breed: '',
    age: '',
    gender: '',
    weight: '',
    personality: '',
    behaviour: '',
    vaccinated: false,
    dewormed: false,
    sterilized: false,
    medicalNotes: '',
    adoptionRequirements: ''
  });
  const steps = [{
    title: 'Basic Info',
    description: 'Name, species, breed'
  }, {
    title: 'Details',
    description: 'Age, gender, weight'
  }, {
    title: 'Personality',
    description: 'Behaviour & traits'
  }, {
    title: 'Medical',
    description: 'Health records'
  }, {
    title: 'Photos',
    description: 'Upload images'
  }, {
    title: 'Requirements',
    description: 'Adoption criteria'
  }];
  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };
  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  const handleSubmit = () => {
    // Submit logic here
    navigate('/shelter/dashboard');
  };
  return <div className="flex min-h-screen" style={{
    background: 'var(--color-background)'
  }}>
      <ShelterSidebar />

      <main className="flex-1 p-8">
        {/* Header */}
        <div className="mb-8">
          <button onClick={() => navigate('/shelter/dashboard')} className="flex items-center gap-2 mb-4 transition-colors" style={{
          color: 'var(--color-text-light)'
        }}>
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Dashboard</span>
          </button>
          <h1 className="text-4xl font-bold mb-2" style={{
          color: 'var(--color-text)'
        }}>
            Add New Pet
          </h1>
          <p style={{
          color: 'var(--color-text-light)'
        }}>
            Fill in the details to list a new pet for adoption
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {steps.map((step, index) => <div key={index} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center mb-2 transition-all" style={{
                background: index <= currentStep ? 'var(--color-primary)' : 'var(--color-surface)',
                color: index <= currentStep ? 'white' : 'var(--color-text-light)'
              }}>
                    {index < currentStep ? <Check className="w-5 h-5" /> : index + 1}
                  </div>
                  <p className="text-xs font-medium text-center" style={{
                color: 'var(--color-text)'
              }}>
                    {step.title}
                  </p>
                </div>
                {index < steps.length - 1 && <div className="h-0.5 flex-1 mx-2" style={{
              background: index < currentStep ? 'var(--color-primary)' : 'var(--color-border)'
            }} />}
              </div>)}
          </div>
        </div>

        {/* Form Content */}
        <Card padding="lg" className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div key={currentStep} initial={{
            opacity: 0,
            x: 20
          }} animate={{
            opacity: 1,
            x: 0
          }} exit={{
            opacity: 0,
            x: -20
          }} transition={{
            duration: 0.3
          }}>
              <h2 className="text-2xl font-bold mb-6" style={{
              color: 'var(--color-text)'
            }}>
                {steps[currentStep].title}
              </h2>

              {/* Step 0: Basic Info */}
              {currentStep === 0 && <div className="space-y-5">
                  <Input label="Pet Name" placeholder="Enter pet's name" value={formData.name} onChange={e => setFormData({
                ...formData,
                name: e.target.value
              })} fullWidth required />
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{
                    color: 'var(--color-text)'
                  }}>
                        Species *
                      </label>
                      <select className="w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-colors" style={{
                    borderColor: 'var(--color-border)',
                    background: 'var(--color-card)',
                    color: 'var(--color-text)'
                  }} value={formData.species} onChange={e => setFormData({
                    ...formData,
                    species: e.target.value
                  })}>
                        <option value="">Select species</option>
                        <option value="dog">Dog</option>
                        <option value="cat">Cat</option>
                        <option value="bird">Bird</option>
                        <option value="rabbit">Rabbit</option>
                      </select>
                    </div>
                    <Input label="Breed" placeholder="Enter breed" value={formData.breed} onChange={e => setFormData({
                  ...formData,
                  breed: e.target.value
                })} fullWidth required />
                  </div>
                </div>}

              {/* Step 1: Details */}
              {currentStep === 1 && <div className="space-y-5">
                  <div className="grid grid-cols-3 gap-4">
                    <Input label="Age" placeholder="e.g., 2 years" value={formData.age} onChange={e => setFormData({
                  ...formData,
                  age: e.target.value
                })} fullWidth required />
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{
                    color: 'var(--color-text)'
                  }}>
                        Gender *
                      </label>
                      <select className="w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-colors" style={{
                    borderColor: 'var(--color-border)',
                    background: 'var(--color-card)',
                    color: 'var(--color-text)'
                  }} value={formData.gender} onChange={e => setFormData({
                    ...formData,
                    gender: e.target.value
                  })}>
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>
                    <Input label="Weight" placeholder="e.g., 25 kg" value={formData.weight} onChange={e => setFormData({
                  ...formData,
                  weight: e.target.value
                })} fullWidth required />
                  </div>
                </div>}

              {/* Step 2: Personality */}
              {currentStep === 2 && <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{
                  color: 'var(--color-text)'
                }}>
                      Personality Traits
                    </label>
                    <textarea className="w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-colors" style={{
                  borderColor: 'var(--color-border)',
                  background: 'var(--color-card)',
                  color: 'var(--color-text)'
                }} rows={4} placeholder="Describe the pet's personality (e.g., playful, calm, energetic)" value={formData.personality} onChange={e => setFormData({
                  ...formData,
                  personality: e.target.value
                })} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{
                  color: 'var(--color-text)'
                }}>
                      Behaviour Notes
                    </label>
                    <textarea className="w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-colors" style={{
                  borderColor: 'var(--color-border)',
                  background: 'var(--color-card)',
                  color: 'var(--color-text)'
                }} rows={4} placeholder="Any special behaviour notes or considerations" value={formData.behaviour} onChange={e => setFormData({
                  ...formData,
                  behaviour: e.target.value
                })} />
                  </div>
                </div>}

              {/* Step 3: Medical */}
              {currentStep === 3 && <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium mb-3" style={{
                  color: 'var(--color-text)'
                }}>
                      Medical Records
                    </label>
                    <div className="space-y-3">
                      <label className="flex items-center gap-3 p-4 rounded-xl cursor-pointer" style={{
                    background: 'var(--color-surface)'
                  }}>
                        <input type="checkbox" checked={formData.vaccinated} onChange={e => setFormData({
                      ...formData,
                      vaccinated: e.target.checked
                    })} className="w-5 h-5 rounded" style={{
                      accentColor: 'var(--color-primary)'
                    }} />
                        <span style={{
                      color: 'var(--color-text)'
                    }}>
                          Vaccinated
                        </span>
                      </label>
                      <label className="flex items-center gap-3 p-4 rounded-xl cursor-pointer" style={{
                    background: 'var(--color-surface)'
                  }}>
                        <input type="checkbox" checked={formData.dewormed} onChange={e => setFormData({
                      ...formData,
                      dewormed: e.target.checked
                    })} className="w-5 h-5 rounded" style={{
                      accentColor: 'var(--color-primary)'
                    }} />
                        <span style={{
                      color: 'var(--color-text)'
                    }}>
                          Dewormed
                        </span>
                      </label>
                      <label className="flex items-center gap-3 p-4 rounded-xl cursor-pointer" style={{
                    background: 'var(--color-surface)'
                  }}>
                        <input type="checkbox" checked={formData.sterilized} onChange={e => setFormData({
                      ...formData,
                      sterilized: e.target.checked
                    })} className="w-5 h-5 rounded" style={{
                      accentColor: 'var(--color-primary)'
                    }} />
                        <span style={{
                      color: 'var(--color-text)'
                    }}>
                          Sterilized
                        </span>
                      </label>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{
                  color: 'var(--color-text)'
                }}>
                      Additional Medical Notes
                    </label>
                    <textarea className="w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-colors" style={{
                  borderColor: 'var(--color-border)',
                  background: 'var(--color-card)',
                  color: 'var(--color-text)'
                }} rows={4} placeholder="Any medical conditions, medications, or special care requirements" value={formData.medicalNotes} onChange={e => setFormData({
                  ...formData,
                  medicalNotes: e.target.value
                })} />
                  </div>
                </div>}

              {/* Step 4: Photos */}
              {currentStep === 4 && <div>
                  <p className="mb-4" style={{
                color: 'var(--color-text-light)'
              }}>
                    Upload clear, high-quality photos of the pet. The first
                    image will be the primary photo.
                  </p>
                  <ImageUpload images={images} onChange={setImages} maxImages={5} />
                </div>}

              {/* Step 5: Requirements */}
              {currentStep === 5 && <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{
                  color: 'var(--color-text)'
                }}>
                      Adoption Requirements
                    </label>
                    <textarea className="w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-colors" style={{
                  borderColor: 'var(--color-border)',
                  background: 'var(--color-card)',
                  color: 'var(--color-text)'
                }} rows={6} placeholder="List any specific requirements for adopters (e.g., fenced yard, no small children, experience with breed)" value={formData.adoptionRequirements} onChange={e => setFormData({
                  ...formData,
                  adoptionRequirements: e.target.value
                })} />
                  </div>
                  <div className="p-4 rounded-xl" style={{
                background: 'var(--color-surface)'
              }}>
                    <h4 className="font-semibold mb-2" style={{
                  color: 'var(--color-text)'
                }}>
                      Review Summary
                    </h4>
                    <div className="space-y-2 text-sm">
                      <p style={{
                    color: 'var(--color-text-light)'
                  }}>
                        <strong>Name:</strong> {formData.name || 'Not provided'}
                      </p>
                      <p style={{
                    color: 'var(--color-text-light)'
                  }}>
                        <strong>Species:</strong>{' '}
                        {formData.species || 'Not provided'}
                      </p>
                      <p style={{
                    color: 'var(--color-text-light)'
                  }}>
                        <strong>Photos:</strong> {images.length} uploaded
                      </p>
                    </div>
                  </div>
                </div>}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-8 pt-6" style={{
          borderTop: '1px solid var(--color-border)'
        }}>
            <Button variant="ghost" onClick={handlePrevious} disabled={currentStep === 0} icon={<ArrowLeft className="w-4 h-4" />}>
              Previous
            </Button>
            <div className="flex gap-2">
              {steps.map((_, index) => <div key={index} className="w-2 h-2 rounded-full transition-all" style={{
              background: index === currentStep ? 'var(--color-primary)' : 'var(--color-border)'
            }} />)}
            </div>
            {currentStep < steps.length - 1 ? <Button variant="primary" onClick={handleNext} icon={<ArrowRight className="w-4 h-4" />}>
                Next
              </Button> : <Button variant="primary" onClick={handleSubmit} icon={<Check className="w-4 h-4" />}>
                Publish Pet
              </Button>}
          </div>
        </Card>
      </main>
    </div>;
}