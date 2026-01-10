import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Plus, List, MessageSquare, Settings, LogOut, PawPrint, Calendar, FileText } from 'lucide-react';
export function ShelterSidebar() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const menuItems = [{
    path: '/shelter/dashboard',
    icon: LayoutDashboard,
    label: 'Dashboard'
  }, {
    path: '/shelter/add-pet',
    icon: Plus,
    label: 'Add Pet'
  }, {
    path: '/shelter/manage-pets',
    icon: List,
    label: 'Manage Pets'
  }, {
    path: '/shelter/applications',
    icon: FileText,
    label: 'Applications'
  }, {
    path: '/shelter/meet-and-greet',
    icon: Calendar,
    label: 'Meet & Greet'
  }, {
    path: '/shelter/messages',
    icon: MessageSquare,
    label: 'Messages'
  }, {
    path: '/shelter/settings',
    icon: Settings,
    label: 'Settings'
  }];
  return <aside className="w-64 min-h-screen p-6 border-r flex flex-col" style={{
    background: 'var(--color-card)',
    borderColor: 'var(--color-border)'
  }}>
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2 mb-8">
        <div className="p-2 rounded-xl" style={{
        background: 'var(--color-primary)'
      }}>
          <PawPrint className="w-6 h-6 text-white" />
        </div>
        <div>
          <span className="text-lg font-bold block" style={{
          color: 'var(--color-text)'
        }}>
            PetMate
          </span>
          <span className="text-xs" style={{
          color: 'var(--color-text-light)'
        }}>
            Shelter Portal
          </span>
        </div>
      </Link>

      {/* Menu Items */}
      <nav className="space-y-2 flex-1">
        {menuItems.map(item => <Link key={item.path} to={item.path} className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all" style={{
        background: isActive(item.path) ? 'var(--color-primary)' : 'transparent',
        color: isActive(item.path) ? 'white' : 'var(--color-text)',
        opacity: isActive(item.path) ? 1 : 0.7
      }}>
            <item.icon className="w-5 h-5" />
            <span className="font-medium">{item.label}</span>
          </Link>)}
      </nav>

      {/* Logout */}
      <button className="flex items-center gap-3 px-4 py-3 rounded-xl w-full transition-all hover:bg-red-50" style={{
      color: 'var(--color-error)'
    }}>
        <LogOut className="w-5 h-5" />
        <span className="font-medium">Logout</span>
      </button>
    </aside>;
}