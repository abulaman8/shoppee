import {Routes, Route} from "react-router-dom"
import { Container } from "react-bootstrap"
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { About } from "./pages/About";
import { Navbar } from "./components/Navbar"
import { Product } from "./pages/Product";
import { Login } from "./pages/Login";
import { User, UserContext,  } from "./context/UserContext";
import { useState } from "react";
import { Cart } from "./pages/Cart";



function App() {
  const [user, setUser] = useState<User | null>(null);
  return (
    <>
    <Navbar />
    <Container className="mb-4">
    <UserContext.Provider value={{user, setUser}}>
        <Routes>
          
          <Route path="/" element={<Store />}></Route>
          <Route path="/store" element={<Store />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/products/:pid" element={<Product />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/cart"  element={<Cart id={user ? user.id: null}/>}></Route>

          

        </Routes>
        </UserContext.Provider>
      </Container>
      </>

  );
}

export default App;
