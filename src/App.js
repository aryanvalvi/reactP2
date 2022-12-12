import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';




function App() {
  return ( <>
 
  <Navbar title="Textutil" About="bhadve"/ >
  <div className="container my-3" >  
  <TextForm heading="Enter Your Text here"/ >
  </div>
  </> 
  );
}

export default App;


