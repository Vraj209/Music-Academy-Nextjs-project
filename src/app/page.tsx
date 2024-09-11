import FeturedSection from "@/components/FeturedSection";
import HeroSection from "@/components/HeroSection";
import MeetInstracture from "@/components/MeetInstracture";
import MusicTestimonial from "@/components/MusicTestimonial";
import UpcomingWebinar from "@/components/UpcomingWebinar";
import WhyChooseUs from "@/components/WhyChooseUs";
import { main } from "framer-motion/client";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.9] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeturedSection />
      {/* <WhyChooseUs /> */}
      <MusicTestimonial />
      <UpcomingWebinar />
      <MeetInstracture />
    </main>
  );
}
