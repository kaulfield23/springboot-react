import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

type usersType = {
  username: "";
  email: "";
  name: "";
  id: number;
};
const Home = () => {
  const [users, setUsers] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    if (typeof process.env.REACT_APP_URL_PATH === "string") {
      const result = await axios.get(`${process.env.REACT_APP_URL_PATH}/users`);
      setUsers(result.data);
    }
  };

  const deleteUser = async (id) => {
    await axios.delete(`${process.env.REACT_APP_URL_PATH}/user/${id}`);
    loadUsers();
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
                <td>
                  <Link
                    to={`viewuser/${user.id}`}
                    className="btn btn-primary mx-2"
                  >
                    View
                  </Link>
                  <Link
                    to={`/edituser/${user.id}`}
                    className="btn btn-outline-primary mx-2"
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
