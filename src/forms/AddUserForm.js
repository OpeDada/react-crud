import React, { useState } from "react";

const AddUserForm = (props) => {
  const initialFormState = { id: null, firstname: "", lastname: "" };
  const [user, setUser] = useState(initialFormState);

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
