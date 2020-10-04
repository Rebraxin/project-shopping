// == Import npm
import React from 'react';
import { Col, Row } from 'react-bootstrap';

// == Import local
import Product from '../components/Product';
import products from '../products';

// == Component
const HomeScreen = () => (
  <>
    <h1>Latest Products</h1>
    <Row>
      {products.map((product) => (
        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
          <Product product={product} />
        </Col>
      ))}
    </Row>
  </>
);

// == Export
export default HomeScreen;
