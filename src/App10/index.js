import { useState } from "react";

import axios from "axios";

const App10 = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [message, setMessage] = useState("");

  const onFirstNameChange = (event) => {
    setFirstName(event.currentTarget.value);
  };

  const clearForm = () => {
    setFirstName("");
    setLastName("");
  };

  const onLastNameChange = (event) => {
    setLastName(event.currentTarget.value);
  };

  const submitForm = async (event) => {
    event.preventDefault();

    const dataToSend = {
      firstName: firstName,
      lastName: lastName,
    };

    setMessage("Loading...");

    try {
      const res = await axios.post(
        "https://placeholder.typicode.com/posts",
        dataToSend
      );

      setMessage(`Your form has been submitted with ID ${res.data.id}`);
      clearForm();
    } catch (error) {
      setMessage(`Error submitting form- ${error.message}`);
    }
  };

  return (
    <form onSubmit={submitForm}>
      <fieldset>
        <legend>User Info</legend>

        <label for="first_name">First Name:</label>
        <input id="first_name" value={firstName} onChange={onFirstNameChange} />

        <br />

        <label for="last_name">Last Name:</label>
        <input id="last_name" value={lastName} onChange={onLastNameChange} />

        <br />

        <button>Submit</button>
      </fieldset>
      <div>{message}</div>
    </form>
  );
};

export default App10;
