import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, Check, X, PawPrint, FileText, User, Settings } from 'lucide-react';
import { Button } from './Button';
interface Notification {
  id: string;
  type: 'application' | 'pet' | 'system' | 'user';
  title: string;
  message: string;
  time: string;
  read: boolean;
}
const mockNotifications: Notification[] = [{
  id: '1',
  type: 'application',
  title: 'New Application',
  message: 'Sarah Johnson applied for Luna',
  time: '2 mins ago',
  read: false
}, {
  id: '2',
  type: 'pet',
  title: 'Pet Adopted',
  message: 'Max has been marked as adopted',
  time: '1 hour ago',
  read: false
}, {
  id: '3',
  type: 'system',
  title: 'System Update',
  message: 'Dashboard features updated',
  time: '1 day ago',
  read: true
}];
export function NotificationCenter() {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState(mockNotifications);
  const unreadCount = notifications.filter(n => !n.read).length;
  const markAllRead = () => {
    setNotifications(notifications.map(n => ({
      ...n,
      read: true
    })));
  };
  const markRead = (id: string) => {
    setNotifications(notifications.map(n => n.id === id ? {
      ...n,
      read: true
    } : n));
  };
  const getIcon = (type: string) => {
    switch (type) {
      case 'application':
        return <FileText className="w-4 h-4 text-blue-500" />;
      case 'pet':
        return <PawPrint className="w-4 h-4 text-orange-500" />;
      case 'user':
        return <User className="w-4 h-4 text-green-500" />;
      default:
        return <Settings className="w-4 h-4 text-gray-500" />;
    }
  };
  return <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)} className="relative p-2 rounded-xl hover:bg-gray-100 transition-colors">
        <Bell className="w-6 h-6 text-gray-600" />
        {unreadCount > 0 && <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white" />}
      </button>

      <AnimatePresence>
        {isOpen && <>
            <div className="fixed inset-0 z-30" onClick={() => setIsOpen(false)} />
            <motion.div initial={{
          opacity: 0,
          y: 10,
          scale: 0.95
        }} animate={{
          opacity: 1,
          y: 0,
          scale: 1
        }} exit={{
          opacity: 0,
          y: 10,
          scale: 0.95
        }} className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-gray-100 z-40 overflow-hidden">
              <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-gray-50">
                <h3 className="font-bold text-gray-900">Notifications</h3>
                {unreadCount > 0 && <button onClick={markAllRead} className="text-xs font-medium text-[var(--color-primary)] hover:underline">
                    Mark all read
                  </button>}
              </div>

              <div className="max-h-96 overflow-y-auto">
                {notifications.length > 0 ? <div className="divide-y divide-gray-50">
                    {notifications.map(notification => <motion.div key={notification.id} initial={{
                opacity: 0
              }} animate={{
                opacity: 1
              }} className={`p-4 hover:bg-gray-50 transition-colors cursor-pointer ${!notification.read ? 'bg-blue-50/30' : ''}`} onClick={() => markRead(notification.id)}>
                        <div className="flex gap-3">
                          <div className={`mt-1 p-2 rounded-full flex-shrink-0 ${!notification.read ? 'bg-white shadow-sm' : 'bg-gray-100'}`}>
                            {getIcon(notification.type)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className={`text-sm ${!notification.read ? 'font-semibold text-gray-900' : 'text-gray-600'}`}>
                              {notification.title}
                            </p>
                            <p className="text-xs text-gray-500 mt-0.5 truncate">
                              {notification.message}
                            </p>
                            <p className="text-[10px] text-gray-400 mt-1">
                              {notification.time}
                            </p>
                          </div>
                          {!notification.read && <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />}
                        </div>
                      </motion.div>)}
                  </div> : <div className="p-8 text-center text-gray-500">
                    <Bell className="w-8 h-8 mx-auto mb-2 text-gray-300" />
                    <p className="text-sm">No notifications</p>
                  </div>}
              </div>
            </motion.div>
          </>}
      </AnimatePresence>
    </div>;
}