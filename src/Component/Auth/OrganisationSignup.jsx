import React from 'react'
import Input from '../Common/Input'
import styles from './OrganisationSignup.module.css'
import Button from '../Common/Button'
import { Link } from 'react-router-dom'

export default function OrganisationSignup() {

  const onClick = () => {}

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Create Organisation Account</h3>
      <div className={styles.name}> 
        <Input label="Firstname" />
        <Input label="Lastname" /> 
      </div>
      <div>
      <Input label="Email" />
      </div>
      <div>
      <Input label="Phone" />
      <Input label="Country" />
      </div>
      <div>
      <Input label="Job Title" />
      </div>
      <div>
      <Input label="Company" />
      <Input label="Employees" />
      </div>
      
      <div className={styles.policy}>
        <input type="checkbox" name="policy" id="" />
        <p>I agree to the <a href="#">Terms and Conditions</a></p>
      </div>

      <div className={styles.button}>
        <Button text='Create Account' onClick={onClick} />
      </div>

      <div className={styles.login}>
        Have an Account ?
        <Link to="/auth/login/organisation">Login</Link>
      </div>

    </div>
  )
}
