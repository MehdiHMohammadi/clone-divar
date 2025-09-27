import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const ProfilePage: React.FC = () => {
  const { user, signOut } = useAuth();

  return (
    <div className="max-w-4xl mx-auto my-10 p-8 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-800 border-b pb-4 mb-6">پنل کاربری</h1>
      {user ? (
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold text-gray-700">اطلاعات حساب</h2>
            <p className="text-gray-600">
              <span className="font-medium">ایمیل:</span> {user.email}
            </p>
             <p className="text-gray-600">
              <span className="font-medium">آخرین ورود:</span> {user.last_sign_in_at ? new Date(user.last_sign_in_at).toLocaleString('fa-IR') : 'نامشخص'}
            </p>
          </div>
          <button
            onClick={signOut}
            className="px-6 py-2 font-semibold text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
          >
            خروج از حساب کاربری
          </button>
        </div>
      ) : (
        <p>در حال بارگذاری اطلاعات کاربر...</p>
      )}
    </div>
  );
};

export default ProfilePage;
