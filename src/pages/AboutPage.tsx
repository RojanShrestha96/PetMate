import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Shield, PawPrint, CheckCircle, Search, FileText, Home as HomeIcon, Sparkles } from 'lucide-react';
import { Card } from '../components/Card';
export function AboutPage() {
  const steps = [{
    number: '01',
    icon: Search,
    title: 'Browse & Search',
    description: 'Find your perfect companion from our database'
  }, {
    number: '02',
    icon: Heart,
    title: 'Meet & Connect',
    description: 'Visit the shelter and spend time with your chosen pet'
  }, {
    number: '03',
    icon: FileText,
    title: 'Application',
    description: 'Complete the adoption application form'
  }, {
    number: '04',
    icon: HomeIcon,
    title: 'Home Visit',
    description: 'Quick home check to ensure a safe environment'
  }, {
    number: '05',
    icon: CheckCircle,
    title: 'Adoption Complete',
    description: 'Welcome your new family member home!'
  }];
  const values = [{
    icon: <Heart className="w-8 h-8" />,
    title: 'Compassion First',
    description: 'Every pet deserves love, care, and a safe home',
    color: 'var(--color-primary)'
  }, {
    icon: <Users className="w-8 h-8" />,
    title: 'Community Driven',
    description: 'Building a network of caring adopters and shelters',
    color: 'var(--color-secondary)'
  }, {
    icon: <Shield className="w-8 h-8" />,
    title: 'Trust & Safety',
    description: 'Verified shelters and transparent adoption processes',
    color: 'var(--color-success)'
  }];
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden" style={{
      background: 'var(--color-surface)'
    }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }}>
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl mb-6" style={{
            background: 'var(--color-primary)'
          }}>
              <PawPrint className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-6" style={{
            color: 'var(--color-text)'
          }}>
              Our Mission: Every Pet Deserves a Home
            </h1>
            <p className="text-xl leading-relaxed" style={{
            color: 'var(--color-text-light)'
          }}>
              PetMate is dedicated to connecting loving families with pets in
              need. We believe every animal deserves a chance at happiness, and
              every home can be enriched by the unconditional love of a pet.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section with Image */}
      <section className="py-16" style={{
      background: 'var(--color-background)'
    }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{
            opacity: 0,
            x: -50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.6
          }} viewport={{
            once: true
          }}>
              <div className="relative">
                <div className="absolute inset-0 rounded-3xl opacity-20" style={{
                background: 'var(--color-primary)'
              }} />
                <img src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=600&h=500&fit=crop" alt="Our story" className="rounded-3xl shadow-2xl relative z-10" style={{
                boxShadow: 'var(--shadow-lg)'
              }} />
                <motion.div initial={{
                scale: 0
              }} whileInView={{
                scale: 1
              }} transition={{
                duration: 0.5,
                delay: 0.3
              }} viewport={{
                once: true
              }} className="absolute -bottom-6 -right-6 p-6 rounded-2xl z-20" style={{
                background: 'var(--color-card)',
                boxShadow: 'var(--shadow-lg)'
              }}>
                  <div className="flex items-center gap-3">
                    <Sparkles className="w-8 h-8" style={{
                    color: 'var(--color-accent)'
                  }} />
                    <div>
                      <p className="font-bold text-2xl" style={{
                      color: 'var(--color-text)'
                    }}>
                        2024
                      </p>
                      <p className="text-sm" style={{
                      color: 'var(--color-text-light)'
                    }}>
                        Founded
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            x: 50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.6
          }} viewport={{
            once: true
          }}>
              <h2 className="text-4xl font-bold mb-6" style={{
              color: 'var(--color-text)'
            }}>
                Our Story
              </h2>
              <div className="space-y-4" style={{
              color: 'var(--color-text-light)'
            }}>
                <p className="text-lg leading-relaxed">
                  Founded in 2024, PetMate emerged from a simple observation:
                  countless loving pets were waiting in shelters while families
                  were searching for companions. We saw an opportunity to bridge
                  this gap through technology and compassion.
                </p>
                <p className="text-lg leading-relaxed">
                  What started as a small initiative has grown into a nationwide
                  platform, partnering with shelters to give every pet a voice
                  and every family a chance to find their perfect match.
                </p>
                <p className="text-lg leading-relaxed">
                  Today, we're proud to have facilitated hundreds of successful
                  adoptions, bringing joy to both pets and families. But our
                  work is far from over – every day, more pets need homes, and
                  we're here to make those connections happen.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16" style={{
      background: 'var(--color-surface)'
    }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4 text-center" style={{
          color: 'var(--color-text)'
        }}>
            How It Works
          </h2>
          <p className="text-lg mb-12 text-center" style={{
          color: 'var(--color-text-light)'
        }}>
            Five simple steps to finding your perfect companion
          </p>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {steps.map((step, index) => <motion.div key={index} initial={{
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
          }}>
                <Card padding="lg" className="text-center h-full">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4" style={{
                background: 'var(--color-primary)',
                opacity: 0.1
              }}>
                    <step.icon className="w-8 h-8" style={{
                  color: 'var(--color-primary)'
                }} />
                  </div>
                  <div className="text-4xl font-bold mb-2" style={{
                color: 'var(--color-primary)',
                opacity: 0.3
              }}>
                    {step.number}
                  </div>
                  <h3 className="text-lg font-semibold mb-2" style={{
                color: 'var(--color-text)'
              }}>
                    {step.title}
                  </h3>
                  <p className="text-sm" style={{
                color: 'var(--color-text-light)'
              }}>
                    {step.description}
                  </p>
                </Card>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16" style={{
      background: 'var(--color-background)'
    }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{
          color: 'var(--color-text)'
        }}>
            Our Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => <motion.div key={index} initial={{
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
          }} className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl mb-6" style={{
              background: value.color,
              opacity: 0.1
            }}>
                  <div style={{
                color: value.color
              }}>
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-3" style={{
              color: 'var(--color-text)'
            }}>
                  {value.title}
                </h3>
                <p style={{
              color: 'var(--color-text-light)'
            }}>
                  {value.description}
                </p>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Supported Shelters */}
      <section className="py-16" style={{
      background: 'var(--color-surface)'
    }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-8 text-center" style={{
          color: 'var(--color-text)'
        }}>
            Supported Shelters
          </h2>
          <Card padding="lg">
            <p className="text-center mb-8" style={{
            color: 'var(--color-text-light)'
          }}>
              We're proud to partner with these amazing shelters
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {['Kathmandu Animal Shelter', 'Patan Pet Rescue', 'Bhaktapur Animal Care', 'Valley Pet Haven', 'Pokhara Animal Welfare', 'Chitwan Pet Sanctuary'].map((shelter, index) => <motion.div key={index} initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.3,
              delay: index * 0.05
            }} viewport={{
              once: true
            }} className="flex items-center gap-3 p-4 rounded-xl" style={{
              background: 'var(--color-surface)'
            }}>
                  <CheckCircle className="w-5 h-5 flex-shrink-0" style={{
                color: 'var(--color-success)'
              }} />
                  <span className="font-medium" style={{
                color: 'var(--color-text)'
              }}>
                    {shelter}
                  </span>
                </motion.div>)}
            </div>
          </Card>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16" style={{
      background: 'var(--color-background)'
    }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[{
            number: '500+',
            label: 'Successful Adoptions',
            icon: Heart
          }, {
            number: '25+',
            label: 'Partner Shelters',
            icon: HomeIcon
          }, {
            number: '1000+',
            label: 'Happy Families',
            icon: Users
          }].map((stat, index) => <motion.div key={index} initial={{
            opacity: 0,
            scale: 0.9
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }} viewport={{
            once: true
          }} className="p-8 rounded-2xl" style={{
            background: 'var(--color-card)',
            boxShadow: 'var(--shadow-sm)'
          }}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4" style={{
              background: 'var(--color-primary)',
              opacity: 0.1
            }}>
                  <stat.icon className="w-8 h-8" style={{
                color: 'var(--color-primary)'
              }} />
                </div>
                <div className="text-5xl font-bold mb-2" style={{
              color: 'var(--color-primary)'
            }}>
                  {stat.number}
                </div>
                <div className="text-lg" style={{
              color: 'var(--color-text-light)'
            }}>
                  {stat.label}
                </div>
              </motion.div>)}
          </div>
        </div>
      </section>
    </div>;
}