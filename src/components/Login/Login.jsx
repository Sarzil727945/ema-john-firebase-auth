import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const Login = () => {
    const {singIn} = useContext(AuthContext)

    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')

    const handelLogin = (event) =>{
        event.preventDefault();
        setError('')
        setSuccess('')
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        singIn(email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            setSuccess('SuccessFull')
            form.reset()
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage)
          });
    }

    return (
        <div className='w-25 mx-auto mt-5'>
            <Form onSubmit={handelLogin}>
                <h1 className='text-center text-info'>Login</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                    <p className='mt-3 text-danger'>{error}</p>
                  <p className='mt-3 text-success'>{success}</p>
                </Form.Group>
                <div className="d-grid gap-2">
                    <Button type="submit" variant="primary" size="lg">
                        Login
                    </Button>
                </div>
                <p className='mt-1 text-center'><small>New to Ema-john?</small> <Link to='/singUp'>  Create New Account</Link></p>
            </Form>
        </div>
    );
};

export default Login;