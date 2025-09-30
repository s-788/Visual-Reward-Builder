import React, { useState, useEffect } from "react";

export default function RewardBuilder() {
  const [rewards, setRewards] = useState([]);
  const [title, setTitle] = useState("");
  const [reason, setReason] = useState("");
  const [icon, setIcon] = useState("🌟");

  useEffect(() => {
    const saved = localStorage.getItem("vrb_rewards");
    if (saved) setRewards(JSON.parse(saved));
  }, []);

  function addReward() {
    if (!title) return;
    const newReward = { id: Date.now(), title, reason, icon };
    const updated = [...rewards, newReward];
    setRewards(updated);
    localStorage.setItem("vrb_rewards", JSON.stringify(updated));
    setTitle("");
    setReason("");
    setIcon("🌟");
  }

  function removeReward(id) {
    const updated = rewards.filter((r) => r.id !== id);
    setRewards(updated);
    localStorage.setItem("vrb_rewards", JSON.stringify(updated));
  }

  return (
    <div className="w-full max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
      <h1 className="text-3xl font-bold text-center mb-6">🏰 Rewards</h1>

      {/* Input form */}
      <div className="bg-gradient-to-r from-yellow-100 to-pink-100 p-6 rounded-xl shadow-lg mb-8">
        <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
          <input
            type="text"
            placeholder="Reward Title"
            className="flex-1 min-w-[150px] p-3 rounded-lg border text-black placeholder-gray-400"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Reason / Task"
            className="flex-1 min-w-[150px] p-3 rounded-lg border text-black placeholder-gray-400"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          />
          <input
            type="text"
            placeholder="Emoji"
            className="w-20 p-3 rounded-lg border text-center"
            value={icon}
            onChange={(e) => setIcon(e.target.value)}
          />
          <button
            onClick={addReward}
            className="bg-green-600 text-white px-5 py-3 rounded-xl shadow hover:bg-green-700 w-full sm:w-auto"
          >
            Add
          </button>
        </div>
      </div>

      {/* Adventure Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {rewards.map((r) => (
          <div
            key={r.id}
            className="relative bg-white border-4 border-yellow-400 rounded-2xl shadow-xl p-6 flex flex-col items-center text-center adventure-card"
          >
            <div className="text-6xl mb-3">{r.icon}</div>
            <h2 className="text-xl font-bold text-yellow-700">{r.title}</h2>
            {r.reason && (
              <p className="text-gray-600 mt-1 italic">“{r.reason}”</p>
            )}

            <button
              onClick={() => removeReward(r.id)}
              className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm hover:bg-red-600"
            >
              ✖
            </button>

            <div className="mt-4">
              <span className="px-3 py-1 text-sm rounded-full bg-yellow-200 text-yellow-800 shadow">
                Rewards
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Add adventure vibe */}
      <style>
        {`
          .adventure-card {
            background: linear-gradient(135deg, #fff7e6, #fff);
            transition: transform 0.2s;
          }
          .adventure-card:hover {
            transform: translateY(-5px) scale(1.03);
          }
        `}
      </style>
    </div>
  );
}
