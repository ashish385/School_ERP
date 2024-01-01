import './App.css';
import {ChakraProvider} from "@chakra-ui/react";
import Header from './components/common/Header';
// import Footer from './components/common/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <ChakraProvider>
        <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {/* <Footer /> */}
    </ChakraProvider>
  );
}

export default App;
