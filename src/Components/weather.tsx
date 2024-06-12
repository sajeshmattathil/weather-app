import { useState } from "react";
import axios from "axios";
import "./weather.css";
import getWeatherTips from "../getTips";
import weatherData from "../Interface/Interface";



const Weather = () => {

  const [city, setCity] = useState("");

  const [weather, setWeather] = useState<weatherData | null>(null);
  const [background, setBackground] = useState(
    "url(https://images.unsplash.com/photo-1601297183305-6df142704ea2?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
  );
  const [tips, setTips] = useState<string[] | null>(null);

  const getEmoji = (description: string) => {
    switch (description) {
      case "clear sky":
        return "☀️";
      case "few clouds":
        return "🌤️";
      case "scattered clouds":
        return "☁️";
      case "broken clouds":
        return "☁️";
      case "rain":
        return "🌧️";
      case "heavy intensity rain":
        return "🌧️";
      case "thunderstorm":
        return "⛈️";
      case "snow":
        return "❄️";
      default:
        return "";
    }
  };

  const updateBackground = (description: string) => {
    switch (description) {
      case "clear sky":
        setBackground(
          "url(https://images.unsplash.com/photo-1601297183305-6df142704ea2?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
        );
        break;
      case "few clouds":
        setBackground(
          "url(https://www.vishopper.com/images/products/300x300/SK/15233_bright-sky-with-few-clouds.jpg)"
        );
        break;
      case "scattered clouds":
        setBackground(
          "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrQCLJEInGPShspPFj_q_EtlEZeVpnlk7cqQ&s)"
        );
        break;
      case "broken clouds":
        setBackground(
          "url(https://eos.org/wp-content/uploads/2019/09/cumulus-clouds-blue-sky.jpg)"
        );
        break;
      case "rain":
        setBackground(
          "url(https://static.toiimg.com/thumb/msid-102921771,width-1280,height-720,resizemode-72/102921771.jpg)"
        );
        break;
      case "heavy intensity rain":
        setBackground(
          "url(https://static.toiimg.com/thumb/msid-102921771,width-1280,height-720,resizemode-72/102921771.jpg)"
        );
        break;
      case "thunderstorm":
        setBackground(
          "url(https://cdn.britannica.com/57/150357-050-427E4C4F/lightning-discharge-field-cumulonimbus-cloud.jpg)"
        );
        break;
      case "snow":
        setBackground(
          "url(https://imageio.forbes.com/specials-images/imageserve/639c5cdcb6175432cb9a89d7/Pathway-covered-with-snowy-trees-showing-importance-of-snow/960x0.jpg?format=jpg&width=960)"
        );
        break;
      case "mist":
        setBackground(
          "url(https://cdn.britannica.com/85/128385-050-2A490CBF/Mist-Ensay-Vic-Austl.jpg?w=400&h=300&c=crop)"
        );
        break;
      default:
        setBackground(
          "url(https://innovationorigins.com/app/uploads/2018/10/20130523_180620-1-scaled.jpg)"
        );
        break;
    }
  };

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid='981480737a1bf619a74e46f15ee0c088'`
      );

      updateBackground(response.data.weather[0].description);
      setWeather(response.data);
      const getTips = getWeatherTips(response.data.weather[0].description);
      setTips(getTips);
      setCity("");
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <>
      <div
        className="container"
        style={{
          backgroundImage: background,
        }}
      >
        <div className="content">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city"
          />
          <button onClick={fetchWeather}>Get Weather</button>
          {weather && (
            <div className="content-data">
              <h3>{weather.name}</h3>
              <p>
                {getEmoji(weather.weather[0].description)}
                {weather.weather[0].description}
              </p>
              <p>{Math.round(weather.main.temp - 273.15)}°C</p>
              <div>
                {tips && tips.length && (
                  <div>
                    {tips.map((tip, index) => (
                      <p key={index}>{tip}</p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Weather;
