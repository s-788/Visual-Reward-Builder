import React, { useEffect, useState } from "react";

export default function Progress() {
  const [progress, setProgress] = useState({});
  useEffect(()=> {
    const p = JSON.parse(localStorage.getItem("vrb_progress") || "{}");
    setProgress(p);
  }, []);

  const total = Object.values(progress).reduce((a,b)=>a+b, 0);

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      <div className="p-6 bg-white shadow-lg rounded-lg text-center">
        <h3 className="text-2xl font-bold">Overall Progress</h3>
        <div className="mt-3 text-6xl">{'⭐'.repeat(Math.min(5, Math.floor(total/3))) || '✨'}</div>
        <p className="mt-2 text-gray-600">Total rewards given: <strong>{total}</strong></p>
      </div>

      <div className="space-y-2">
        {Object.entries(progress).length === 0 && <div className="text-gray-500">No progress yet.</div>}
        {Object.entries(progress).map(([id, count]) => (
          <div key={id} className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
            <div>Reward ID: {id}</div>
            <div>Times: <strong>{count}</strong></div>
          </div>
        ))}
      </div>
    </div>
  );
}
