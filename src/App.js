import React, { useEffect, useState } from 'react';
import './App.css';
import Search from './Component/Search';
import Result from './Component/Result';
import axios from "axios"; 

function App() {

  const [search,setSearch] = useState("");
  const [weather,setWeather] = useState([]);

  const changeSearch = (value) => {
    setSearch(value);
  }

  // const getWeatherData = () => {
  //   axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=3265874a2c77ae4a04bb96236a642d2f&units=metric`)

  //   .then(
  //     (response) => {
  //       console.log(response);
  //     }
  //   ).catch(
  //     (error) => {
  //       console.log(error);
  //     }
  //   )
  // }


  const searchWeatherHandler = () => {
    if (search !== ""){
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=27760563104251858c8c23b499533cf0&units=metric`)

    .then(
      (response) => {
        console.log(response.data);
        setWeather(response.data)
      }
    ).catch(
      (error) => {
        console.log(error);
      }
    )
  }
}

//   useEffect(
//     () => {
//       if (search !== ""){
//         getweatherData();
//       }
//   },
//   [search]
// )

  return (
   <div className='main'>
   <Search searchData = {search} eventHandler = {changeSearch} searchWeather = {searchWeatherHandler} />
   <Result weatherData = {weather}/>
   </div>
  );
}

export default App;
