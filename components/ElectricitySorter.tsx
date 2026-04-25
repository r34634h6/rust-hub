'use client';
import { useState } from 'react';

export default function ElectricitySorter() {
  const [dropboxes, setDropboxes] = useState(3);

  return (
    <div className="bg-zinc-900 p-8 rounded-2xl border border-orange-900">
      <h2 className="text-3xl font-bold text-orange-400 mb-6">
        Electricity Sorter (5-Mann Base)
      </h2>
      
      <div className="mb-6">
        <label className="block text-zinc-400 mb-2">Anzahl Dropboxes</label>
        <input 
          type="range" 
          min="1" 
          max="5" 
          value={dropboxes} 
          onChange={(e) => setDropboxes(Number(e.target.value))}
          className="w-full accent-orange-500"
        />
        <div className="text-center text-xl mt-3 text-orange-400">
          {dropboxes} Dropboxes
        </div>
      </div>

      <div className="bg-zinc-950 p-6 rounded-xl text-sm space-y-2">
        <p><strong>Benötigte Teile:</strong></p>
        <ul className="list-disc pl-5 text-zinc-300">
          <li>10 Large Boxes</li>
          <li>2 Buffer Boxes</li>
          <li>{10 + dropboxes} Storage Adapters</li>
          <li>{10 + dropboxes} Industrial Conveyors</li>
          <li>4–6 Electric Furnaces</li>
        </ul>
        <p className="pt-4 text-green-400">Stromverbrauch: ca. {10 + dropboxes} Power</p>
      </div>
    </div>
  );
}
