import React, {useState, useEffect} from "react";
import axios from "axios";
import "./App.css";

import Nav from './components/Nav/Nav'
import Header from './components/header/header'
import RoverJourney from './components/rover/RoverJourney'

const headerApi = "https://api.nasa.gov/planetary/apod?api_key=VLdxPPuf8Ei5QkUVZS970hvwSFChZZJ7Z0iHqUq8";

const photosApi = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=VLdxPPuf8Ei5QkUVZS970hvwSFChZZJ7Z0iHqUq8";

function App() {

  const [headerState, setHeaderState] = useState({});

  const [photos, setPhotos] = useState([])

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

    axios.get(photosApi)
    .then(response => {
      const shortArray = [];
      console.log(response.data)
      const photosArray = response.data.photos;
      var i = 0;
      for (i = 0; i < 10; i++) {
        shortArray.push(photosArray[Math.floor(Math.random()*photosArray.length)])
      }
      setPhotos(shortArray)
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
      <RoverJourney photos = {photos}/>
    </div>
  );
}

export default App;
