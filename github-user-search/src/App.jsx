import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Search from "./components/Search";
import './index.css'

function App() {
  return (
    // <h1 className="text-4xl font-bold text-blue-600">
    //     Tailwind is working 🎉
    //   </h1>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Search />
    </BrowserRouter>
  );
}

export default App;
