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

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onClick = () => {
    console.log("Login Form Data:", form);
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Login Organisation</h3>

      <div>
        <Input label="Email" name="email" value={form.email} onChange={onChange} />
      </div>
      
      <div>
        <Input label="Password" name="password" type="password" value={form.password} onChange={onChange} />
      </div>

      <div className={styles.button}>
        <Button text='Login' onClick={onClick} />
      </div>

      <div className={styles.login}>
        Don't have an Account?
        <Link to="/auth/signup/organisation">Create One</Link>
      </div>
    </div>
  );
}
  