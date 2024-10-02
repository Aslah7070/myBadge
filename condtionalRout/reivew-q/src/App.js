
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Inpitbox from './components/Inpitbox';
import Display from './components/Display';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={ <Inpitbox/>}/>
      <Route path='/display/:number' element={ <Display/>}/>
      </Routes>
      


     
    </div>
  );
}

export default App;
