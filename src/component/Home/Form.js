import React, { useState } from 'react';

const Form = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here (e.g., sending data to server)
    console.log('Registration form submitted');
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Password:', password);
    // Reset form fields
    setFullName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className='py-10 flex justify-center items-center'>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Form;
