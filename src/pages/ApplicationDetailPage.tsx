import React, { useState, Children } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, X, Calendar, MessageSquare, Download, User, Home, Heart, FileText } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShelterSidebar } from '../components/ShelterSidebar';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';
import { ApplicationTimeline } from '../components/ApplicationTimeline';
export function ApplicationDetailPage() {
  const {
    applicationId
  } = useParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState<'submitted' | 'under-review' | 'approved' | 'rejected'>('submitted');
  // Mock application data
  const application = {
    id: applicationId,
    applicantName: 'Rajesh Kumar',
    email: 'rajesh.kumar@email.com',
    phone: '+977 98-1234567',
    age: '32',
    address: 'Thamel, Kathmandu, Nepal',
    idType: 'Citizenship',
    idNumber: '12345-67890',
    petName: 'Luna',
    petImage: 'https://images.unsplash.com/photo-1633722715463-d30f4f325e24?w=200&h=200&fit=crop',
    dateSubmitted: 'January 15, 2024',
    homeType: 'House',
    rentOwn: 'Own',
    hasChildren: true,
    childrenDetails: '2 children (ages 6 and 8)',
    existingPets: 'None',
    dailyRoutine: 'I work from home most days and have flexible hours.',
    hasFencedYard: true,
    whyAdopt: "We've been looking for a family dog for months. Luna seems perfect for our active family.",
    petExperience: 'I grew up with dogs and had a Golden Retriever for 12 years.',
    adoptionTimeline: 'Within 2 weeks',
    documents: ['Citizenship_Card.pdf', 'Proof_of_Residence.pdf', 'Landlord_Permission.pdf']
  };
  const handleApprove = () => {
    setStatus('approved');
    alert('Application approved! The applicant will be notified.');
  };
  const handleReject = () => {
    setStatus('rejected');
    alert('Application rejected. The applicant will be notified.');
  };
  return <div className="flex min-h-screen" style={{
    background: 'var(--color-background)'
  }}>
      <ShelterSidebar />

      <main className="flex-1 p-8">
        {/* Header */}
        <button onClick={() => navigate('/shelter/applications')} className="flex items-center gap-2 mb-6 transition-colors" style={{
        color: 'var(--color-text-light)'
      }}>
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Applications</span>
        </button>

        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2" style={{
            color: 'var(--color-text)'
          }}>
              Application Details
            </h1>
            <p style={{
            color: 'var(--color-text-light)'
          }}>
              Application ID: #{applicationId}
            </p>
          </div>
          <Badge variant={status === 'approved' ? 'success' : status === 'rejected' ? 'neutral' : status === 'under-review' ? 'warning' : 'info'}>
            {status === 'under-review' ? 'Under Review' : status}
          </Badge>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Pet Info */}
            <Card padding="lg">
              <h2 className="text-xl font-bold mb-4" style={{
              color: 'var(--color-text)'
            }}>
                Pet Information
              </h2>
              <div className="flex items-center gap-4">
                <img src={application.petImage} alt={application.petName} className="w-20 h-20 rounded-xl object-cover" />
                <div>
                  <h3 className="text-lg font-semibold" style={{
                  color: 'var(--color-text)'
                }}>
                    {application.petName}
                  </h3>
                  <p className="text-sm" style={{
                  color: 'var(--color-text-light)'
                }}>
                    Golden Retriever • 2 years old
                  </p>
                </div>
              </div>
            </Card>

            {/* Applicant Details */}
            <Card padding="lg">
              <div className="flex items-center gap-3 mb-6">
                <User className="w-6 h-6" style={{
                color: 'var(--color-primary)'
              }} />
                <h2 className="text-xl font-bold" style={{
                color: 'var(--color-text)'
              }}>
                  Applicant Information
                </h2>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium mb-1" style={{
                  color: 'var(--color-text-light)'
                }}>
                    Full Name
                  </p>
                  <p style={{
                  color: 'var(--color-text)'
                }}>
                    {application.applicantName}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium mb-1" style={{
                  color: 'var(--color-text-light)'
                }}>
                    Age
                  </p>
                  <p style={{
                  color: 'var(--color-text)'
                }}>
                    {application.age} years
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium mb-1" style={{
                  color: 'var(--color-text-light)'
                }}>
                    Email
                  </p>
                  <p style={{
                  color: 'var(--color-text)'
                }}>
                    {application.email}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium mb-1" style={{
                  color: 'var(--color-text-light)'
                }}>
                    Phone
                  </p>
                  <p style={{
                  color: 'var(--color-text)'
                }}>
                    {application.phone}
                  </p>
                </div>
                <div className="col-span-2">
                  <p className="text-sm font-medium mb-1" style={{
                  color: 'var(--color-text-light)'
                }}>
                    Address
                  </p>
                  <p style={{
                  color: 'var(--color-text)'
                }}>
                    {application.address}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium mb-1" style={{
                  color: 'var(--color-text-light)'
                }}>
                    ID Type
                  </p>
                  <p style={{
                  color: 'var(--color-text)'
                }}>
                    {application.idType}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium mb-1" style={{
                  color: 'var(--color-text-light)'
                }}>
                    ID Number
                  </p>
                  <p style={{
                  color: 'var(--color-text)'
                }}>
                    {application.idNumber}
                  </p>
                </div>
              </div>
            </Card>

            {/* Household Info */}
            <Card padding="lg">
              <div className="flex items-center gap-3 mb-6">
                <Home className="w-6 h-6" style={{
                color: 'var(--color-secondary)'
              }} />
                <h2 className="text-xl font-bold" style={{
                color: 'var(--color-text)'
              }}>
                  Household & Lifestyle
                </h2>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium mb-1" style={{
                    color: 'var(--color-text-light)'
                  }}>
                      Home Type
                    </p>
                    <p style={{
                    color: 'var(--color-text)'
                  }}>
                      {application.homeType}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-1" style={{
                    color: 'var(--color-text-light)'
                  }}>
                      Rent/Own
                    </p>
                    <p style={{
                    color: 'var(--color-text)'
                  }}>
                      {application.rentOwn}
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium mb-1" style={{
                  color: 'var(--color-text-light)'
                }}>
                    Children
                  </p>
                  <p style={{
                  color: 'var(--color-text)'
                }}>
                    {application.hasChildren ? application.childrenDetails : 'No children'}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium mb-1" style={{
                  color: 'var(--color-text-light)'
                }}>
                    Existing Pets
                  </p>
                  <p style={{
                  color: 'var(--color-text)'
                }}>
                    {application.existingPets}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium mb-1" style={{
                  color: 'var(--color-text-light)'
                }}>
                    Daily Routine
                  </p>
                  <p style={{
                  color: 'var(--color-text)'
                }}>
                    {application.dailyRoutine}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium mb-1" style={{
                  color: 'var(--color-text-light)'
                }}>
                    Fenced Yard
                  </p>
                  <p style={{
                  color: 'var(--color-text)'
                }}>
                    {application.hasFencedYard ? 'Yes' : 'No'}
                  </p>
                </div>
              </div>
            </Card>

            {/* Adoption Intent */}
            <Card padding="lg">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-6 h-6" style={{
                color: 'var(--color-accent)'
              }} />
                <h2 className="text-xl font-bold" style={{
                color: 'var(--color-text)'
              }}>
                  Adoption Intent
                </h2>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium mb-2" style={{
                  color: 'var(--color-text-light)'
                }}>
                    Why do you want to adopt?
                  </p>
                  <p style={{
                  color: 'var(--color-text)'
                }}>
                    {application.whyAdopt}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium mb-2" style={{
                  color: 'var(--color-text-light)'
                }}>
                    Experience with Pets
                  </p>
                  <p style={{
                  color: 'var(--color-text)'
                }}>
                    {application.petExperience}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium mb-1" style={{
                  color: 'var(--color-text-light)'
                }}>
                    Adoption Timeline
                  </p>
                  <p style={{
                  color: 'var(--color-text)'
                }}>
                    {application.adoptionTimeline}
                  </p>
                </div>
              </div>
            </Card>

            {/* Documents */}
            <Card padding="lg">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="w-6 h-6" style={{
                color: 'var(--color-info)'
              }} />
                <h2 className="text-xl font-bold" style={{
                color: 'var(--color-text)'
              }}>
                  Uploaded Documents
                </h2>
              </div>
              <div className="space-y-2">
                {application.documents.map((doc, index) => <div key={index} className="flex items-center justify-between p-3 rounded-xl" style={{
                background: 'var(--color-surface)'
              }}>
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5" style={{
                    color: 'var(--color-primary)'
                  }} />
                      <span style={{
                    color: 'var(--color-text)'
                  }}>
                        {doc}
                      </span>
                    </div>
                    <Button variant="ghost" size="sm" icon={<Download className="w-4 h-4" />}>
                      Download
                    </Button>
                  </div>)}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Timeline */}
            <Card padding="lg">
              <h3 className="text-lg font-bold mb-6" style={{
              color: 'var(--color-text)'
            }}>
                Application Status
              </h3>
              <ApplicationTimeline currentStatus={status} />
            </Card>

            {/* Actions */}
            <Card padding="lg">
              <h3 className="text-lg font-bold mb-4" style={{
              color: 'var(--color-text)'
            }}>
                Actions
              </h3>
              <div className="space-y-3">
                {status === 'submitted' && <>
                    <Button variant="primary" fullWidth icon={<Check className="w-4 h-4" />} onClick={handleApprove}>
                      Approve Application
                    </Button>
                    <Button variant="outline" fullWidth icon={<X className="w-4 h-4" />} onClick={handleReject} style={{
                  borderColor: 'var(--color-error)',
                  color: 'var(--color-error)'
                }}>
                      Reject Application
                    </Button>
                  </>}
                <Button variant="outline" fullWidth icon={<Calendar className="w-4 h-4" />}>
                  Schedule Meet & Greet
                </Button>
                <Button variant="outline" fullWidth icon={<MessageSquare className="w-4 h-4" />} onClick={() => navigate('/shelter/messages')}>
                  Message Applicant
                </Button>
              </div>
            </Card>

            {/* Submission Info */}
            <Card padding="lg">
              <h3 className="text-lg font-bold mb-4" style={{
              color: 'var(--color-text)'
            }}>
                Submission Details
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p style={{
                  color: 'var(--color-text-light)'
                }}>
                    Submitted on
                  </p>
                  <p className="font-medium" style={{
                  color: 'var(--color-text)'
                }}>
                    {application.dateSubmitted}
                  </p>
                </div>
                <div>
                  <p style={{
                  color: 'var(--color-text-light)'
                }}>
                    Application ID
                  </p>
                  <p className="font-medium" style={{
                  color: 'var(--color-text)'
                }}>
                    #{applicationId}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>;
}