import React from "react";
import WeatherCard from "../components/WeatherCard";
import GitHubCard from "../components/GitHubCard";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-100 to-amber-200 dark:from-gray-900 dark:to-gray-800 py-16 px-6 flex flex-col md:flex-row items-center justify-evenly gap-10 transition-all duration-300">
      <WeatherCard />
      <GitHubCard />
    </div>
  );
}

export default Home;
