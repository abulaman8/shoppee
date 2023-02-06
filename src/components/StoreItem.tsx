import React from 'react'
import { Button, Card } from 'react-bootstrap';


type StoreItemProps = {
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


export const StoreItem = ({id, title, description, price,discountPercentage , rating, stock, brand, category, thumbnail, images}: StoreItemProps) => {
  return (
    <Card style={{
      color: "black"
    }}>
        <Card.Img 
        variant='top' 
        src={thumbnail}
        height = "200px"
        style={{objectFit: "cover"}}
        />
        <Card.Body className='d-flex flex-column'>
            <Card.Title className='d-flex justify-content-between align-items-baseline mb-4'>
                <small><span >{title}</span></small>
                <span className='ms-2 text-muted'>${price}</span>
            </Card.Title>
            <Button variant='dark'>Buy</Button>
        </Card.Body>
    </Card>
  )
}
