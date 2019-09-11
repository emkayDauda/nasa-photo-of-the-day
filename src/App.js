import React, {useState, useEffect} from "react";
import axios from "axios";
import "./App.css";

import Nav from './components/Nav/Nav'
import Header from './components/header/header'

const headerApi = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";

function App() {

  const [headerState, setHeaderState] = useState({});

  useEffect(() => {
    axios
    .get(headerApi)
    .then(response => {
      console.log(response.data);
      setHeaderState(response.data)
      
    })
    .catch(error => {
      console.log(error);
      
    })
  }, [])


  return (
    <div className="App">
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p> */}
      <Nav/>
      <Header headerData = {headerState}/>
    </div>
  );
}

export default App;
