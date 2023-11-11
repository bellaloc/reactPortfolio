import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Profile from '../components/UI/ProfileSections/ProfileDetailed';

import API from '../utils/API';

export default function ProfilePage() {
  const [user, setUser] = useState({});
  const { id } = useParams();

  const fetchData = async () => {
    const { data } = await API.getSingleUser(id);
    setUser(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>
        {user.name ? <Profile user={user} /> : <p>Loading...</p>}
      </div>
      <footer className="profile-footer">
        <Link to="/">← Go Back</Link>
      </footer>
    </>
  );
}
