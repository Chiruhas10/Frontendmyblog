import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';

import Header from './Blog/Header';
import Footer from './Blog/Footer';
import Routing from './Blog/Routing';
import { createContext, useState } from 'react';

export const store = createContext();


function App() {

  const [token, setToken] = useState("");

  return (
    <store.Provider value={[token, setToken]}>
        <Header />
        <Routing />
        <Footer />
      
      
    </store.Provider>
  );
}

export default App;
