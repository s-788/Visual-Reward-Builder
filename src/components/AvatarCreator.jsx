import React, { useState, useEffect } from "react";

const hair = ["short","long","none"];
const colors = ["#F97316","#06B6D4","#A78BFA","#FDE68A"];

export default function AvatarCreator(){
  const [body, setBody] = useState(colors[0]);
  const [hairStyle, setHairStyle] = useState(hair[0]);

  useEffect(()=>{
    const s = JSON.parse(localStorage.getItem("vrb_avatar") || "{}");
    if(s.body) setBody(s.body);
    if(s.hairStyle) setHairStyle(s.hairStyle);
  },[]);

  function save(){
    localStorage.setItem("vrb_avatar", JSON.stringify({body, hairStyle}));
    alert("Avatar saved");
  }

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      <div className="p-6 bg-white rounded-lg shadow-lg text-center">
        <div className="mx-auto w-40 h-40 rounded-full" style={{background: body}} />
        <div className="mt-3 font-semibold">Hair: {hairStyle}</div>
      </div>

      <div className="p-4 bg-white rounded-lg shadow-sm">
        <div className="mb-3">
          <label className="block">Body Color</label>
          <div className="flex gap-2 mt-2">
            {colors.map(c => <button key={c} onClick={()=>setBody(c)} className="w-10 h-10 rounded" style={{background:c}}/>)}
          </div>
        </div>

        <div>
          <label className="block">Hair Style</label>
          <div className="flex gap-2 mt-2">
            {hair.map(h => (
              <button key={h} onClick={()=>setHairStyle(h)}
                className={`px-3 py-2 rounded-md ${hairStyle===h ? 'bg-primary text-white' : 'bg-gray-100'}`}>
                {h}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <button onClick={save} className="px-4 py-2 bg-accent text-white rounded-md">Save Avatar</button>
        </div>
      </div>
    </div>
  );
}
