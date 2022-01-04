import React, { useState } from "react";
import UserTable from "./tables/UserTable";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const usersData = [
    { id: 1, firstname: "Tolu", lastname: "Oba" },
    { id: 2, firstname: "Ope", lastname: "Dada" },
    { id: 3, firstname: "John", lastname: "Peters" },
  ];

  const [users, setUsers] = useState(usersData);

  return (
    <div className="container">
      <h1>React CRUD app</h1>
      <div className="flex-row">
        <div className="d-flex justify-content-between">
          <div className="flex-large">
            <h2>Add user</h2>
          </div>
          <div className="flex-large">
            <h2>View users</h2>
            <UserTable users={users} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
