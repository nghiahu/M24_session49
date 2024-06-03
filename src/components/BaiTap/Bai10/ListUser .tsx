// ListUser.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface User {
  id: number;
  name: string;
  email: string;
  address: string;
}

const ListUser: React.FC = () => {
  const users: User[] = [
    { id: 1, name: 'Nguyễn Văn A', email: 'nva@gmail.com', address: 'Hà Nội' },
    { id: 2, name: 'Nguyễn Văn B', email: 'nvb@gmail.com', address: 'Hà Nam' },
    { id: 3, name: 'Nguyễn Văn C', email: 'nvc@gmail.com', address: 'Ninh Bình' },
  ];

  return (
    <div className="list-user">
      {users.map((user) => (
        <div key={user.id} className="user-card">
          <p><strong>Id:</strong> {user.id}</p>
          <p><strong>UserName:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Address:</strong> {user.address}</p>
          <Link to={`/user/${user.id}`}>
            <button>Xem chi tiết</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ListUser;
