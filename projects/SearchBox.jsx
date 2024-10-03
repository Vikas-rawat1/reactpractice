import { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
function SearchBox() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const API_URL =
    // "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";
    "https://api.openweathermap.org/data/2.5/weather";

  const API_KEY = "fc694d073c1f046f4ab5e5c37fedcdc4";

  let getWeatherInfo = async () => {
    let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`); //which url to get the data
    let jsonResponse = await response.json();
    // console.log(jsonResponse);
    // console.log(jsonResponse.main.humidity);
    if (response.ok) {
      let result = {
        temp: jsonResponse.main.temp,
        tempMax: jsonResponse.main.temp_max,
        tempMin: jsonResponse.main.temp_min,
        humidity: jsonResponse.main.humidity,
        weather: jsonResponse.weather[0].description,
        icon: jsonResponse.weather[0].icon,
      };
      // console.log(result);
      setWeather(result);
    } else {
      alert("City not found. Please enter a valid city name.");
      setWeather(null);
    }
  };

  // console.log(city);

  let handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(city);
    setCity("");
    getWeatherInfo();
  };
  return (
    <>
      <div style={{ marginLeft: "3vw", marginTop: "2vw" }}>
        <form action="" onSubmit={handleOnSubmit}>
          <TextField
            id="city"
            label="City Name"
            variant="outlined"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <Button
            style={{ marginTop: "0.7vw", marginLeft: "2vw" }}
            variant="contained"
            type="submit"
          >
            Submit
          </Button>
          {weather && (
            <>
              <p>Humidity {weather.humidity}</p>
              <p>Temperature {weather.temp}</p>
              <p>Max Temperature {weather.tempMax}</p>
              <p>Min Temperature {weather.tempMin}</p>
              <p>Weather: {weather.weather}</p>
              {/* <img
                src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                alt="weather icon"
              /> */}
            </>
          )}
        </form>
      </div>
    </>
  );
}
export default SearchBox;
