import "./App.css";
import Home from './Home/Home';
import MovieContent from "./MovieContent/MovieContent";
import NavBar from './NavBar/NavBar';


function App(props) {


  return (

    <div className="App">

      <NavBar name ='App'/>
      
      <MovieContent/>
      
    </div>
  );
}

export default App;
