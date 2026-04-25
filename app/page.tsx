'use client';
import { useState } from 'react';
import RaidCalculator from "@/components/RaidCalculator";
import MonumentGuide from "@/components/MonumentGuide";
import ElectricitySorter from "@/components/ElectricitySorter";

export default function Home() {
  const [activeTab, setActiveTab] = useState<'raid' | 'monuments' | 'electricity' | 'loot'>('electricity');

  const tabList = [
    { id: 'raid', label: 'Raid Calculator' },
    { id: 'monuments', label: 'Monuments' },
    { id: 'electricity', label: 'Electricity Sorter' },
    { id: 'loot', label: 'Loot Tips' },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-6xl font-black text-orange-500 tracking-tighter">RUST HUB 2026</h1>
          <p className="text-orange-400 text-xl">Wipe-Ready • April 2026 Meta</p>
        </div>

        {/* Klickbare Tabs */}
        <div className="flex gap-2 mb-8 border-b border-zinc-800 pb-4 overflow-x-auto">
          {tabList.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-3 rounded-xl font-medium transition-all whitespace-nowrap ${
                activeTab === tab.id 
                  ? 'bg-orange-600 text-white shadow-lg shadow-orange-600/50' 
                  : 'bg-zinc-900 hover:bg-zinc-800 text-zinc-400'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Inhalte */}
        <div className="space-y-8">
          {activeTab === 'raid' && <RaidCalculator />}
          {activeTab === 'monuments' && <MonumentGuide />}
          {activeTab === 'electricity' && <ElectricitySorter />}
          {activeTab === 'loot' && (
            <div className="bg-zinc-900 p-8 rounded-2xl border border-orange-900">
              <h2 className="text-3xl font-bold text-orange-400 mb-6">Loot Tips 2026</h2>
              <ul className="space-y-3 text-zinc-300">
                <li>• Launch Site + Underwater Labs sind aktuell die besten Runs</li>
                <li>• Elite Crates farmen mit Red Card + 2 Fuses</li>
                <li>• Propane Bombs + Catapult = Meta für schnelle Raids</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}