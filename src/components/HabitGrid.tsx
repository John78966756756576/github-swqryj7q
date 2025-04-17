import React from 'react';
import { motion } from 'framer-motion';

const HabitGrid = () => {
  const days = Array.from({ length: 30 }, (_, i) => i);
  const habits = ['Exercise', 'Meditation', 'Reading'];
  const colors = ['#22c55e', '#f97316', '#ffffff'];

  return (
    <div className="overflow-x-auto">
      <div className="grid gap-4">
        {habits.map((habit, habitIndex) => (
          <div key={habit} className="flex items-center space-x-4">
            <span className="text-sm text-gray-400 w-24">{habit}</span>
            <div className="flex gap-2">
              {days.map((day) => {
                const completed = Math.random() > 0.3;
                return (
                  <motion.div
                    key={`${habit}-${day}`}
                    className={`w-6 h-6 rounded-full cursor-pointer`}
                    style={{
                      backgroundColor: colors[habitIndex],
                      opacity: completed ? 1 : 0.2
                    }}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: 1, 
                      opacity: completed ? 1 : 0.2,
                      transition: { delay: day * 0.02 }
                    }}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HabitGrid;