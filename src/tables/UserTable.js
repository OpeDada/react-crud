import React from "react";

const UserTable = (props) => (
  <table>
    <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map((user) => (
          <tr>
            <td>Firs Name info</td>
            <td>Last Name info</td>
            <td>
              <button className="button muted-button">Edit</button>
              <button className="button muted-button">Delete</button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users available</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default UserTable;
