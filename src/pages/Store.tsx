import React from 'react'
import { Container, Card, Button, Row, Col } from "react-bootstrap"
import { Link } from 'react-router-dom';
import { StoreItem } from '../components/StoreItem';
import { useGetData } from '../hooks/useGetData'

interface Product {
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

interface Data {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

interface GetDataResponse {
  data: Data | null;
  error: string | null;
  isPending: boolean;
}


export const Store = () => {

  const { data, isPending, error }:  GetDataResponse = useGetData('https://dummyjson.com/products/?limit=100');
  



  return (
    <Container>
      {isPending && <h1 style={{color: "white"}}>Loading...</h1>}
      <Row md={2} xs={1} lg={3} className="g-5">
        {error && <p>{error}</p>}
      {
        data &&  ((data as Data).products as Product[]).map(item => (

          <Col>
            <Link to={`/products/${item.id}`} style={{
              textDecoration: "None"
            }}>
              <StoreItem {...item} />
            </Link>
          </Col>

        ))
        }

      </Row>

    </Container>
  )
}
