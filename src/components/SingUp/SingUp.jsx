import React from 'react';
import './SingUp.css'
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingUp = () => {

     const handelRegister = (event) =>{
          event.preventDefault();
          const form = event.target;
          const email = form.email.value;
          const password = form.password.value;
          const conformPassword = form.ConformPassword.value;
          console.log(email, password, conformPassword);
      }

     return (
          <div className='w-25 mx-auto mt-5'>
          <Form onSubmit={handelRegister}>
              <h1 className='text-center text-info'>Login</h1>
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
              </Form.Group>
              <div className="d-grid gap-2">
                  <Button type="submit" variant="primary" size="lg">
                      Login
                  </Button>
              </div>
              <p className='mt-1 text-center'><small>Already have an account?</small> <Link to='/login'> Login</Link></p>
          </Form>
      </div>
     );
};

export default SingUp;