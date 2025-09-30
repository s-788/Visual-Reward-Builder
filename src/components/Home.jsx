import React from "react";
import { Link } from "react-router-dom";
import { FaGift, FaGamepad, FaStar, FaSmileBeam } from "react-icons/fa";

export default function Home() {
  return (
    <div className="w-full mx-auto text-center space-y-8 p-6 pb-24">
      {/* Welcome Section */}
      <div className="p-8 rounded-2xl bg-gradient-to-br from-yellow-300 to-yellow-100 shadow-lg">
        <h2 className="text-4xl text-black font-extrabold mb-3 flex items-center justify-center gap-2">
          <FaSmileBeam className="text-black animate-bounce" />
          Welcome to Visual Reward Builder
        </h2>
        <p className="text-lg text-black max-w-xl mx-auto">
          Create rewards, track progress, and enjoy calming activities — all in
          one place.
        </p>
      </div>

      {/* Main Action Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Link
          to="/reward"
          className="p-8 rounded-xl text-white text-xl font-bold shadow-lg 
                     bg-gradient-to-br from-yellow-400 to-yellow-500 
                     hover:from-yellow-500 hover:to-yellow-600 
                     hover:text-black 
                     hover:scale-105 transition-all duration-300 flex flex-col items-center"
        >
          <FaGift className="text-4xl mb-2" />
          Build Reward
        </Link>

        <Link
          to="/games"
          className="p-8 rounded-xl text-white text-xl font-bold shadow-lg 
                     bg-gradient-to-br from-blue-400 to-blue-500 
                     hover:from-blue-500 hover:to-blue-600 
                     hover:text-black 
                     hover:scale-105 transition-all duration-300 flex flex-col items-center"
        >
          <FaGamepad className="text-4xl mb-2" />
          Calm Games
        </Link>
      </div>

      {/* Featured Reward */}
      <div className="p-6 bg-gradient-to-r from-purple-400 to-purple-500 rounded-2xl text-white shadow-lg">
        <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
          <FaStar /> Reward of the Day
        </h3>
        <p className="mb-4">
          "Movie Night" — Earn it by completing 5 study sessions!
        </p>
        <Link
          to="/reward"
          className="bg-white text-purple-600 px-4 py-2 rounded-lg font-bold hover:bg-yellow-300"
        >
          Create Your Own
        </Link>
      </div>

      {/* Tips */}
      <div className="p-6 bg-pink-300 rounded-2xl shadow-lg text-left">
        <h3 className="text-xl font-bold text-red-600 mb-2">
          Helpful Tips for Parents & Teachers
        </h3>
        <ul className="list-disc ml-6 mt-2 text-black space-y-1">
          <li>Use consistent reward schedules.</li>
          <li>Keep sessions short and predictable.</li>
          <li>Disable animations from Settings if needed.</li>
        </ul>
      </div>

      {/* Getting Started */}
      <div className="p-6 bg-purple-300 rounded-2xl shadow-lg text-left">
        <h3 className="text-xl font-bold text-purple-600 mb-2">Getting Started</h3>
        <ol className="list-decimal ml-6 space-y-2 text-black">
          <li>Go to "Build Reward" to set your goals.</li>
          <li>Track your progress in the Progress tab.</li>
          <li>Take breaks with Calm Games!</li>
        </ol>
      </div>

      {/* Motivational Quote */}
      <div className="italic text-black bg-yellow-100 rounded-xl p-4 shadow-md">
        "Small consistent rewards lead to big achievements."
      </div>
    </div>
  );
}
