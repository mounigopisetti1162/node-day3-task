import './App.css';
import Forms2 from './compo/Formmentor';
import Forms1 from './compo/Formstudents';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Students from './compo/Studen';
import Mentors from './compo/Mentor';
import Provider from './compo/Provider';
import Home from './compo/Home';
function App() {
  return (
    <div className="App">
    
      
      <Provider>
     <BrowserRouter>
     <Home/>
     <Routes>

      <Route path='/student-form' element={<Forms1/> }></Route>
      <Route path='/mentor-form' element={<Forms2/> }></Route>
      <Route path='/student' element={<Students/>}></Route>
      <Route path='/student/:id' element={<Students/>}></Route>

      <Route path='/mentor' element={<Mentors/>}></Route>
      <Route path='/mentor/:id' element={<Mentors/>}></Route>


     </Routes>
     </BrowserRouter>
     
     </Provider>
    </div>

  );
}

export default App;
