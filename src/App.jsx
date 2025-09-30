import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import RewardBuilder from './components/RewardBuilder';
import Games from './components/Games';
import AvatarCreator from './components/AvatarCreator';
import Settings from './components/Settings';
import ChildView from "./components/ChildView";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-800 to-indigo-900 flex flex-col text-white">
      
      {/* Navbar */}
      <Navbar />

      {/* Pages */}
      <main className="flex-1 p-6 pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reward" element={<RewardBuilder />} />
          <Route path="/games" element={<Games />} />
          <Route path="/avatar" element={<AvatarCreator />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/child" element={<ChildView />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="p-4 text-center text-sm bg-black/30 border-t border-white/10">
        Designed for calm, consistent interaction ✨
      </footer>
    </div>
  );
}
