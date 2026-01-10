import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, Search } from 'lucide-react';
import { ShelterSidebar } from '../components/ShelterSidebar';
import { ApplicationCard, Application } from '../components/ApplicationCard';
import { useNavigate } from 'react-router-dom';
export function ApplicationsPage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const mockApplications: Application[] = [{
    id: '1',
    applicantName: 'Rajesh Kumar',
    petName: 'Luna',
    petImage: 'https://images.unsplash.com/photo-1633722715463-d30f4f325e24?w=200&h=200&fit=crop',
    dateSubmitted: 'Jan 15, 2024',
    status: 'submitted'
  }, {
    id: '2',
    applicantName: 'Sita Sharma',
    petName: 'Max',
    petImage: 'https://images.unsplash.com/photo-1568572933382-74d440642117?w=200&h=200&fit=crop',
    dateSubmitted: 'Jan 14, 2024',
    status: 'under-review'
  }, {
    id: '3',
    applicantName: 'Amit Thapa',
    petName: 'Bella',
    petImage: 'https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=200&h=200&fit=crop',
    dateSubmitted: 'Jan 12, 2024',
    status: 'approved'
  }, {
    id: '4',
    applicantName: 'Priya Rai',
    petName: 'Charlie',
    petImage: 'https://images.unsplash.com/photo-1505628346881-b72b27e84530?w=200&h=200&fit=crop',
    dateSubmitted: 'Jan 10, 2024',
    status: 'meet-greet'
  }];
  const filteredApplications = mockApplications.filter(app => {
    const matchesSearch = app.applicantName.toLowerCase().includes(searchQuery.toLowerCase()) || app.petName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || app.status === statusFilter;
    return matchesSearch && matchesStatus;
  });
  return <div className="flex min-h-screen" style={{
    background: 'var(--color-background)'
  }}>
      <ShelterSidebar />

      <main className="flex-1 p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2" style={{
          color: 'var(--color-text)'
        }}>
            Adoption Applications
          </h1>
          <p style={{
          color: 'var(--color-text-light)'
        }}>
            {mockApplications.length} total applications
          </p>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" style={{
            color: 'var(--color-text-light)'
          }} />
            <input type="text" placeholder="Search by applicant or pet name..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-full pl-12 pr-4 py-3 rounded-xl border-2 focus:outline-none transition-colors" style={{
            borderColor: 'var(--color-border)',
            background: 'var(--color-card)',
            color: 'var(--color-text)'
          }} />
          </div>
          <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)} className="px-4 py-3 rounded-xl border-2 focus:outline-none transition-colors" style={{
          borderColor: 'var(--color-border)',
          background: 'var(--color-card)',
          color: 'var(--color-text)'
        }}>
            <option value="all">All Status</option>
            <option value="submitted">Submitted</option>
            <option value="under-review">Under Review</option>
            <option value="approved">Approved</option>
            <option value="meet-greet">Meet & Greet</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>

        {/* Applications List */}
        <div className="space-y-4">
          {filteredApplications.map((application, index) => <ApplicationCard key={application.id} application={application} onView={() => navigate(`/shelter/applications/${application.id}`)} onMessage={() => {}} index={index} />)}
        </div>

        {filteredApplications.length === 0 && <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} className="text-center py-20">
            <p className="text-lg" style={{
          color: 'var(--color-text-light)'
        }}>
              No applications found
            </p>
          </motion.div>}
      </main>
    </div>;
}