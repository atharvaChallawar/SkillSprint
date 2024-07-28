import React, { useState } from "react";

function Login() {
  const [inputs, setInputs] = useState({
    email: '',
    password: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', inputs);
  };

  return (
    <div>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Email: <input type="email" name="email" value={inputs.email} onChange={handleChange}/>
          </label>
          <label>
            Password: <input type="password" name="password" value={inputs.password} onChange={handleChange}/>
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
