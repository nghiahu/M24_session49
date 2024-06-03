import React from 'react';
import { useParams } from 'react-router-dom';

interface UserDetailProps {
  users: User[];
}

interface User {
  id: number;
  name: string;
  email: string;
  address: string;
}

const UserDetail: React.FC<UserDetailProps> = ({ users }) => {
  const { id } = useParams<{ id: any }>();
  const user = users.find((user) => user.id === parseInt(id));

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className="user-detail">
      <h2>{user.name}</h2>
      <p><strong>ID:</strong> {user.id}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Address:</strong> {user.address}</p>
    </div>
  );
};

export default UserDetail;
