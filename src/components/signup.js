import React, { useState } from "react";

function Signup() {
  const [inputs, setInputs] = useState({
    name: '',
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
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name: <input type="text" name="name" value={inputs.name} onChange={handleChange}/><br/>
          </label>
          <label>
            Email: <input type="email" name="email" value={inputs.email} onChange={handleChange}/><br/>
          </label>
          <label> 
            Password: <input type="password" name="password" value={inputs.password} onChange={handleChange} /><br/>
          </label>
          <label>
            Confirm Password:<input type="password" name="confirmPassword" onChange={handleChange}/><br/>
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Signup;
