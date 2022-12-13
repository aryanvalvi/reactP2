import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import TextFormL from './Components/TextFormL';




function App() {
  return ( <>
 
  <Navbar title="Textutil" About="bhadve"/ >
  <div className="container my-3" >  
  <TextForm heading="Enter Your Text here"/ >
  </div>
  {/* <div className="container"><TextFormL/></div> */}
  </> 
  );
}

export default App;


