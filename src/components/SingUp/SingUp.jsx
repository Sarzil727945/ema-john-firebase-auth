import React, { useContext, useState } from 'react';
import './SingUp.css'
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const SingUp = () => {
    const {singUp} = useContext(AuthContext)

    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')

     const handelRegister = (event) =>{
          event.preventDefault();
          setError('')
          setSuccess('')
          const form = event.target;
          const email = form.email.value;
          const password = form.password.value;
          const conformPassword = form.ConformPassword.value;
          console.log(email, password, conformPassword);

          if (password !== conformPassword) {
            setError('Your password did not match')
            return
          }
          else if (!/(?=.*[A-Z])/.test(password)) {
            setError('At least one upper case')
            return
          }
          else if (password.length < 6) {
            setError('Password must be 6 characters')
            return
          }

          singUp(email, password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            form.reset()
            setSuccess('Your Account SuccessFull')
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage)
            // ..
          });

      }

     return (
          <div className='w-25 mx-auto mt-5'>
          <Form onSubmit={handelRegister}>
              <h1 className='text-center text-info'>Sing Up</h1>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" name='email' placeholder="Enter email" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" name='password' placeholder="Password" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Conform Password</Form.Label>
                  <Form.Control type="password" name='ConformPassword' placeholder="Password" required />
                  <p className='mt-3 text-danger'>{error}</p>
                  <p className='mt-3 text-success'>{success}</p>
              </Form.Group>
              <div className="d-grid gap-2">
                  <Button type="submit" variant="primary" size="lg">
                      Sing Up
                  </Button>
              </div>
              <p className='mt-1 text-center'><small>Already have an account?</small> <Link to='/login'> Login</Link></p>
          </Form>
      </div>
     );
};

export default SingUp;