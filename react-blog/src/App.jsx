import './App.css';
import Postdetails from './components/Postdetails';
import AddPost from './components/AddPost';
import HomePage from './components/HomePage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
      <Routes>
        <Route path='https://blogmaster.onrender.com/' element={<HomePage/>} />
        
        <Route path='https://blogmaster.onrender.com/add_post' element={<AddPost/>} />
        
        <Route path='https://blogmaster.onrender.com/:id' element={<Postdetails/>}/>
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
