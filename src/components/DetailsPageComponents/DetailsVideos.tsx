import { MovieVideosResponse } from "@/lib/interfaces/interface";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function DetailsVideos({
  videos,
}: {
  videos: MovieVideosResponse;
}) {
  // Get the first YouTube video
  const video = videos.results.find((v) => v.site === "YouTube");

  if (!video) return null;

  return (
    <section className="w-full  transparent  rounded-xl">
      <div className="max-w-4xl mx-auto flex flex-col items-center px-4">
        {/* <h2 className="text-2xl font-semibold text-yellow-400 mb-6 text-center">
          Official Trailer
        </h2> */}

        <Card className="w-full border-none transparent overflow-hidden">
          <CardContent className="p-0">
            <div className="w-full aspect-video">
              <iframe
                className="w-full h-full border border-yellow-400/30 shadow-md shadow-yellow-400/10"
                src={`https://www.youtube.com/embed/${video.key}`}
                title={video.name}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
