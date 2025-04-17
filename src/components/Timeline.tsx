import React from 'react';
import { motion } from 'framer-motion';

const Timeline = () => {
  const timelineData = [
    { id: 1, title: 'Morning Routine', progress: 75, color: '#22c55e' },
    { id: 2, title: 'Workout', progress: 100, color: '#f97316' },
    { id: 3, title: 'Reading', progress: 50, color: '#ffffff' },
  ];

  return (
    <motion.div 
      className="space-y-4"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1
          }
        }
      }}
    >
      {timelineData.map((item) => (
        <motion.div 
          key={item.id} 
          className="space-y-2"
          variants={{
            hidden: { opacity: 0, x: -20 },
            visible: { opacity: 1, x: 0 }
          }}
        >
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">{item.title}</span>
            <span className="text-gray-400">{item.progress}%</span>
          </div>
          <div className="h-2 bg-[#2a2a2a] rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ backgroundColor: item.color }}
              initial={{ width: 0 }}
              animate={{ width: `${item.progress}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default Timeline;