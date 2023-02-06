import React, { FormEventHandler, useContext, useState } from 'react'
import { Alert, Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'



type LoginError = {
  message: string | null
}

type LoginSuccess = {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string
  image: string;
  token: string;
}

export const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const { user, setUser } = useContext(UserContext)
  const navigate = useNavigate()

  const handleLogin = (e: SubmitEvent) => {
    e.preventDefault()
    const data = {username, password}
    const url = 'https://dummyjson.com/auth/login'
    fetch(url, {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(data)
                })
                  .then(res => res.json())
                  .then(data => {
                    if(data.message){
                      throw Error(data.message)
                    }
                    setUser(data)
                    localStorage.setItem('token', data.token)
                    navigate('/')
                    
                  })
                  .catch(
                    err => {
                      setError(err)
                    }
                  )

  }

  return (
    <>
        {error && (
          <Alert key="danger" variant="danger">
            {error}
        </Alert>
        )}
        <div className="d-flex flex-column justify-content-around">
          <Form onSubmit={handleLogin as unknown as FormEventHandler<HTMLFormElement>}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="Enter username" 
            required={true} 
            value={username}
            onChange={(e)=> setUsername(e.target.value)}
            />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control 
              type="password" 
              placeholder="Password" 
              required={true} 
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">Submit</Button>
          </Form>
        </div>
    </>
    )
  }