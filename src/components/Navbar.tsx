import React, { useContext } from 'react'
import { Container ,Nav,Navbar as Nb, Button} from "react-bootstrap"
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import { useAuth } from '../hooks/useAuth'
// import { transform } from 'typescript'

export const Navbar = () => {
    const  {user, setUser} = useContext(UserContext)
    const {token, isLoggedIn } = useAuth()
    const navigate = useNavigate()
    const logout = ()=>{
        localStorage.removeItem('token')
        setUser(null)
        navigate('/login')
    }

  return (
    
        <Nb sticky='top' className='bg-white shadow-md mb-3' data-bs-theme="dark">
            <Container>
                <Nav className='me-auto'>
                <Nb.Brand>SHOPPEE</Nb.Brand>
                    <Nav.Link to = "/" as={NavLink}>
                        Home
                    </Nav.Link>
                    <Nav.Link to = "/about" as={NavLink}>
                        About
                    </Nav.Link>
                </Nav>
                <div>
                {isLoggedIn === false ? (
                    <Link to='/login'><Button variant='dark'>Login</Button></Link>
                ) : (
                    <>
                    <Button variant='success' onClick={()=>navigate('/cart')} style={{
                        marginRight: "10px"
                    
                         }}>Cart
                         
                         </Button>
                         <Button variant='dark' onClick={()=>{logout()}}>Logout</Button>
                         </>
                         
                )}
                    
                </div>
            </Container>

        </Nb>
    
  )
}
