'use client';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RaidCalculator from "@/components/RaidCalculator";
import MonumentGuide from "@/components/MonumentGuide";
import ElectricitySorter from "@/components/ElectricitySorter";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h1 className="text-6xl font-black text-orange-500 tracking-tighter">RUST HUB 2026</h1>
            <p className="text-orange-400 text-xl">Wipe-Ready • April 2026 Meta</p>
          </div>
        </div>

        <Tabs defaultValue="electricity" className="w-full">
          <TabsList className="bg-zinc-900 border border-orange-900 grid grid-cols-4">
            <TabsTrigger value="raid">Raid Calculator</TabsTrigger>
            <TabsTrigger value="monuments">Monuments</TabsTrigger>
            <TabsTrigger value="electricity">Electricity Sorter</TabsTrigger>
            <TabsTrigger value="loot">Loot Tips</TabsTrigger>
          </TabsList>

          <TabsContent value="raid"><RaidCalculator /></TabsContent>
          <TabsContent value="monuments"><MonumentGuide /></TabsContent>
          <TabsContent value="electricity"><ElectricitySorter /></TabsContent>
          <TabsContent value="loot">
            <div className="bg-zinc-900 p-8 rounded-2xl">
              <h2 className="text-3xl font-bold text-orange-400">Loot Tips 2026</h2>
              <p className="text-zinc-300 mt-4">Launch Site und Underwater Labs sind aktuell die besten Spots.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}