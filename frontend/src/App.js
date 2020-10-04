// == Import npm
import React from 'react';
import { Container } from 'react-bootstrap';

// == Import local
import Header from './components/Header';
import Footer from './components/Footer';

// == Component
const App = () => (
  <div>
    <Header />
    <main className="py-3">
      <Container>
        <h1>Welcome to ProShop</h1>
      </Container>
    </main>
    <Footer />
  </div>
);

// == Export
export default App;
