import './App.css';
import {ChakraProvider} from "@chakra-ui/react";
import Header from './components/common/Header';
// import Footer from './components/common/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import AboutUs from './components/Miscelleneous/about/AboutUs'
import PrincipalMessage from './components/Miscelleneous/about/PrincipalMessage'
import AdmissionOverview from './components/Miscelleneous/admission/AdmissionOverview';
import AdmissionProcess from './components/Miscelleneous/admission/AdmissionProcess';
import AcedmicCalendar from './components/Miscelleneous/admission/AcadmicCalendar';
import TeachingStaff from './pages/TeachingStaff';
import NonTeachingStaff from './pages/NonTeachingStaff';

function App() {
  return (
    <ChakraProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about-school" element={<AboutUs />} />
        <Route path="/principal-message" element={<PrincipalMessage />} />
        <Route path="/admission-overview" element={<AdmissionOverview />} />
        <Route path="/admission-process" element={<AdmissionProcess />} />
        <Route path="/academic-calendar" element={<AcedmicCalendar />} />
        <Route path="/teaching-staff" element={<TeachingStaff />} />
        <Route path="/non-teaching-staff" element={<NonTeachingStaff />} />
      </Routes>
      {/* <Footer /> */}
    </ChakraProvider>
  );
}

export default App;
