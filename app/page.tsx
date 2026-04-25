'use client';
import RaidCalculator from "@/components/RaidCalculator";
import MonumentGuide from "@/components/MonumentGuide";
import ElectricitySorter from "@/components/ElectricitySorter";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-6xl font-black text-orange-500 tracking-tighter mb-2">
          RUST HUB 2026
        </h1>
        <p className="text-orange-400 text-xl mb-10">Wipe-Ready • April 2026 Meta</p>

        {/* Einfache Tabs per Buttons */}
        <div className="flex gap-2 mb-8 border-b border-zinc-800 pb-4">
          <button className="px-6 py-3 bg-orange-600 rounded-xl font-medium">Raid Calculator</button>
          <button className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 rounded-xl font-medium">Monuments</button>
          <button className="px-6 py-3 bg-orange-600 rounded-xl font-medium">Electricity Sorter</button>
          <button className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 rounded-xl font-medium">Loot Tips</button>
        </div>

        <ElectricitySorter />
        <RaidCalculator />
        <MonumentGuide />
      </div>
    </div>
  );
}