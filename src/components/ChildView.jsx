import React, { useEffect, useState } from "react";

// 🎉 Confetti function
function launchConfetti() {
  const duration = 2 * 1000;
  const end = Date.now() + duration;
  const colors = ["#f6e05e", "#fbb6b6", "#90cdf4", "#a7f3d0", "#fbcfe8"];

  (function frame() {
    const confetti = document.createElement("div");
    confetti.innerText = "🎉";
    confetti.style.position = "fixed";
    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.top = "-30px";
    confetti.style.fontSize = `${12 + Math.random() * 24}px`;
    confetti.style.zIndex = 9999;
    confetti.style.pointerEvents = "none";
    confetti.style.color = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.transition = "transform 2s linear, opacity 2s";
    document.body.appendChild(confetti);

    // Trigger animation
    requestAnimationFrame(() => {
      confetti.style.transform = `translateY(${window.innerHeight + 50}px) rotate(${Math.random()*360}deg)`;
      confetti.style.opacity = 0;
    });

    setTimeout(() => confetti.remove(), 2000);
    if (Date.now() < end) requestAnimationFrame(frame);
  })();
}

// 🔊 Speech function
function speak(text) {
  if ("speechSynthesis" in window && text) {
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "en-US";
    speechSynthesis.speak(utter);
  }
}

export default function ChildView() {
  const [rewards, setRewards] = useState([]);
  const [active, setActive] = useState(null);

  // Load rewards from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("vrb_rewards");
    if (saved) setRewards(JSON.parse(saved));
  }, []);

  function giveReward(r) {
    setActive(r);
    launchConfetti();
    speak(`You earned ${r.title}! ${r.reason || ""}`);
    setTimeout(() => setActive(null), 4000);
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">🎁 My Rewards</h1>

      {/* Active Reward Display */}
      {active && (
        <div className="flex flex-col items-center justify-center mb-8 p-6 bg-green-100 rounded-2xl shadow-lg animate-bounce">
          <div className="text-7xl">{active.icon}</div>
          <p className="mt-3 text-2xl font-bold text-green-700">{active.title}</p>
          {active.reason && <p className="text-gray-600 italic mt-1">{active.reason}</p>}
        </div>
      )}

      {/* Adventure Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {rewards.length === 0 && (
          <div className="col-span-full text-center text-gray-300">
            No rewards available yet. Ask your parent to add some! 🌟
          </div>
        )}

        {rewards.map((r) => (
          <button
            key={r.id}
            onClick={() => giveReward(r)}
            className="relative bg-white border-4 border-yellow-400 rounded-2xl shadow-xl p-6 flex flex-col items-center text-center adventure-card w-full"
          >
            {/* Reward Icon */}
            <div className="text-6xl mb-3">{r.icon}</div>

            {/* Reward Title */}
            <h2 className="text-xl font-bold text-yellow-700">{r.title}</h2>

            {/* Reward Reason */}
            {r.reason && <p className="text-gray-600 mt-1 italic">“{r.reason}”</p>}

            <div className="mt-4">
              <span className="px-3 py-1 text-sm rounded-full bg-green-200 text-green-800 shadow">
                Tap to Celebrate 🎉
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Styles for Adventure Cards and Confetti */}
      <style>
        {`
          .adventure-card {
            background: linear-gradient(135deg, #fff7e6, #fff);
            transition: transform 0.2s;
          }
          .adventure-card:hover {
            transform: translateY(-5px) scale(1.03);
          }

          @keyframes fall {
            0% { transform: translateY(0); }
            100% { transform: translateY(100vh); }
          }
        `}
      </style>
    </div>
  );
}
