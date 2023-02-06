import React, { useContext } from 'react'
import { Container, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { CartItem } from '../components/CartItem';
import { UserContext } from '../context/UserContext';
import { useGetData } from '../hooks/useGetData'


export type CProduct = {
  id: number,
  title: string,
  price: number,
  quantity: number,
  total: number,
  discountPercentage: number,
  discountedPrice: number
};

type CartObject = {
  id: number,
  products: CProduct[],
  total: number,
  discountedTotal: number,
  userId: number,
  totalProducts: number,
  totalQuantity: number
};

type CartData = {
  carts: CartObject[],
  total: number,
  skip: number,
  limit: number
};

type GetResponseType = {
  isPending: boolean,
  error: string | null,
  data: CartData| null
}





export const Cart = ({id}:{id: number | null}) => {
  const  {user, setUser} = useContext(UserContext)
  const navigate = useNavigate()
  const uid = user ? user.id: null
  if(uid===null){
    navigate('/login')

  }
  const {isPending, error, data}: GetResponseType = useGetData('https://dummyjson.com/carts/user/'+uid)
  const cart: CartObject | null = data ? (data as CartData).carts[0]: null
  const products: CProduct[] | null = cart?.products ? cart.products: null
  
  

  
  return (
    <>
    
    <Container>
    {isPending && <h1 style={{color: "white"}}>Loading...</h1>}

      <Row md={2} xs={1} lg={3} className="g-5">
        {error && <p>{error}</p>}
    {
      products && products.map( item => (
        <Link to={`/products/${item.id}`} style={{
          textDecoration: "None"
        }}>
          <CartItem {...item} />
        </Link>

      )

      )
    }
    </Row>

</Container>
    </>
  )
}
