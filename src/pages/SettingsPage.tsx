import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, Mail, Phone, MapPin, Lock, Bell, Trash2, Save } from 'lucide-react';
import { ShelterSidebar } from '../components/ShelterSidebar';
import { Card } from '../components/Card';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { ToggleSwitch } from '../components/ToggleSwitch';
export function SettingsPage() {
  const [shelterInfo, setShelterInfo] = useState({
    name: 'Kathmandu Animal Shelter',
    location: 'Thamel, Kathmandu',
    contact: '+977 98-1234567',
    email: 'info@kathmandushelter.org',
    description: 'A caring shelter dedicated to finding homes for pets in need.'
  });
  const [accountSettings, setAccountSettings] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    adoptionRequests: true,
    messages: true,
    weeklyReport: false
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
            Settings
          </h1>
          <p style={{
          color: 'var(--color-text-light)'
        }}>
            Manage your shelter profile and account preferences
          </p>
        </div>

        <div className="max-w-4xl space-y-6">
          {/* Shelter Profile */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }}>
            <Card padding="lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl" style={{
                background: 'var(--color-primary)',
                opacity: 0.1
              }}>
                  <Building2 className="w-6 h-6" style={{
                  color: 'var(--color-primary)'
                }} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold" style={{
                  color: 'var(--color-text)'
                }}>
                    Shelter Profile
                  </h2>
                  <p className="text-sm" style={{
                  color: 'var(--color-text-light)'
                }}>
                    Update your shelter information
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                <Input label="Shelter Name" value={shelterInfo.name} onChange={e => setShelterInfo({
                ...shelterInfo,
                name: e.target.value
              })} icon={<Building2 className="w-5 h-5" />} fullWidth />
                <Input label="Location" value={shelterInfo.location} onChange={e => setShelterInfo({
                ...shelterInfo,
                location: e.target.value
              })} icon={<MapPin className="w-5 h-5" />} fullWidth />
                <div className="grid grid-cols-2 gap-4">
                  <Input label="Contact Number" type="tel" value={shelterInfo.contact} onChange={e => setShelterInfo({
                  ...shelterInfo,
                  contact: e.target.value
                })} icon={<Phone className="w-5 h-5" />} fullWidth />
                  <Input label="Email" type="email" value={shelterInfo.email} onChange={e => setShelterInfo({
                  ...shelterInfo,
                  email: e.target.value
                })} icon={<Mail className="w-5 h-5" />} fullWidth />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{
                  color: 'var(--color-text)'
                }}>
                    Description
                  </label>
                  <textarea className="w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-colors" style={{
                  borderColor: 'var(--color-border)',
                  background: 'var(--color-card)',
                  color: 'var(--color-text)'
                }} rows={4} value={shelterInfo.description} onChange={e => setShelterInfo({
                  ...shelterInfo,
                  description: e.target.value
                })} />
                </div>
                <Button variant="primary" icon={<Save className="w-4 h-4" />}>
                  Save Changes
                </Button>
              </div>
            </Card>
          </motion.div>

          {/* Account Security */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.1
        }}>
            <Card padding="lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl" style={{
                background: 'var(--color-secondary)',
                opacity: 0.1
              }}>
                  <Lock className="w-6 h-6" style={{
                  color: 'var(--color-secondary)'
                }} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold" style={{
                  color: 'var(--color-text)'
                }}>
                    Account Security
                  </h2>
                  <p className="text-sm" style={{
                  color: 'var(--color-text-light)'
                }}>
                    Update your password and security settings
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                <Input label="Current Password" type="password" value={accountSettings.currentPassword} onChange={e => setAccountSettings({
                ...accountSettings,
                currentPassword: e.target.value
              })} icon={<Lock className="w-5 h-5" />} fullWidth />
                <Input label="New Password" type="password" value={accountSettings.newPassword} onChange={e => setAccountSettings({
                ...accountSettings,
                newPassword: e.target.value
              })} icon={<Lock className="w-5 h-5" />} fullWidth />
                <Input label="Confirm New Password" type="password" value={accountSettings.confirmPassword} onChange={e => setAccountSettings({
                ...accountSettings,
                confirmPassword: e.target.value
              })} icon={<Lock className="w-5 h-5" />} fullWidth />
                <Button variant="primary" icon={<Save className="w-4 h-4" />}>
                  Update Password
                </Button>
              </div>
            </Card>
          </motion.div>

          {/* Notification Preferences */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }}>
            <Card padding="lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl" style={{
                background: 'var(--color-accent)',
                opacity: 0.1
              }}>
                  <Bell className="w-6 h-6" style={{
                  color: 'var(--color-accent)'
                }} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold" style={{
                  color: 'var(--color-text)'
                }}>
                    Notifications
                  </h2>
                  <p className="text-sm" style={{
                  color: 'var(--color-text-light)'
                }}>
                    Manage your notification preferences
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <ToggleSwitch checked={notifications.emailNotifications} onChange={checked => setNotifications({
                ...notifications,
                emailNotifications: checked
              })} label="Email Notifications" description="Receive email updates about your shelter" />
                <ToggleSwitch checked={notifications.adoptionRequests} onChange={checked => setNotifications({
                ...notifications,
                adoptionRequests: checked
              })} label="Adoption Requests" description="Get notified when someone requests to adopt" />
                <ToggleSwitch checked={notifications.messages} onChange={checked => setNotifications({
                ...notifications,
                messages: checked
              })} label="Messages" description="Receive notifications for new messages" />
                <ToggleSwitch checked={notifications.weeklyReport} onChange={checked => setNotifications({
                ...notifications,
                weeklyReport: checked
              })} label="Weekly Report" description="Get a weekly summary of your shelter's activity" />
              </div>
            </Card>
          </motion.div>

          {/* Danger Zone */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.3
        }}>
            <Card padding="lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl" style={{
                background: 'var(--color-error)',
                opacity: 0.1
              }}>
                  <Trash2 className="w-6 h-6" style={{
                  color: 'var(--color-error)'
                }} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold" style={{
                  color: 'var(--color-text)'
                }}>
                    Danger Zone
                  </h2>
                  <p className="text-sm" style={{
                  color: 'var(--color-text-light)'
                }}>
                    Irreversible actions
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl border-2" style={{
              borderColor: 'var(--color-error)',
              background: 'var(--color-surface)'
            }}>
                <h3 className="font-semibold mb-2" style={{
                color: 'var(--color-text)'
              }}>
                  Delete Account
                </h3>
                <p className="text-sm mb-4" style={{
                color: 'var(--color-text-light)'
              }}>
                  Once you delete your account, there is no going back. All your
                  data will be permanently removed.
                </p>
                <Button variant="outline" icon={<Trash2 className="w-4 h-4" />} className="border-2" style={{
                borderColor: 'var(--color-error)',
                color: 'var(--color-error)'
              }}>
                  Delete Account
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </main>
    </div>;
}