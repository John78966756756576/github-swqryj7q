import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutDashboard, Calendar, Settings, User, Menu, X } from 'lucide-react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import CalendarView from './components/CalendarView';
import GoalsView from './components/GoalsView';
import SettingsView from './components/SettingsView';
import ProgressView from './components/ProgressView';
import ParticleBackground from './components/ParticleBackground';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentView, setCurrentView] = useState('dashboard');

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-[#121212] overflow-hidden">
      <ParticleBackground />
      
      <AnimatePresence mode="wait">
        {isSidebarOpen && (
          <motion.div
            initial={{ x: -280 }}
            animate={{ x: 0 }}
            exit={{ x: -280 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-y-0 left-0 z-30"
          >
            <Sidebar 
              onClose={() => setIsSidebarOpen(false)} 
              currentView={currentView}
              onViewChange={setCurrentView}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex-1">
        <motion.header 
          className="flex justify-between items-center px-6 py-4 bg-[#1a1a1a]/80 backdrop-blur-lg border-b border-[#2a2a2a] relative z-20"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <div className="flex items-center">
            <motion.button
              onClick={toggleSidebar}
              className="p-2 hover:bg-[#2a2a2a] rounded-lg mr-4"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isSidebarOpen ? (
                <X className="w-5 h-5 text-gray-400" />
              ) : (
                <Menu className="w-5 h-5 text-gray-400" />
              )}
            </motion.button>
            <motion.h1 
              className="text-2xl font-bold text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Habit Flow
            </motion.h1>
          </div>
          <motion.div 
            className="flex items-center space-x-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <motion.div 
              className="w-10 h-10 rounded-full bg-[#2a2a2a] flex items-center justify-center overflow-hidden"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <User className="w-6 h-6 text-gray-400" />
            </motion.div>
          </motion.div>
        </motion.header>
        
        <main className="relative z-10">
          <AnimatePresence mode="wait">
            {currentView === 'dashboard' && <Dashboard key="dashboard" />}
            {currentView === 'calendar' && <CalendarView key="calendar" />}
            {currentView === 'progress' && <ProgressView key="progress" />}
            {currentView === 'goals' && <GoalsView key="goals" />}
            {currentView === 'settings' && <SettingsView key="settings" />}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}

export default App;