'use client';
import { useState } from 'react';

const structures = [
  { name: "Holztür", hp: 200, emoji: "🚪" },
  { name: "Holzwand", hp: 250, emoji: "🪵" },
  { name: "Steinwand", hp: 500, emoji: "🪨" },
  { name: "Metallwand", hp: 1000, emoji: "🛠️" },
  { name: "Garagentür", hp: 600, emoji: "🚗" },
  { name: "Panzerplatte", hp: 1000, emoji: "🛡️" },
];

const explosives = [
  { name: "Explosive Munition", dmg: 35, sulfur: 30, emoji: "🔫" },
  { name: "Rakete", dmg: 250, sulfur: 1400, emoji: "🚀" },
  { name: "C4", dmg: 550, sulfur: 2200, emoji: "💣" },
  { name: "Propane Bomb", dmg: 400, sulfur: 650, emoji: "🧨" },
];

export default function RaidCalculator() {
  const [selectedStruct, setSelectedStruct] = useState(structures[0]);
  const [selectedExpl, setSelectedExpl] = useState(explosives[0]);

  const hitsNeeded = Math.ceil(selectedStruct.hp / selectedExpl.dmg);
  const totalSulfur = hitsNeeded * selectedExpl.sulfur;

  return (
    <div className="bg-zinc-900 p-8 rounded-2xl border border-orange-900">
      <h2 className="text-3xl font-bold text-orange-400 mb-8">Raid Calculator 2026</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Strukturen */}
        <div>
          <h3 className="text-xl mb-4 text-orange-300">Ziel auswählen</h3>
          <div className="grid grid-cols-2 gap-3">
            {structures.map((struct, i) => (
              <button
                key={i}
                onClick={() => setSelectedStruct(struct)}
                className={`p-4 rounded-xl text-left transition-all ${
                  selectedStruct.name === struct.name 
                    ? 'bg-orange-600 border-2 border-orange-400' 
                    : 'bg-zinc-800 hover:bg-zinc-700'
                }`}
              >
                <div className="text-3xl mb-2">{struct.emoji}</div>
                <div className="font-bold">{struct.name}</div>
                <div className="text-xs text-zinc-400">HP: {struct.hp}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Explosives */}
        <div>
          <h3 className="text-xl mb-4 text-orange-300">Explosive wählen</h3>
          <div className="grid grid-cols-2 gap-3">
            {explosives.map((expl, i) => (
              <button
                key={i}
                onClick={() => setSelectedExpl(expl)}
                className={`p-4 rounded-xl text-left transition-all ${
                  selectedExpl.name === expl.name 
                    ? 'bg-orange-600 border-2 border-orange-400' 
                    : 'bg-zinc-800 hover:bg-zinc-700'
                }`}
              >
                <div className="text-3xl mb-2">{expl.emoji}</div>
                <div className="font-bold">{expl.name}</div>
                <div className="text-xs text-orange-300">{expl.sulfur} Sulfur / Stück</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Ergebnis */}
      <div className="mt-10 bg-zinc-950 border border-orange-800 rounded-2xl p-8">
        <div className="flex flex-col items-center text-center">
          <div className="text-6xl mb-4">{selectedStruct.emoji}</div>
          <h3 className="text-2xl font-bold mb-2">{selectedStruct.name}</h3>
          
          <div className="text-7xl font-black text-orange-400 mt-6 mb-2">{hitsNeeded}</div>
          <p className="text-xl text-orange-300">× {selectedExpl.name}</p>

          <div className="mt-8 text-4xl font-bold text-white">
            {totalSulfur} <span className="text-orange-400">Sulfur</span>
          </div>

          <p className="text-green-400 mt-6 text-lg">
            Günstigste Meta 2026: Oft Propane Bomb + Catapult
          </p>
        </div>
      </div>
    </div>
  );
}