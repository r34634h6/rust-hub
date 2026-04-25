'use client';

export default function MonumentGuide() {
  return (
    <div className="bg-zinc-900 p-8 rounded-2xl border border-orange-900">
      <h2 className="text-3xl font-bold text-orange-400 mb-8">Monument & Keycard Guide 2026</h2>

      {/* Green Cards */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-black font-bold">G</div>
          <h3 className="text-2xl font-bold text-green-400">Green Cards (Easy)</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div className="bg-zinc-950 p-4 rounded-xl">Supermarket</div>
          <div className="bg-zinc-950 p-4 rounded-xl">Gas Station</div>
          <div className="bg-zinc-950 p-4 rounded-xl">Lighthouse</div>
          <div className="bg-zinc-950 p-4 rounded-xl">Junkyard</div>
          <div className="bg-zinc-950 p-4 rounded-xl">Abandoned Cabins</div>
        </div>
        <p className="text-xs text-zinc-400 mt-3">→ Kein Puzzle nötig, einfach auf dem Schreibtisch</p>
      </div>

      {/* Blue Cards */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-black font-bold">B</div>
          <h3 className="text-2xl font-bold text-blue-400">Blue Cards (Medium)</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div className="bg-zinc-950 p-4 rounded-xl">Harbor (beide Varianten)</div>
          <div className="bg-zinc-950 p-4 rounded-xl">Satellite Dish</div>
          <div className="bg-zinc-950 p-4 rounded-xl">Sewer Branch</div>
          <div className="bg-zinc-950 p-4 rounded-xl">Oil Rig (klein)</div>
        </div>
        <p className="text-xs text-zinc-400 mt-3">Braucht: Green Card + 1 Fuse</p>
      </div>

      {/* Red Cards */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-black font-bold">R</div>
          <h3 className="text-2xl font-bold text-red-400">Red Cards (Hard)</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div className="bg-zinc-950 p-4 rounded-xl">Power Plant</div>
          <div className="bg-zinc-950 p-4 rounded-xl">Airfield</div>
          <div className="bg-zinc-950 p-4 rounded-xl">Train Yard</div>
          <div className="bg-zinc-950 p-4 rounded-xl">Water Treatment Plant</div>
        </div>
        <p className="text-xs text-zinc-400 mt-3">Braucht: Blue Card + 1–2 Fuses</p>
      </div>

      {/* Top Monuments */}
      <div>
        <h3 className="text-xl font-bold mb-4 text-orange-300">Beste Runs 2026</h3>
        <div className="bg-zinc-950 p-6 rounded-xl space-y-4">
          <div><strong>Launch Site + Underwater Labs</strong> → Beste Elite Crates</div>
          <div><strong>Oil Rig</strong> → Sehr guter Red Card Run</div>
          <div><strong>Power Plant / Train Yard</strong> → Schnellste Red Card Farm</div>
        </div>
      </div>
    </div>
  );
}