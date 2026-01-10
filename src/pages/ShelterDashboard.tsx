import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PawPrint, Clock, CheckCircle, MessageSquare, Plus, Eye, TrendingUp, Calendar, DollarSign, Bell, User, ChevronDown, BarChart3 } from 'lucide-react';
import { ShelterSidebar } from '../components/ShelterSidebar';
import { StatCard } from '../components/StatCard';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';
import { useNavigate } from 'react-router-dom';
type TabType = 'overview' | 'pets' | 'applications' | 'schedule' | 'messages' | 'donations' | 'analytics';
export function ShelterDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const tabs = [{
    id: 'overview' as TabType,
    label: 'Overview',
    icon: BarChart3
  }, {
    id: 'pets' as TabType,
    label: 'Pets',
    icon: PawPrint
  }, {
    id: 'applications' as TabType,
    label: 'Applications',
    icon: CheckCircle
  }, {
    id: 'schedule' as TabType,
    label: 'Schedule',
    icon: Calendar
  }, {
    id: 'messages' as TabType,
    label: 'Messages',
    icon: MessageSquare
  }, {
    id: 'donations' as TabType,
    label: 'Donations',
    icon: DollarSign
  }, {
    id: 'analytics' as TabType,
    label: 'Analytics',
    icon: TrendingUp
  }];
  const stats = [{
    title: 'Total Pets Listed',
    value: '24',
    icon: PawPrint,
    trend: {
      value: '12%',
      isPositive: true
    },
    color: 'var(--color-primary)'
  }, {
    title: 'Pending Requests',
    value: '8',
    icon: Clock,
    trend: {
      value: '3%',
      isPositive: true
    },
    color: 'var(--color-accent)'
  }, {
    title: 'Successfully Adopted',
    value: '156',
    icon: CheckCircle,
    trend: {
      value: '8%',
      isPositive: true
    },
    color: 'var(--color-success)'
  }, {
    title: 'Scheduled Meet & Greets',
    value: '5',
    icon: Calendar,
    color: 'var(--color-secondary)'
  }, {
    title: 'Incoming Messages',
    value: '12',
    icon: MessageSquare,
    color: 'var(--color-info)'
  }, {
    title: 'Donations Received',
    value: 'NPR 45K',
    icon: DollarSign,
    trend: {
      value: '15%',
      isPositive: true
    },
    color: 'var(--color-success)'
  }];
  const recentApplications = [{
    id: '1',
    applicant: 'Rajesh Kumar',
    pet: 'Luna',
    date: '2 hours ago',
    status: 'pending'
  }, {
    id: '2',
    applicant: 'Sita Sharma',
    pet: 'Max',
    date: '5 hours ago',
    status: 'approved'
  }, {
    id: '3',
    applicant: 'Amit Thapa',
    pet: 'Bella',
    date: '1 day ago',
    status: 'under-review'
  }, {
    id: '4',
    applicant: 'Priya Rai',
    pet: 'Charlie',
    date: '2 days ago',
    status: 'meet-greet'
  }];
  const notifications = [{
    id: '1',
    text: 'New adoption request for Luna',
    time: '5 min ago',
    unread: true
  }, {
    id: '2',
    text: 'Meet & greet scheduled for tomorrow',
    time: '1 hour ago',
    unread: true
  }, {
    id: '3',
    text: 'New message from Rajesh Kumar',
    time: '2 hours ago',
    unread: false
  }];
  return <div className="flex min-h-screen" style={{
    background: 'var(--color-background)'
  }}>
      <ShelterSidebar />

      <main className="flex-1 flex flex-col">
        {/* Enhanced Header */}
        <header className="border-b" style={{
        background: 'var(--color-card)',
        borderColor: 'var(--color-border)'
      }}>
          {/* Top Bar */}
          <div className="flex items-center justify-between px-8 py-4 border-b" style={{
          borderColor: 'var(--color-border)'
        }}>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl" style={{
              background: 'var(--color-primary)'
            }}>
                <PawPrint className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold" style={{
                color: 'var(--color-text)'
              }}>
                  Shelter Dashboard
                </h1>
                <p className="text-sm" style={{
                color: 'var(--color-text-light)'
              }}>
                  Kathmandu Animal Shelter
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="primary" icon={<Plus className="w-4 h-4" />} onClick={() => navigate('/shelter/add-pet')}>
                Add New Pet
              </Button>

              {/* Notifications */}
              <div className="relative">
                <button onClick={() => setShowNotifications(!showNotifications)} className="p-2 rounded-lg relative transition-colors" style={{
                background: 'var(--color-surface)'
              }}>
                  <Bell className="w-5 h-5" style={{
                  color: 'var(--color-text)'
                }} />
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{
                  background: 'var(--color-primary)'
                }}>
                    2
                  </span>
                </button>

                {showNotifications && <>
                    <div className="fixed inset-0 z-40" onClick={() => setShowNotifications(false)} />
                    <motion.div initial={{
                  opacity: 0,
                  y: -10
                }} animate={{
                  opacity: 1,
                  y: 0
                }} className="absolute right-0 mt-2 w-80 rounded-xl shadow-xl z-50" style={{
                  background: 'var(--color-card)',
                  border: '1px solid var(--color-border)',
                  boxShadow: 'var(--shadow-xl)'
                }}>
                      <div className="p-4 border-b" style={{
                    borderColor: 'var(--color-border)'
                  }}>
                        <h3 className="font-semibold" style={{
                      color: 'var(--color-text)'
                    }}>
                          Notifications
                        </h3>
                      </div>
                      <div className="max-h-96 overflow-y-auto">
                        {notifications.map(notif => <div key={notif.id} className="p-4 border-b transition-colors hover:bg-opacity-50" style={{
                      borderColor: 'var(--color-border)',
                      background: notif.unread ? 'var(--color-surface)' : 'transparent'
                    }}>
                            <p className="text-sm mb-1" style={{
                        color: 'var(--color-text)'
                      }}>
                              {notif.text}
                            </p>
                            <p className="text-xs" style={{
                        color: 'var(--color-text-light)'
                      }}>
                              {notif.time}
                            </p>
                          </div>)}
                      </div>
                    </motion.div>
                  </>}
              </div>

              {/* Profile Dropdown */}
              <div className="relative">
                <button onClick={() => setShowProfile(!showProfile)} className="flex items-center gap-2 p-2 rounded-lg transition-colors" style={{
                background: 'var(--color-surface)'
              }}>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{
                  background: 'var(--color-primary)'
                }}>
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <ChevronDown className="w-4 h-4" style={{
                  color: 'var(--color-text)'
                }} />
                </button>

                {showProfile && <>
                    <div className="fixed inset-0 z-40" onClick={() => setShowProfile(false)} />
                    <motion.div initial={{
                  opacity: 0,
                  y: -10
                }} animate={{
                  opacity: 1,
                  y: 0
                }} className="absolute right-0 mt-2 w-48 rounded-xl shadow-xl z-50" style={{
                  background: 'var(--color-card)',
                  border: '1px solid var(--color-border)',
                  boxShadow: 'var(--shadow-xl)'
                }}>
                      <div className="p-2">
                        <button onClick={() => navigate('/shelter/settings')} className="w-full text-left px-4 py-2 rounded-lg transition-colors" style={{
                      color: 'var(--color-text)'
                    }}>
                          Settings
                        </button>
                        <button className="w-full text-left px-4 py-2 rounded-lg transition-colors" style={{
                      color: 'var(--color-error)'
                    }}>
                          Logout
                        </button>
                      </div>
                    </motion.div>
                  </>}
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-1 px-8 overflow-x-auto">
            {tabs.map(tab => {
            const Icon = tab.icon;
            return <button key={tab.id} onClick={() => setActiveTab(tab.id)} className="relative flex items-center gap-2 px-4 py-3 transition-colors whitespace-nowrap" style={{
              color: activeTab === tab.id ? 'var(--color-primary)' : 'var(--color-text-light)'
            }}>
                  <Icon className="w-4 h-4" />
                  <span className="font-medium">{tab.label}</span>
                  {activeTab === tab.id && <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5" style={{
                background: 'var(--color-primary)'
              }} transition={{
                type: 'spring',
                stiffness: 500,
                damping: 30
              }} />}
                </button>;
          })}
          </div>
        </header>

        {/* Tab Content */}
        <div className="flex-1 p-8 overflow-y-auto">
          <AnimatePresence mode="wait">
            <motion.div key={activeTab} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} exit={{
            opacity: 0,
            y: -20
          }} transition={{
            duration: 0.3
          }}>
              {activeTab === 'overview' && <div className="space-y-8">
                  {/* Stats Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {stats.map((stat, index) => <StatCard key={stat.title} {...stat} index={index} />)}
                  </div>

                  {/* Recent Applications */}
                  <Card padding="lg">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-2xl font-bold" style={{
                    color: 'var(--color-text)'
                  }}>
                        Recent Applications
                      </h2>
                      <Button variant="outline" size="sm" onClick={() => navigate('/shelter/applications')}>
                        View All
                      </Button>
                    </div>
                    <div className="space-y-3">
                      {recentApplications.map((app, index) => <motion.div key={app.id} initial={{
                    opacity: 0,
                    x: -20
                  }} animate={{
                    opacity: 1,
                    x: 0
                  }} transition={{
                    duration: 0.3,
                    delay: index * 0.05
                  }} className="flex items-center justify-between p-4 rounded-xl cursor-pointer transition-all hover:scale-[1.01]" style={{
                    background: 'var(--color-surface)'
                  }} onClick={() => navigate(`/shelter/applications/${app.id}`)}>
                          <div className="flex-1">
                            <h4 className="font-semibold mb-1" style={{
                        color: 'var(--color-text)'
                      }}>
                              {app.applicant}
                            </h4>
                            <p className="text-sm" style={{
                        color: 'var(--color-text-light)'
                      }}>
                              Wants to adopt{' '}
                              <span style={{
                          color: 'var(--color-primary)'
                        }}>
                                {app.pet}
                              </span>{' '}
                              • {app.date}
                            </p>
                          </div>
                          <Badge variant={app.status === 'approved' ? 'success' : app.status === 'pending' ? 'info' : app.status === 'meet-greet' ? 'warning' : 'neutral'}>
                            {app.status === 'meet-greet' ? 'Meet & Greet' : app.status}
                          </Badge>
                        </motion.div>)}
                    </div>
                  </Card>

                  {/* Adoption Trends Chart */}
                  <Card padding="lg">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h2 className="text-2xl font-bold" style={{
                      color: 'var(--color-text)'
                    }}>
                          Adoption Trends
                        </h2>
                        <p className="text-sm" style={{
                      color: 'var(--color-text-light)'
                    }}>
                          Last 6 months
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <TrendingUp className="w-4 h-4" style={{
                      color: 'var(--color-success)'
                    }} />
                        <span style={{
                      color: 'var(--color-success)'
                    }}>
                          +15% this month
                        </span>
                      </div>
                    </div>

                    {/* Simple Bar Chart */}
                    <div className="flex items-end justify-between gap-4 h-48">
                      {[65, 78, 82, 90, 95, 108].map((value, index) => <div key={index} className="flex-1 flex flex-col items-center gap-2">
                          <motion.div initial={{
                      height: 0
                    }} animate={{
                      height: `${value / 108 * 100}%`
                    }} transition={{
                      duration: 0.5,
                      delay: 0.7 + index * 0.1
                    }} className="w-full rounded-t-xl" style={{
                      background: index === 5 ? 'var(--color-primary)' : 'var(--color-secondary)',
                      opacity: index === 5 ? 1 : 0.6
                    }} />
                          <span className="text-xs" style={{
                      color: 'var(--color-text-light)'
                    }}>
                            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'][index]}
                          </span>
                        </div>)}
                    </div>
                  </Card>
                </div>}

              {activeTab === 'pets' && <div className="text-center py-20">
                  <PawPrint className="w-16 h-16 mx-auto mb-4" style={{
                color: 'var(--color-text-light)'
              }} />
                  <h3 className="text-xl font-semibold mb-2" style={{
                color: 'var(--color-text)'
              }}>
                    Pets Management
                  </h3>
                  <p className="mb-6" style={{
                color: 'var(--color-text-light)'
              }}>
                    View and manage all your listed pets
                  </p>
                  <Button variant="primary" onClick={() => navigate('/shelter/manage-pets')}>
                    Go to Pets Management
                  </Button>
                </div>}

              {activeTab === 'applications' && <div className="text-center py-20">
                  <CheckCircle className="w-16 h-16 mx-auto mb-4" style={{
                color: 'var(--color-text-light)'
              }} />
                  <h3 className="text-xl font-semibold mb-2" style={{
                color: 'var(--color-text)'
              }}>
                    Applications
                  </h3>
                  <p className="mb-6" style={{
                color: 'var(--color-text-light)'
              }}>
                    Review and manage adoption applications
                  </p>
                  <Button variant="primary" onClick={() => navigate('/shelter/applications')}>
                    View All Applications
                  </Button>
                </div>}

              {activeTab === 'messages' && <div className="text-center py-20">
                  <MessageSquare className="w-16 h-16 mx-auto mb-4" style={{
                color: 'var(--color-text-light)'
              }} />
                  <h3 className="text-xl font-semibold mb-2" style={{
                color: 'var(--color-text)'
              }}>
                    Messages
                  </h3>
                  <p className="mb-6" style={{
                color: 'var(--color-text-light)'
              }}>
                    Chat with potential adopters
                  </p>
                  <Button variant="primary" onClick={() => navigate('/shelter/messages')}>
                    Open Messages
                  </Button>
                </div>}

              {/* Other tabs can be similarly implemented */}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>;
}