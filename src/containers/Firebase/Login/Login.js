import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hook/useAuth';

const Login = () => {

    const { signInUsingGoogle, setEmail, setPassword} = useAuth();
  
    const navigate = useNavigate();
    const location = useLocation();
    const url = location.state?.from || '/'
    
     
      const handleGoogleLogin = () => {
          signInUsingGoogle()
            .then(result => {
                console.log(result);
                navigate(url);
            })
    }
    const handleEmailChange = e => {
      setEmail(e.target.value);
  }
  const handlePasswordChange = e => {
      setPassword(e.target.value)
  }


    return (
        <div>
            <Container
                className='form-container'>
             <Row>
                    <Col
                        lg={12}
                        sm={12}
                        className='p-5 form'>
                        <div
                            className='login-box'>
                            <img className='login-img'
                                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkUBqv-bTk6iwdgHWXeivdRJ5reFlFqXKt5g&usqp=CAU'
                                alt="" /> 
            </div>
                        <h2
                            style={{
                                color: '#062a4d',
                                fontWeight: '700'
                            }}><i class="fas fa-sign-in-alt"></i> Sign In</h2>
                        <Form
                            className='mt-3'>

                            <Form.Group
                                className="mb-3">
                                <Form.Control
                                    onChange={handleEmailChange} type="email"
                                    placeholder="Enter email" required />
           </Form.Group>
      
           <Form.Group className="mb-3">
                                <Form.Control
                                    onChange={handlePasswordChange} type="password" placeholder="Password" />
           </Form.Group>
      
                            <a className='ml-3'
                                href="forgotPassword">Forgot Password?</a> <br />

                            <Button
                                className='btn-block' variant="secondary" type="submit">Submit
           </Button>

                            <h5
                                className='text-primary'>New to Royal Wrists?
                                <Link to='/register'>Create Account ?</Link>
                            </h5>   
      
                            <div
                                className='text-danger'>------Sign in with------</div>
                            <Button
                                onClick={handleGoogleLogin} className='btn-google' type="submit">
                                <i className="fab fa-google"></i>  Google
                 </Button>
                </Form>
              </Col>
            </Row>
          </Container> 
        </div>
    );
};

export default Login;