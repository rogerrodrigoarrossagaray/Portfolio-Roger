
import Home from "./Views/Home/Home"
import Navbar from "./components/NavBar/Navbar";
import "./styles/tailwind.css"

function App() {
       
   return (
      <div className='App'>
         <Navbar/>
     <Home/>
      </div>
   );
}

export default App;
