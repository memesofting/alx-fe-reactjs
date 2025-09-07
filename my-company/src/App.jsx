import { Routes, Route } from 'react-router-dom';
import Services from "./components/Services";
import Contact from "./components/Contact";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

// export const router = createBrowserRouter([
//   { path: "/about", element: <About /> },
//   { path: "/services", element: <Services />,},
//   { path: "/contact", element: <Contact />, },
//   { path: "/", element: <Home />, },
// ]);

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
