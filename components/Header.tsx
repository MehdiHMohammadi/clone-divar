import React from 'react';
import { useAuth } from '../contexts/AuthContext';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  setCurrentPage: (page: 'home' | 'auth' | 'profile') => void;
}

const SearchIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
    </svg>
);

const UserIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
    </svg>
);


const Header: React.FC<HeaderProps> = ({ searchQuery, setSearchQuery, setCurrentPage }) => {
  const { session, signOut } = useAuth();

  const handleLogout = async () => {
    await signOut();
    setCurrentPage('home');
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center space-x-4 space-x-reverse flex-shrink-0">
           <h1 onClick={() => setCurrentPage('home')} className="text-2xl font-bold text-red-600 cursor-pointer">دیوار</h1>
        </div>
        <div className="relative w-full max-w-xl">
          <input
            type="text"
            placeholder="جستجو در همه آگهی‌ها..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-gray-100 border border-transparent rounded-md py-2 pr-10 pl-4 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <SearchIcon className="h-5 w-5 text-gray-400" />
          </div>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          {session ? (
            <>
              <button 
                onClick={() => setCurrentPage('profile')}
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-red-600 transition-colors px-3 py-2 rounded-md hover:bg-gray-100"
              >
                <UserIcon className="w-5 h-5" />
                <span>دیوار من</span>
              </button>
               <button 
                onClick={handleLogout}
                className="text-sm text-gray-600 hover:text-red-600 transition-colors px-3 py-2 rounded-md hover:bg-gray-100"
              >
                خروج
              </button>
            </>
          ) : (
             <button 
                onClick={() => setCurrentPage('auth')}
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-red-600 transition-colors px-3 py-2 rounded-md hover:bg-gray-100"
              >
                <UserIcon className="w-5 h-5" />
                <span>ورود | ثبت‌نام</span>
              </button>
          )}
        </div>
      </div>
       <hr/>
    </header>
  );
};

export default Header;
