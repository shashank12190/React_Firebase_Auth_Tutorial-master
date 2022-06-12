import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { UserAuthContext } from "../context/UserAuthContext";
import { toast } from 'react-toastify'


const Signup = () => {
  const { signup } = useContext(UserAuthContext)
  const [formData, setFormData] = useState({ email: '', password: '' })
  const { email, password } = formData
  const navigate = useNavigate()
  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      await signup(email, password)
    } catch (error) {
      toast.error(error.message)
    }
    navigate('/')
  }
  return (
    <>
      <div className="p-4 box">
        <h2 className="mb-3">Firebase Auth Signup</h2>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value, })}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value, })}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Sign up
            </Button>
          </div>
        </Form>
      </div>
      <div className="p-4 box mt-3 text-center">
        Already have an account? <Link to="/">Log In</Link>
      </div>
    </>
  );
};

export default Signup;
