import React from 'react';
import TaskCard from './TaskCard'; 

function TaskList({ tasks }) {
  if (!tasks || tasks.length === 0) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-md flex items-center justify-center text-gray-400 text-lg">
        Tidak ada tugas yang tersedia.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4"> 
      {tasks.map(task => (
        <TaskCard
          key={task.id} 
          task={task}   
        />
      ))}
    </div>
  );
}

export default TaskList;