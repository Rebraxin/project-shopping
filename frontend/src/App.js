// == Import npm
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'

// == Import local
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'

// == Component
const App = () => (
  <Router>
    <Header />
    <main className="py-3">
      <Container>
        <Route path="/login" component={LoginScreen} />
        <Route path="/register" component={RegisterScreen} />
        <Route path="/product/:id" component={ProductScreen} />
        <Route path='/cart/:id?' component={CartScreen} />
        <Route path="/" component={HomeScreen} exact />
      </Container>
    </main>
    <Footer />
  </Router>
)

// == Export
export default App
