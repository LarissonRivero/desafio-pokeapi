import NotFound from "./Views/NotFound";
import Home from "./Components/Home";
import Pokemones from "./Components/Pokemones";
import PokemonView from "./Components/PokemonView";

import Navbar from "./Views/Navbar";
import Footer from "./Views/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} exact/>
            <Route path="/pokemones" element={<Pokemones />}/>
            <Route path="/pokemones/:name" element={<PokemonView/>}/>
            <Route path="*" element={<NotFound />}/>
          </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
