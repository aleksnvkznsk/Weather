import React from "react";
import Form from "./components/form";
import Weather from "./components/weather";

class App extends React.Component {
  render() {
    return (
      <div>
        <Form />
        <Weather />
      </div>
    );
  }
}

export default App;