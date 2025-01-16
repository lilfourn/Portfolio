"use client";

export default function LoadingCard() {
  return (
    <div className="animate-pulse bg-zinc-900/50 rounded-xl overflow-hidden border border-zinc-800/50 h-full">
      <div className="aspect-video bg-zinc-800"></div>
      <div className="p-4 sm:p-5 lg:p-6">
        <div className="flex gap-2 mb-4">
          {[1, 2].map((i) => (
            <div key={i} className="h-5 w-16 bg-zinc-800 rounded-full"></div>
          ))}
        </div>
        <div className="h-6 bg-zinc-800 rounded mb-2"></div>
        <div className="h-4 w-2/3 bg-zinc-800 rounded mb-4"></div>
        <div className="flex items-center gap-4">
          <div className="h-5 w-5 bg-zinc-800 rounded-full"></div>
          <div className="h-4 w-24 bg-zinc-800 rounded"></div>
        </div>
      </div>
    </div>
  );
}
