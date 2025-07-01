import React from 'react';
import { BellIcon, MagnifyingGlassIcon, CalendarIcon } from '@heroicons/react/24/solid'; 


function TopBar(props) {
    const { userName, showSearch = true, onSearch, profilePic} = props;

    return (
        <div className="bg-white shadow-md rounded-lg px-6 py-4 flex justify-between items-center z-50">
            {/* Search Bar */}
            {showSearch && (
                <div className="relative w-1/3 max-w-sm"> 
                    <input
                        type="text"
                        placeholder="Search tasks..."
                        onChange={onSearch}
                        className="border 
                                border-gray-300 rounded-4xl 
                                pl-10 pr-4 py-2 w-full 
                                focus:outline-none focus:ring-2 
                                focus:ring-blue-400 placeholder-gray-500 
                                placeholder-italic text-gray-800"
                    />
                    <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
            )}

            {/* Ikon dan Profil Pengguna */}
            <div className="flex items-center gap-32">

                <div className='flex items-center gap-4'>
                    <button className="bg-gray-50 border-1 border-gray-100 p-2 rounded-full hover:bg-gray-100 transition-colors">
                        <BellIcon className="w-7 h-7 text-blue-500" />
                    </button>
                     <button className="bg-gray-50 border-1 border-gray-100 p-2 rounded-full hover:bg-gray-100 transition-colors">
                        <CalendarIcon className="w-7 h-7 text-blue-500" />
                    </button>
                </div>
    

                {/* Area Profil Pengguna */}
                <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-700 font-bold">Hi, {userName}!</span>
                    {profilePic ? (
                        <img
                            src={profilePic}
                            alt="Profile"
                            className="w-10 h-10 rounded-full object-cover border border-gray-200"
                        />
                    ) : (
                        <div className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center text-blue-800 text-sm font-bold">
                            {userName ? userName[0].toUpperCase() : 'U'}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default TopBar;