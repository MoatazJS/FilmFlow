import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-zinc-900 to-black text-gray-100 p-6">
      <div className="flex flex-col items-center gap-6 w-full max-w-md">
        {/* Title */}
        <Skeleton className="h-10 w-72" />

        {/* Poster */}
        <Skeleton className="h-[450px] w-[300px] rounded-lg" />

        {/* Overview lines */}
        <div className="flex flex-col gap-2 w-full px-4">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-2/3" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      </div>
    </main>
  );
}
