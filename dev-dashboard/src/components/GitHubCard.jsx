import React from "react";
import useFetch from "../hooks/useFetch";

import { Link } from "react-router-dom";

function GitHubCard() {
  const { mydata, err, isloading } = useFetch("https://api.github.com/users/ingdia");

  if (isloading)
    return (
      <div className="bg-white dark:bg-gray-800 py-10 px-12 rounded-2xl shadow-md text-center">
        <p className="text-gray-600 dark:text-gray-300">Loading GitHub data...</p>
      </div>
    );

  if (err)
    return (
      <div className="bg-white dark:bg-gray-800 py-10 px-12 rounded-2xl shadow-md text-center">
        <p className="text-red-500">Error: {err}</p>
      </div>
    );

  if (!mydata)
    return (
      <div className="bg-white dark:bg-gray-800 py-10 px-12 rounded-2xl shadow-md text-center">
        <p className="text-gray-600 dark:text-gray-300">No GitHub data found</p>
      </div>
    );

  return (
    <section className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md text-gray-900 dark:text-gray-100 py-10 px-12 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 w-[320px] md:w-[380px]">
      <h1 className="text-2xl font-bold mb-6 text-center">
        GitHub <span className="text-amber-600 dark:text-amber-400">Profile</span>
      </h1>

      <div className="flex flex-col items-center gap-6">
        {/* Avatar */}
        <img
          src={mydata.avatar_url}
          alt="GitHub Avatar"
          className="w-28 h-28 rounded-full border-4 border-amber-400 dark:border-amber-500 hover:scale-105 transition-transform duration-300 shadow-md"
        />

        {/* User Info */}
        <h2 className="text-xl font-semibold">{mydata.name || "No Name Available"}</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">@{mydata.login}</p>

        {/* Stats */}
        <div className="flex justify-around w-full text-center">
          <div>
            <h3 className="text-2xl font-bold">{mydata.public_repos}</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Repos</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">{mydata.followers}</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Followers</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">{mydata.following}</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Following</p>
          </div>
        </div>

        {/* Profile Link */}
        <Link
         to={mydata.html_url}
          target="_blank"
          
          className="mt-6 inline-block bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-6 rounded-xl shadow-md transition-colors duration-300"
        >
          Visit Profile
        </Link>
      </div>
    </section>
  );
}

export default GitHubCard;
