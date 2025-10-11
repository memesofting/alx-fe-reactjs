import React, { useState } from 'react';

const RegistrationForm = () => {
  // State for each input field
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  // Validation logic
  const validate = () => {
    const newErrors = {};
    if (!username.trim()) newErrors.username = 'Username is required';
    if (!email.trim()) newErrors.email = 'Email is required';
    if (!password.trim()) newErrors.password = 'Password is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      // Submit logic here (e.g., API call)
      console.log('Form submitted:', { username, email, password });
      // reset form
      setUsername('');
      setEmail('');
      setPassword('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='bg-gray-500 flex flex-col justify-center items-center'>
      <h2 className='font-extrabold'>Register</h2>

      <div >
        <label>Username:</label>
        <input
        className='bg-gray-300 m-2'
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {errors.username && <span >{errors.username}</span>}
      </div>

      <div>
        <label>Email:</label>
        <input
        className='bg-gray-300 m-2'
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <span >{errors.email}</span>}
      </div>

      <div>
        <label>Password:</label>
        <input
        className='bg-gray-300 m-2'
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <span>{errors.password}</span>}
      </div>

      <button className='bg-red-300 m-2 p-2' type="submit">Submit</button>
    </form>
  );
};

export default RegistrationForm;
