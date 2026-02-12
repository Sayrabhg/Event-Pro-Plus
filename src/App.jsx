
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import './App.css'
import './global.css'
// import Demo from "./Demo";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
          {/* <Route path="/demo" element={<Demo />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
