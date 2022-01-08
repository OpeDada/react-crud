import React, { useState } from "react";
import UserTable from "./tables/UserTable";
import AddUserForm from "./forms/AddUserForm";
import EditUserForm from "./forms/EditUserForm";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const usersData = [
    { id: 1, firstname: "Tolu", lastname: "Oba" },
    { id: 2, firstname: "Ope", lastname: "Dada" },
    { id: 3, firstname: "John", lastname: "Peters" },
  ];

  const [users, setUsers] = useState(usersData);

  const initialFormState = { id: null, firstname: "", lastname: "" };
  const [CurrentUser, setCurrentUser] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const editUser = (user) => {
    setEditing(true);

    setCurrentUser({
      id: user.id,
      firstname: user.firstname,
      lastname: user.lastname,
    });
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);

    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  const deleteUser = (id) => {
    alert("Are you sure?");
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="container">
      <h1>React CRUD app</h1>
      <div className="flex-row">
        <div className="d-flex justify-content-between">
          <div className="flex-large">
            {editing ? (
              <div>
                <h2>Edit User</h2>
                <EditUserForm
                  setEditing={setEditing}
                  currentUser={currentUser}
                  updateUser={updateUser}
                />
              </div>
            ) : (
              <div>
                <h2>Add user</h2>
                <AddUserForm addUser={addUser} />
              </div>
            )}
          </div>
          <div className="flex-large">
            <h2>View users</h2>
            <UserTable
              users={users}
              editUser={editUser}
              deleteUser={deleteUser}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
