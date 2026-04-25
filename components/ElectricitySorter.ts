'use client';
import { useState } from 'react';

export default function ElectricitySorter() {
  const [dropboxes, setDropboxes] = useState(3);
  return (
    <div className="bg-zinc-900 p-8 rounded-2xl">
      <h2 className="text-3xl font-bold text-orange-400 mb-6">Electricity Sorter (5-Mann)</h2>
      <p>Dropboxes: {dropboxes}</p>
      <input type="range" min="1" max="5" value={dropboxes} onChange={e => setDropboxes(Number(e.target.value))} className="w-full" />
      <p className="mt-6 text-orange-300">10 Large Boxes + 10 Storage Adapters + 10 Conveyors = ca. 10 Power</p>
    </div>
  );
}