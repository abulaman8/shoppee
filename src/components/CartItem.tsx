import React from 'react'
import { Card } from 'react-bootstrap';
import { useGetData } from '../hooks/useGetData'
import { CProduct } from '../pages/Cart'


type Product = {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
  }

  type GetResponseType = {
    isPending: boolean,
    error: string | null,
    data: Product| null
  }


export const CartItem = ({ discountedPrice, total, discountPercentage, quantity, price, title, id }: CProduct) => {
    const {data, isPending, error}: GetResponseType = useGetData('https://dummyjson.com/products/'+id)
  return (
    <>
    
    {data && <Card style={{
        color: "black"
      }}>
          <Card.Img 
          variant='top' 
          src={(data as Product).thumbnail}
          height = "200px"
          style={{objectFit: "cover"}}
          />
          <Card.Body className='d-flex flex-column'>
              <Card.Title className='d-flex justify-content-between align-items-baseline mb-4'>
                  <small><span>{title}</span></small>
                  <span className='ms-2 text-muted'>${price}</span>
              </Card.Title>
              <Card.Subtitle   className='d-flex justify-content-between align-items-baseline mb-4'>
              <span>Quantity:</span>
                  <span className='ms-2 text-muted'>{quantity}</span>
              </Card.Subtitle>
              <Card.Footer className='d-flex justify-content-between align-items-baseline mb-4'>
              <span>Total</span>
              <span className='ms-2 text-muted'>${total}</span>
              </Card.Footer>
              
          </Card.Body>
      </Card>
      }
      </>
  )
}
