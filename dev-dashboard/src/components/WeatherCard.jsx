import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import {
  Sun,
  CloudSun,
  Cloud,
  CloudRain,
  CloudFog,
  CloudSnow,
  CloudLightning,
} from "lucide-react";

function getIcon(code) {
  if (code === 0) return <Sun className="w-14 h-14 text-yellow-400" />;
  if (code === 1 || code === 2)
    return <CloudSun className="w-14 h-14 text-yellow-400" />;
  if (code === 3) return <Cloud className="w-14 h-14 text-gray-500" />;
  if (code === 45 || code === 48)
    return <CloudFog className="w-14 h-14 text-gray-400" />;
  if (code >= 51 && code <= 55)
    return <CloudRain className="w-14 h-14 text-blue-400" />;
  if (code >= 61 && code <= 65)
    return <CloudRain className="w-14 h-14 text-blue-500" />;
  if (code >= 71 && code <= 77)
    return <CloudSnow className="w-14 h-14 text-blue-300" />;
  if (code >= 80 && code <= 82)
    return <CloudRain className="w-14 h-14 text-blue-500" />;
  if (code >= 95 && code <= 99)
    return <CloudLightning className="w-14 h-14 text-yellow-500" />;
  return <Cloud className="w-14 h-14 text-gray-500" />;
}

export default function WeatherCard() {
  const { mydata, err, isloading } = useFetch(
    `https://api.open-meteo.com/v1/forecast?latitude=-1.9351&longitude=30.0821&current_weather=true`
  );

  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      setLocalTime(formatted);
    };

    updateTime(); 
    const timer = setInterval(updateTime, 1000); // update every second
    return () => clearInterval(timer);
  }, []);

  if (isloading)
    return (
      <div className="bg-white dark:bg-gray-800 text-center py-10 px-12 rounded-2xl shadow-md">
        <p className="text-gray-600 dark:text-gray-300">Loading weather...</p>
      </div>
    );

  if (err)
    return (
      <div className="bg-white dark:bg-gray-800 text-center py-10 px-12 rounded-2xl shadow-md">
        <p className="text-red-500">Error: {err}</p>
      </div>
    );

  if (!mydata.current_weather)
    return (
      <div className="bg-white dark:bg-gray-800 text-center py-10 px-12 rounded-2xl shadow-md">
        <p className="text-gray-600 dark:text-gray-300">
          No weather data available
        </p>
      </div>
    );

  const weather = mydata.current_weather;

  return (
    <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg text-gray-900 dark:text-gray-100 py-10 px-12 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 w-[320px] md:w-[380px]">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Weather in{" "}
        <span className="text-amber-600 dark:text-amber-400">Kacyiru</span>
      </h1>

      <div className="flex items-center justify-center gap-4 mb-6">
        {getIcon(weather.weathercode)}
        <h3 className="text-5xl font-semibold">{weather.temperature}°C</h3>
      </div>

      <div className="space-y-3 text-lg">
        <div className="flex justify-between">
          <p className="text-gray-500 dark:text-gray-300">Wind</p>
          <p>{weather.windspeed} km/h</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-500 dark:text-gray-300">Local Time</p>
          <p>{localTime}</p>
        </div>
      </div>
    </div>
  );
}
