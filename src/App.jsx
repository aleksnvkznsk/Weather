import React from "react";
import Form from "./components/form";
import Weather from "./components/weather";

const API_KEY = "a50795a3bb583d18533a97c8bf38f60b";

class App extends React.Component {

  gettingWeather = async (event) => {

    event.preventDefault();
    const city = event.target.elements.city.value;
    const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    const data = await api_url.json();
    console.log(data);
  }

  render() {
    return (
      <div>
        <Form weatherMethod={this.gettingWeather} />
        <Weather />
      </div>
    );
  }
}

export default App;