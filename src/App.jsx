import React from "react";
import Form from "./components/form";
import Weather from "./components/weather";
import './styles/style.scss'

const API_KEY = "a50795a3bb583d18533a97c8bf38f60b";

class App extends React.Component {

  state = {
    country: undefined,
    city: undefined,
    description: undefined,
    temp: undefined,
    feels_like: undefined,
    humidity: undefined,
    pressure: undefined,
    temp_max: undefined,
    temp_min: undefined,
    sunrise: undefined,
    sunset: undefined,
    error: undefined
  }

  gettingWeather = async (event) => {

    event.preventDefault();
    const city = event.target.elements.city.value;

    if (city) {

      const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&appid=${API_KEY}&units=metric`)
      const data = await api_url.json();
      console.log(data);

      let sunriseInSec = data.sys.sunrise
      let dateSunrise = new Date(sunriseInSec * 1000)
      let timesunrise = dateSunrise.toLocaleTimeString()

      let sunsetInSec = data.sys.sunset
      let dateSunset = new Date(sunsetInSec * 1000)
      let timeSunset = dateSunset.toLocaleTimeString()

      this.setState({
        country: data.sys.country,
        city: data.name,
        description: data.weather[0].description,
        temp: data.main.temp,
        feels_like: data.main.feels_like,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        temp_max: data.main.temp_max,
        temp_min: data.main.temp_min,
        sunrise: timesunrise,
        sunset: timeSunset,
        error: undefined
      });
    } else {
      this.setState({
        country: undefined,
        city: undefined,
        description: undefined,
        temp: undefined,
        feels_like: undefined,
        humidity: undefined,
        pressure: undefined,
        temp_max: undefined,
        temp_min: undefined,
        sunrise: undefined,
        sunset: undefined,
        error: "Введите город"
      });
    }
  }

  render() {
    return (
      <div className="App">
        <Form weatherMethod={this.gettingWeather} />
        <Weather
          country={this.state.country}
          city={this.state.city}
          description={this.state.description}
          temp={this.state.temp}
          feels_like={this.state.feels_like}
          humidity={this.state.humidity}
          pressure={this.state.pressure}
          temp_max={this.state.temp_max}
          temp_min={this.state.temp_min}
          sunrise={this.state.sunrise}
          sunset={this.state.sunset}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;