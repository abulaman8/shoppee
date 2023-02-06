import React, { useState } from 'react'
import { Button, Carousel } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useGetData } from '../hooks/useGetData';



export type ProductProps = {
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


type GetDataResponse = {
    data: ProductProps | null;
    error: string | null;
    isPending: boolean;
  }



export const Product = () => {
    const { pid } = useParams()
    console.log(pid)
    const url = `https://dummyjson.com/products/${pid}`
    console.log(url)
    const { data, isPending, error }:  GetDataResponse = useGetData(url);
    

    // const {id, title, description, price,discountPercentage , rating, stock, brand, category, thumbnail, images} = data as unknown as ProductProps

    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: React.SetStateAction<number>, e: any) => {
    setIndex(selectedIndex);
  };


  return (
    <> {error && <p>{error}</p>}
    {data && (
        <div className="d-flex flex-row flex-wrap justify-content-between mt-5">
        
        <div className="product-image" style={{
            maxWidth: "500px"
        }}>
        <Carousel activeIndex={index} onSelect={handleSelect}>
            {(data as unknown as ProductProps).images.map(item => (

                    <Carousel.Item>
                    <img
                    className="d-block"
                    src= {item}
                    alt = "product image"
                    height="500px"
                    width = "500px"
                    style={{
                        objectFit: "contain"
                    }}
                    />
                    </Carousel.Item>

            )

            )}
     
    </Carousel>
        </div>
        <div className="d-flex flex-column justify-content-between" style={{
            maxWidth: "400px"
        }}>
            <div>
                <h2>{(data as unknown as ProductProps).brand}</h2>
                <h4>{(data as unknown as ProductProps).title}</h4>
            </div>
            <small className="text-muted">{(data as unknown as ProductProps).category}</small>
            <p>{(data as unknown as ProductProps).description}. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, obcaecati. Est assumenda magni unde nulla perspiciatis ex quo excepturi, illo corrupti ipsam, dolores id. Vel officiis quae aspernatur dolores rerum ut ullam dicta, obcaecati distinctio natus tenetur unde animi perspiciatis debitis laborum, quo quibusdam omnis quos optio reiciendis vitae quas.</p>
            <div className="d-flex justify-content-between flex-row flex-wrap">
                <strong className='fs-2'>${(data as unknown as ProductProps).price}</strong>
                <Button variant='success' className='pl-1 pr-1'><strong>+ Add to Cart</strong></Button>
                <Button variant='light' className='pl-1 pr-1'><strong>Buy Now</strong></Button>
            </div>

        </div>

    </div>
    )}
    </>
   
    
  )
}
