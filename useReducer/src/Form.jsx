import React, { useReducer, useState } from "react";
const initialState = {
  name: "",
  email: "",
  password: "",
  errors: {},
};

const formReducer = (state, action) => {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.name]: action.value };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

const Form = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const [flag, setFlag] = useState(false);

  function handleChange(e) {
    setFlag(false);
    const { name, value } = e.target;
    dispatch({ type: "SET_FIELD", name: name, value: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setFlag(true);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={handleChange}
          value={state.name}
        />
        <br />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={handleChange}
          value={state.email}
        />
        <br />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleChange}
          value={state.password}
        />
        <br />
        <button type="submit">Submit</button>
        <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      </form>
      {flag ? (
        <>
          <h1>Name: {state.name}</h1>
          <h1>Email: {state.email}</h1>
          <h1>Password: {state.password}</h1>
        </>
      ) : (
        <div>No details found</div>
      )}
    </>
  );
};

export default Form;
