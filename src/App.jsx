import React from 'react';
import './index.css';
import TopBar from './components/TopBar';
import Sidebar from './components/Sidebar';
import TaskList from './components/TaskList';


function App() {
  const logoText = "MateTask"; // Nama aplikasi untuk logo di Sidebar
  const userName = "Nadilah"; // Nama pengguna untuk TopBar
  const profilePic = "https://via.placeholder.com/32/ADD8E6/000000?text=N"; 

  const handleSearch = (e) => {
    console.log("Search query:", e.target.value);
  };

  //const welcomePageTitle = "Welcome to MateTask";
  //const welcomePageSubtitle = "Your Mate for Managing Your Tasks";

  const Tasks = [
    {
      id: 't1',
      title: "Tugas 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      dueDate: "2024-07-05",
      priority: "High",
      status: "In Progress"
    },
    {
      id: 't2',
      title: "Tugas 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      dueDate: "2024-07-01",
      priority: "Medium",
      status: "To Do"
    },
    {
      id: 't3',
      title: "Tugas 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      dueDate: "2024-07-10",
      priority: "Low",
      status: "Completed"
    }
  ];


  return (
    <div className='flex min-h-screen bg-gray-100 font-sans antialiased'> {/* Main kontainer */}

      <Sidebar logo={logoText} />

      <div className='flex-1 flex flex-col p-6'>
        <TopBar
          userName={userName}
          showSearch={true}
          onSearch={handleSearch}
          profilePic={profilePic}
        />

        {/* Main Content Area */}
        <main className='flex-1 mt-6 overflow-auto'>
            <div className="bg-white p-8 rounded-lg shadow-md min-h-full">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Tasks</h2>
                <TaskList tasks={Tasks} />
            </div>
          </main>
      </div>
    </div>
  );
}

export default App;