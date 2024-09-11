"use client";
import Link from "next/link";
import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";
export const projects = [
  {
    title: "Spotify",
    description:
      "A digital music service that gives you access to millions of songs, podcasts, and more from artists around the world.",
    link: "https://spotify.com",
  },
  {
    title: "Apple Music",
    description:
      "A streaming service that offers over 90 million songs, curated playlists, and personalized radio stations.",
    link: "https://music.apple.com",
  },
  {
    title: "SoundCloud",
    description:
      "A global online music platform that enables creators to share and discover new music, offering tracks from emerging and established artists.",
    link: "https://soundcloud.com",
  },
  {
    title: "Bandcamp",
    description:
      "An independent music platform that allows artists to sell their music directly to fans and provides access to a vast collection of indie tracks.",
    link: "https://bandcamp.com",
  },
  {
    title: "Tidal",
    description:
      "A high-fidelity music streaming service offering lossless audio and curated editorial content, along with music videos and exclusive tracks.",
    link: "https://tidal.com",
  },
  {
    title: "YouTube Music",
    description:
      "A streaming service by YouTube that offers official albums, singles, videos, remixes, live performances, and more.",
    link: "https://music.youtube.com",
  },
];

function UpcomingWebinar() {
  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px:6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED WEBINAR
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold traking-light text-white sm:text-4xl">
            Enhanced Your Musical Journey
          </p>
        </div>
        <div className="mt-10">
          <div className="max-w-5xl mx-auto px-8">
            <HoverEffect items={projects} />
          </div>
        </div>
        <div className="mt-10 text-center">
          <Link href={"/"}>
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                View All Webinars
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UpcomingWebinar;
