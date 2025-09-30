import React, { useEffect, useState } from "react";
import { FaFont, FaMagic, FaMoon, FaVolumeUp, FaAdjust } from "react-icons/fa";

export default function Settings() {
  const [animations, setAnimations] = useState(true);
  const [largeText, setLargeText] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [sound, setSound] = useState(true);
  const [highContrast, setHighContrast] = useState(false);

  // Load settings from localStorage
  useEffect(() => {
    const s = JSON.parse(localStorage.getItem("vrb_settings") || "{}");
    setAnimations(s.animations ?? true);
    setLargeText(s.largeText ?? false);
    setDarkMode(s.darkMode ?? false);
    setSound(s.sound ?? true);
    setHighContrast(s.highContrast ?? false);
  }, []);

  // Save settings and apply effects
  useEffect(() => {
    localStorage.setItem(
      "vrb_settings",
      JSON.stringify({ animations, largeText, darkMode, sound, highContrast })
    );

    // Text size
    document.documentElement.style.fontSize = largeText ? "18px" : "16px";

    // Animations
    if (!animations) document.documentElement.classList.add("reduced-motion");
    else document.documentElement.classList.remove("reduced-motion");

    // Dark mode
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");

    // High contrast
    if (highContrast) document.documentElement.classList.add("high-contrast");
    else document.documentElement.classList.remove("high-contrast");

    // Sound effects could be handled globally in your app
  }, [animations, largeText, darkMode, sound, highContrast]);

  return (
    <div className="pt-5 pb-12 px-4 md:px-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">
       ⚙️ Settings
      </h1>
      <div className="bg-gradient-to-br from-yellow-50 to-pink-50 rounded-2xl shadow-xl p-8 space-y-10">
        {/* Title */}
        
        <p className="text-center text-gray-600">
          Adjust your experience for comfort, accessibility, and fun.
        </p>

        {/* Settings Cards */}
        <SettingsCard
          icon={<FaFont className="text-purple-500 text-2xl" />}
          title="Large Text"
          description="Increase text size for readability"
          checked={largeText}
          onChange={() => setLargeText((l) => !l)}
        />

        <SettingsCard
          icon={<FaMagic className="text-pink-500 text-2xl" />}
          title="Animations"
          description="Enable or disable UI animations"
          checked={animations}
          onChange={() => setAnimations((a) => !a)}
        />

        <SettingsCard
          icon={<FaMoon className="text-gray-700 text-2xl" />}
          title="Dark Mode"
          description="Use a dark theme for low-light environments"
          checked={darkMode}
          onChange={() => setDarkMode((d) => !d)}
        />

        <SettingsCard
          icon={<FaVolumeUp className="text-blue-500 text-2xl" />}
          title="Sound Effects"
          description="Enable or disable sound feedback"
          checked={sound}
          onChange={() => setSound((s) => !s)}
        />

        <SettingsCard
          icon={<FaAdjust className="text-yellow-600 text-2xl" />}
          title="High Contrast"
          description="Increase contrast for better visibility"
          checked={highContrast}
          onChange={() => setHighContrast((h) => !h)}
        />
      </div>
    </div>
  );
}

// Reusable settings card
function SettingsCard({ icon, title, description, checked, onChange }) {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-md">
      <div className="flex items-center gap-3">
        {icon}
        <div>
          <div className="font-semibold text-gray-800">{title}</div>
          <div className="text-sm text-gray-500">{description}</div>
        </div>
      </div>
      <ToggleSwitch checked={checked} onChange={onChange} />
    </div>
  );
}

// Toggle switch
function ToggleSwitch({ checked, onChange }) {
  return (
    <button
      onClick={onChange}
      className={`w-14 h-8 flex items-center rounded-full p-1 transition-colors ${
        checked ? "bg-green-500" : "bg-gray-300"
      }`}
      role="switch"
      aria-checked={checked}
    >
      <div
        className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform ${
          checked ? "translate-x-6" : "translate-x-0"
        }`}
      />
    </button>
  );
}
