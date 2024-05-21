import React from 'react'
import './Result.css'

export default function Result({weatherData}) {

  // let celsius = (weatherData.main.temp_min - 32) * 5/9;
  // console.log(celsius)

  // const cel_min = ( Math.round(weatherData.main.temp_min) - 32)/1.8;



  // const feh_m = `${weatherData.main.temp_min}`
  // const cel_min = feh_m - 32 * 1.8

  // const feh_max = `${weatherData.main.temp_max}`
  // const cel_max = feh_max - 32 * 1.8

  return (
    <div className='result'>
      {
        weatherData.name !== undefined
        ?
        <>
        <h2 className='name'>{weatherData.name}</h2>
      <div className='temp'>
        {/* <div>Min Temp : ${cel_min} deg</div>
        <div>Max Temp : ${cel_max} deg</div> */}
        <div>Max Temp : {weatherData.main.temp_min} &deg;C</div>
        <div>Max Temp : {weatherData.main.temp_max} &deg;C</div>
      </div>
      <div className="icon_type">
        
        <div>Weather : {weatherData.weather[0].main}</div>
      </div>
        </>

        :
        <h2 className='enter_name'>Enter City Name</h2>
      }
      
      
    </div>
  )
}
