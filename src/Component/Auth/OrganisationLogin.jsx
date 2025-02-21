import React from 'react'
import Input from '../Common/Input'
import styles from './OrganisationLogin.module.css'
import Button from '../Common/Button'
import { Link } from 'react-router-dom'

export default function OrganisationLogin() {

  const onClick = () => {}

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Login Organisation</h3>
      <div>
      <Input label="Email" />
      </div>
      <div>
      <Input label="Password" />
      </div>
      
      

      <div className={styles.button}>
        <Button text='Login' onClick={onClick} />
      </div>

      <div className={styles.login}>
        Don't have an Account ?
        <Link to="/auth/signup/organisation">Create One</Link>
      </div>

    </div>
  )
}
