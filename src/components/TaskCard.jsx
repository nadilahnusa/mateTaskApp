import React from 'react';

function TaskCard({ task }) { 
  if (!task) {
    return <div className="text-red-500">Error: Task data is missing!</div>;
  }

  // Logika untuk menentukan kelas warna latar belakang berdasarkan PRIORITAS
  let priorityColorClass = '';
  switch (task.priority) {
    case 'High':
      priorityColorClass = 'bg-red-500';
      break;
    case 'Medium':
      priorityColorClass = 'bg-yellow-500';
      break;
    case 'Low':
      priorityColorClass = 'bg-green-500';
      break;
    default:
      priorityColorClass = 'bg-gray-400'; 
  }

  // Logika untuk menentukan kelas warna latar belakang dan teks berdasarkan STATUS
  let statusColorClass = '';
  let statusTextColorClass = ''; 
  switch (task.status) {
    case 'To Do':
      statusColorClass = 'bg-red-100'; 
      statusTextColorClass = 'text-red-800'; 
      break;
    case 'In Progress':
      statusColorClass = 'bg-yellow-100'; 
      statusTextColorClass = 'text-yellow-800'; 
      break;
    case 'Completed':
      statusColorClass = 'bg-green-100'; 
      statusTextColorClass = 'text-green-800';
      break;
    default:
      statusColorClass = 'bg-gray-100';
      statusTextColorClass = 'text-gray-800';
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4 border border-gray-200">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold text-gray-800">{task.title}</h3>

        <span className={`text-xs font-medium text-white px-2 py-1 rounded-full ${priorityColorClass}`}>
          {task.priority}
        </span>
      </div>
      <p className="text-gray-600 text-sm mb-2">{task.description}</p>
      <div className="flex justify-between items-center text-xs text-gray-500">
        <span>Due: {task.dueDate}</span>
        {/* styling status */}
        <span className={`px-2 py-1 rounded-full ${statusColorClass} ${statusTextColorClass} font-medium`}>
  {task.status}
</span>
      </div>
    </div>
  );
}

export default TaskCard;