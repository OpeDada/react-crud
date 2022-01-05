import React, { useState } from "react";

const AddUserForm = (props) => {
  return (
    <form>
      <label>First Name</label>
      <input type="text" name="firstname" value="" />
      <label>Last Name</label>
      <input type="text" name="lastname" value="" />
      <button>Add new user</button>
    </form>
  );
};

export default AddUserForm;
