import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { UserAuthContext } from "../context/UserAuthContext";
import { toast } from 'react-toastify'


const Login = () => {
  const { login, googleSignIn } = useContext(UserAuthContext)
  const [formData, setFormData] = useState({ email: '', password: '' })
  const { email, password } = formData
  const navigate = useNavigate()
  const HandleGoogleLogin = async (e) => {
    e.preventDefault()
    try {
      await googleSignIn()
      navigate('/home')
    } catch (error) {
      toast.error(error.message)
    }
  }
  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      await login(email, password)
      navigate('/home')
    } catch (error) {
      toast.error(error.message)
    }
    setFormData({ email: '', password: '' })
  }
  return (
    <>
      <div className="p-4 box">
        <h2 className="mb-3">Firebase Auth Login</h2>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Log In
            </Button>
          </div>
        </Form>
        <hr />
        <div>
          <GoogleButton
            className="g-btn"
            type="dark"
            onClick={HandleGoogleLogin}
          />
        </div>
      </div>
      <div className="p-4 box mt-3 text-center">
        Don't have an account? <Link to="/signup">Sign up</Link>
      </div>
    </>
  );
};

export default Login;
