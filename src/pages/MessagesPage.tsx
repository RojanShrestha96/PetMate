import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Send, Paperclip, MoreVertical, User } from 'lucide-react';
import { ShelterSidebar } from '../components/ShelterSidebar';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
interface Conversation {
  id: string;
  name: string;
  lastMessage: string;
  time: string;
  unread: number;
  avatar: string;
  petName: string;
}
export function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState<string | null>('1');
  const [messageText, setMessageText] = useState('');
  const conversations: Conversation[] = [{
    id: '1',
    name: 'Rajesh Kumar',
    lastMessage: 'Thank you for considering my application!',
    time: '2 min ago',
    unread: 2,
    avatar: 'https://ui-avatars.com/api/?name=Rajesh+Kumar&background=D4745C&color=fff',
    petName: 'Luna'
  }, {
    id: '2',
    name: 'Sita Sharma',
    lastMessage: 'When can I schedule a meet and greet?',
    time: '1 hour ago',
    unread: 0,
    avatar: 'https://ui-avatars.com/api/?name=Sita+Sharma&background=7C9885&color=fff',
    petName: 'Max'
  }, {
    id: '3',
    name: 'Amit Thapa',
    lastMessage: 'I have all the documents ready',
    time: '3 hours ago',
    unread: 1,
    avatar: 'https://ui-avatars.com/api/?name=Amit+Thapa&background=F4A261&color=fff',
    petName: 'Bella'
  }];
  const messages = [{
    id: '1',
    sender: 'them',
    text: "Hello! I'm interested in adopting Luna. Can you tell me more about her?",
    time: '10:30 AM'
  }, {
    id: '2',
    sender: 'me',
    text: "Hi Rajesh! Luna is a wonderful companion. She's very friendly and great with kids.",
    time: '10:35 AM'
  }, {
    id: '3',
    sender: 'them',
    text: 'That sounds perfect! I have two children aged 6 and 8.',
    time: '10:37 AM'
  }, {
    id: '4',
    sender: 'me',
    text: 'Great! Luna would love that. Have you filled out the adoption application?',
    time: '10:40 AM'
  }, {
    id: '5',
    sender: 'them',
    text: 'Yes, I submitted it yesterday. Thank you for considering my application!',
    time: '10:42 AM'
  }];
  const handleSendMessage = () => {
    if (messageText.trim()) {
      // Handle send message
      setMessageText('');
    }
  };
  return <div className="flex min-h-screen" style={{
    background: 'var(--color-background)'
  }}>
      <ShelterSidebar />

      <main className="flex-1 flex" style={{
      height: 'calc(100vh - 0px)'
    }}>
        {/* Conversations List */}
        <div className="w-80 border-r flex flex-col" style={{
        background: 'var(--color-card)',
        borderColor: 'var(--color-border)'
      }}>
          {/* Search */}
          <div className="p-4 border-b" style={{
          borderColor: 'var(--color-border)'
        }}>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5" style={{
              color: 'var(--color-text-light)'
            }} />
              <input type="text" placeholder="Search messages..." className="w-full pl-10 pr-4 py-2 rounded-xl border-2 focus:outline-none transition-colors" style={{
              borderColor: 'var(--color-border)',
              background: 'var(--color-surface)',
              color: 'var(--color-text)'
            }} />
            </div>
          </div>

          {/* Conversation List */}
          <div className="flex-1 overflow-y-auto">
            {conversations.map((conv, index) => <motion.button key={conv.id} initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.3,
            delay: index * 0.05
          }} onClick={() => setSelectedConversation(conv.id)} className="w-full p-4 border-b transition-colors text-left" style={{
            background: selectedConversation === conv.id ? 'var(--color-surface)' : 'transparent',
            borderColor: 'var(--color-border)'
          }}>
                <div className="flex items-start gap-3">
                  <div className="relative">
                    <img src={conv.avatar} alt={conv.name} className="w-12 h-12 rounded-full" />
                    {conv.unread > 0 && <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{
                  background: 'var(--color-primary)'
                }}>
                        {conv.unread}
                      </div>}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-semibold truncate" style={{
                    color: 'var(--color-text)'
                  }}>
                        {conv.name}
                      </h4>
                      <span className="text-xs" style={{
                    color: 'var(--color-text-light)'
                  }}>
                        {conv.time}
                      </span>
                    </div>
                    <p className="text-sm mb-1" style={{
                  color: 'var(--color-text-light)'
                }}>
                      Re: {conv.petName}
                    </p>
                    <p className="text-sm truncate" style={{
                  color: 'var(--color-text-light)'
                }}>
                      {conv.lastMessage}
                    </p>
                  </div>
                </div>
              </motion.button>)}
          </div>
        </div>

        {/* Chat Area */}
        {selectedConversation ? <div className="flex-1 flex flex-col" style={{
        background: 'var(--color-background)'
      }}>
            {/* Chat Header */}
            <div className="p-4 border-b flex items-center justify-between" style={{
          background: 'var(--color-card)',
          borderColor: 'var(--color-border)'
        }}>
              <div className="flex items-center gap-3">
                <img src={conversations.find(c => c.id === selectedConversation)?.avatar} alt="Avatar" className="w-10 h-10 rounded-full" />
                <div>
                  <h3 className="font-semibold" style={{
                color: 'var(--color-text)'
              }}>
                    {conversations.find(c => c.id === selectedConversation)?.name}
                  </h3>
                  <p className="text-sm" style={{
                color: 'var(--color-text-light)'
              }}>
                    Interested in{' '}
                    {conversations.find(c => c.id === selectedConversation)?.petName}
                  </p>
                </div>
              </div>
              <button className="p-2 rounded-lg hover:bg-opacity-10" style={{
            background: 'var(--color-surface)'
          }}>
                <MoreVertical className="w-5 h-5" style={{
              color: 'var(--color-text)'
            }} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((message, index) => <motion.div key={message.id} initial={{
            opacity: 0,
            y: 10
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.3,
            delay: index * 0.05
          }} className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-md px-4 py-3 rounded-2xl ${message.sender === 'me' ? 'rounded-br-sm' : 'rounded-bl-sm'}`} style={{
              background: message.sender === 'me' ? 'var(--color-primary)' : 'var(--color-card)',
              color: message.sender === 'me' ? 'white' : 'var(--color-text)'
            }}>
                    <p className="text-sm mb-1">{message.text}</p>
                    <p className="text-xs" style={{
                color: message.sender === 'me' ? 'rgba(255,255,255,0.7)' : 'var(--color-text-light)'
              }}>
                      {message.time}
                    </p>
                  </div>
                </motion.div>)}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t" style={{
          background: 'var(--color-card)',
          borderColor: 'var(--color-border)'
        }}>
              <div className="flex items-end gap-3">
                <button className="p-3 rounded-xl hover:bg-opacity-10" style={{
              background: 'var(--color-surface)'
            }}>
                  <Paperclip className="w-5 h-5" style={{
                color: 'var(--color-text)'
              }} />
                </button>
                <div className="flex-1">
                  <textarea value={messageText} onChange={e => setMessageText(e.target.value)} onKeyPress={e => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage();
                }
              }} placeholder="Type a message..." className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none transition-colors resize-none" style={{
                borderColor: 'var(--color-border)',
                background: 'var(--color-surface)',
                color: 'var(--color-text)'
              }} rows={1} />
                </div>
                <Button variant="primary" icon={<Send className="w-5 h-5" />} onClick={handleSendMessage} disabled={!messageText.trim()}>
                  Send
                </Button>
              </div>
            </div>
          </div> : <div className="flex-1 flex items-center justify-center" style={{
        background: 'var(--color-background)'
      }}>
            <div className="text-center">
              <User className="w-16 h-16 mx-auto mb-4" style={{
            color: 'var(--color-text-light)'
          }} />
              <p style={{
            color: 'var(--color-text-light)'
          }}>
                Select a conversation to start messaging
              </p>
            </div>
          </div>}
      </main>
    </div>;
}