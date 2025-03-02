import React, { useState } from 'react';
import Input from '../Common/Input';
import styles from './OrganisationLogin.module.css';
import Button from '../Common/Button';
import { Link } from 'react-router-dom';

export default function OrganisationLogin() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{8,}$/;


  const validateField = (name, value) => {
    let errorMessage = '';

    if (name === 'email') {
      if (!value.trim()) errorMessage = 'Email is required.';
      else if (!emailRegex.test(value)) errorMessage = 'Invalid email format.';
    }

    if (name === 'password') {
      if (!value.trim()) errorMessage = 'Password is required.';

    }

    setErrors((prevErrors) => ({ ...prevErrors, [name]: errorMessage }));
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
    validateField(name, value);
  };

  const isFormValid = () => {
    return Object.values(errors).every((err) => err === '') &&
           form.email.trim() &&
           form.password.trim();
  };

  const onClick = () => {
    if (!form.email.trim()) {
      alert('Email is required.');
      return;
    }
  
    if (!form.password.trim()) {
      alert('Password is required.');
      return;
    }
  
    if (isFormValid()) {
      console.log('Login Form Data:', form);
      setForm({ email: '', password: '' });
    }
  };
  

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Login Organisation</h3>

      <div className={styles.inputWrapper}>
        <Input 
          label="Email" 
          name="email" 
          value={form.email} 
          onChange={onChange} 
          className={errors.email ? styles.inputError : ''}
        />
        {errors.email && <p className={styles.error}>{errors.email}</p>}
      </div>
      
      <div className={styles.inputWrapper}>
        <Input 
          label="Password" 
          name="password" 
          type="password" 
          value={form.password} 
          onChange={onChange} 
          className={errors.password ? styles.inputError : ''}
        />
        {errors.password && <p className={styles.error}>{errors.password}</p>}
      </div>

      <div className={styles.button}>
        <Button text='Login' onClick={onClick} disabled={!isFormValid()} />
      </div>

      <div className={styles.login}>
        Don't have an Account?
        <Link to="/auth/signup/organisation">Create One</Link>
      </div>
    </div>
  );
}
