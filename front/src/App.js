import './App.css';
import {Route,Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Library from './Pages/Library';
import Motivational from './Pages/Motivational';
import Realaxing from './Pages/Realaxing.js';
import Hardcore from './Pages/Hardcore.js';
import Slow from './Pages/Slow.js';
import Customize from './Pages/Customize.js';

function App() {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/library' element={<Library/>} />
        <Route path='/library/motivational' element={<Motivational/>} />
        <Route path='/library/realaxing' element={<Realaxing/>} />
        <Route path='/library/hard-core' element={<Hardcore/>} />
        <Route path='/library/slow-vibes' element={<Slow/>} />
        <Route path='/library/customize' element={<Customize/>} />
    </Routes>

  );
}

export default App;
