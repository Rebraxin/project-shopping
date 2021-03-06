// == Import npm
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Row } from 'react-bootstrap'

// == Import local
import { listProducts } from '../actions/productAction'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'

// == Component
const HomeScreen = () => {
  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products } = productList

  console.log(products)

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  return (
    <>
      {/* {products.map((product) => (
        <p>test = {product._id}</p>
      ))} */}

      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  )
}

// == Export
export default HomeScreen
