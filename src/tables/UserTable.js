import React from "react";

const UserTable = () => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>UserName</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Name info</td>
        <td>UserName info</td>
        <td>
          <button className="button muted-button">Edit</button>
          <button className="button muted-button">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
);

export default UserTable;
