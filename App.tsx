import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import ProfilePage from './pages/ProfilePage';
import { useAuth } from './contexts/AuthContext';

type Page = 'home' | 'auth' | 'profile';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [searchQuery, setSearchQuery] = useState('');
  const { session } = useAuth();

  useEffect(() => {
    // Redirect logic
    if (currentPage === 'profile' && !session) {
      setCurrentPage('auth');
    }
    // After successful login, if user is on auth page, redirect to profile
    if (currentPage === 'auth' && session) {
      setCurrentPage('profile');
    }
     // After logout, if user is on profile page, redirect to home
    if(currentPage === 'profile' && !session) {
        setCurrentPage('home');
    }
  }, [currentPage, session]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage searchQuery={searchQuery} />;
      case 'auth':
        return <AuthPage onAuthSuccess={() => setCurrentPage('home')} />;
      case 'profile':
         if (session) {
          return <ProfilePage />;
        }
        // Fallback to home if no session, useEffect will handle redirect
        return <HomePage searchQuery={searchQuery} />;
      default:
        return <HomePage searchQuery={searchQuery} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Header
        setCurrentPage={setCurrentPage}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      {renderPage()}
    </div>
  );
}

export default App;
