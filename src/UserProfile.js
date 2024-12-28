import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get('https://randomuser.me/api/?page=1&results=1&seed=abc')
      .then(response => {
        setUser(response.data.results[0]);
      })
      .catch(error => {
        console.error('Error fetching the user data:', error);
      });
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="flex items-center px-6 py-4">
        <img className="w-24 h-24 rounded-full mx-auto" src={user.picture.large} alt="User" />
        <div className="mx-4">
          <h2 className="text-xl font-semibold text-gray-800">{user.name.first} {user.name.last}</h2>
          <p className="text-gray-600">Gender: {user.gender}</p>
          <p className="text-gray-600">Phone: {user.phone}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
