import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import Bookmark from './components/Bookmark';


function App() {
  return (<BrowserRouter>
    <Routes>
      <Route index element={<HomePage />} />
      <Route path='/bookmarks' element={<Bookmark />} />
    </Routes>
  </BrowserRouter>);
}

export default App;
