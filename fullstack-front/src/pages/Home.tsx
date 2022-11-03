import React, { useEffect, useState } from "react";
import axios from "axios";

type usersType = {
  username: "";
  email: "";
  name: "";
};
const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    if (typeof process.env.REACT_APP_URL_PATH === "string") {
      const result = await axios.get(`${process.env.REACT_APP_URL_PATH}/users`);
      setUsers(result.data);
    }
  };
  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">userName</th>
              <th scope="col">email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user: usersType, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
