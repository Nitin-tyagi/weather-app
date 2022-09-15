

import React, { Component } from 'react'
import Result from './Result'
import { Search } from './Search'
import axios from "axios";

export default class Weather extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
       lat:"",
       lon:"",
       weatherData:null,
       city:"",
    };
  }
  changeHandler=(event)=>{
const name=event.target.name;
if(name==="city"){
this.setState({
  city:event.target.value,
})
}
else if(name==="lat"){
this.setState({
  lat:event.target.value,
})
}
else if(name==="lon"){
this.setState({
  lon:event.target.value,
})
}
  }
  locationHandler =()=>{
    this.setState({
      lat:"",
      lon:"",
      city:"",
      weatherData:null,
    })
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(
        (res)=>{
          setTimeout(()=>{
            this.setState({
              lat:res.coords.latitude,
            lon:res.coords.longitude
          });
            
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}
            &appid=88e749f30709c01a31e5087eb1cac14e`)
            .then((result)=>{
              console.log(result.data);
            })
            .catch((error)=>{
              console.log(error);
            })
          },500)
         
        },
        (err)=>{
          console.log(err);
        }
      )
    }else{
      console.log("location is not suported");
    }
  }
  render() {
    return (
      <div className='container pt-4' style={{height:"500px"}}>
    <Search 
      lat={this.state.lat}
      lon={this.state.lon}
      city={this.state.city}
      weatherData={this.state.weatherData}
      change={this.changeHandler}
      getLocation={this.locationHandler}
    />
    <Result/>
    </div>
    )
  }
}
