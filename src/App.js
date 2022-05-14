import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Restaurant from './Components/Restaurant/Restaurant';
import Meal from './Components/Meal/Meal';
import Ingredients from './Components/Ingredients/Ingredients';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      
     <Routes>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="restaurant" element={<Restaurant />} />
        <Route exact path="/" element={<Restaurant />} />
        <Route exact path="meal" element={<Meal />} />
        <Route exact path="meal/:userId" element={<Ingredients />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </div>
  );
}

export default App;
