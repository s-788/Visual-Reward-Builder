import React, { useState } from "react";

function Games() {
  return (
    <div className="w-full mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        🎮 Calm Games
      </h1>

      <div className="w-full mx-auto px-4 space-y-10">
        {/* Game 1: Memory Match */}
        <MemoryMatch />

        {/* Game 2: Color Match */}
        <ColorMatch />

        {/* Game 3: Star Collector */}
        <StarCollector />
      </div>
    </div>
  );
}

/* ---------------- Memory Match ---------------- */
function MemoryMatch() {
  const items = ["🐶", "🚗", "🍎", "🌟"];
  const [cards, setCards] = useState(
    [...items, ...items]
      .sort(() => Math.random() - 0.5)
      .map((value, index) => ({
        id: index,
        value,
        flipped: false,
        matched: false,
      }))
  );
  const [flipped, setFlipped] = useState([]);
  const [message, setMessage] = useState("");

  function handleFlip(card) {
    if (card.flipped || card.matched || flipped.length === 2) return;

    const newCards = cards.map((c) =>
      c.id === card.id ? { ...c, flipped: true } : c
    );
    const newFlipped = [...flipped, card.id];
    setCards(newCards);
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      const [first, second] = newFlipped.map((id) =>
        newCards.find((c) => c.id === id)
      );
      if (first.value === second.value) {
        setCards((prev) =>
          prev.map((c) =>
            c.value === first.value ? { ...c, matched: true } : c
          )
        );
        setMessage("✅ Match!");
      } else {
        setMessage("❌ Try again");
        setTimeout(() => {
          setCards((prev) =>
            prev.map((c) =>
              newFlipped.includes(c.id) ? { ...c, flipped: false } : c
            )
          );
        }, 800);
      }
      setTimeout(() => {
        setMessage("");
        setFlipped([]);
      }, 1000);
    }
  }

  return (
    <section className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-black">🃏 Memory Match</h2>
      <p className="mb-4 text-gray-700">Flip cards to find the matching pairs</p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
        {cards.map((card) => (
          <button
            key={card.id}
            onClick={() => handleFlip(card)}
            className={`h-24 text-3xl font-bold flex items-center justify-center rounded-xl shadow-md transition-transform duration-200 ${
              card.flipped || card.matched ? "bg-blue-100" : "bg-gray-300"
            }`}
          >
            {card.flipped || card.matched ? card.value : "❓"}
          </button>
        ))}
      </div>

      {message && (
        <div className="mt-4 text-center text-lg font-semibold text-black">{message}</div>
      )}
    </section>
  );
}

/* ---------------- Color Match ---------------- */
function ColorMatch() {
  const colors = ["red", "yellow", "blue", "green"];
  const [target, setTarget] = useState(null);
  const [feedback, setFeedback] = useState("");

  function playColor() {
    const idx = Math.floor(Math.random() * colors.length);
    setTarget(colors[idx]);
    setFeedback("");
  }

  function checkAnswer(c) {
    if (c === target) {
      setFeedback("✅ Correct! Great job!");
    } else {
      setFeedback("❌ Try again");
    }
  }

  return (
    <section className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-black">🎨 Color Match</h2>
      <p className="mb-4 text-gray-700">
        Press play, then tap the matching color
      </p>

      <div className="flex gap-4 items-center mb-4">
        <button
          onClick={playColor}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Play
        </button>
        <div className="flex gap-2 items-center">
          <div
            className="w-12 h-12 rounded-md border"
            style={{ background: target || "#f3f4f6" }}
          />
          <div className="text-sm text-gray-600">Target</div>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {colors.map((c) => (
          <button
            key={c}
            onClick={() => checkAnswer(c)}
            className="h-16 text-xl font-bold text-white rounded-lg shadow-md"
            style={{ background: c }}
          >
            {c === "red"
              ? "🔴"
              : c === "yellow"
              ? "🟡"
              : c === "blue"
              ? "🔵"
              : "🟢"}
          </button>
        ))}
      </div>

      {feedback && (
        <div className="mt-4 text-center text-lg font-semibold text-black">
          {feedback}
        </div>
      )}
    </section>
  );
}

/* ---------------- Star Collector ---------------- */
function StarCollector() {
  const [count, setCount] = useState(0);

  return (
    <section className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-black">⭐ Star Collector</h2>
      <p className="mb-4 text-gray-700">Tap the star to collect points</p>

      <div className="flex items-center gap-4">
        <button
          onClick={() => setCount((c) => c + 1)}
          className="text-5xl hover:scale-110 transition-transform"
        >
          ⭐
        </button>
        <div className="text-xl font-semibold">Collected: {count}</div>
        <button
          onClick={() => setCount(0)}
          className="px-3 py-2 bg-gray-200 rounded-lg"
        >
          Reset
        </button>
      </div>

      {count > 0 && count % 5 === 0 && (
        <div className="mt-4 text-green-600 font-bold text-lg">
          🎉 Awesome! You collected {count} stars!
        </div>
      )}
    </section>
  );
}

export default Games;
