import FeturedSection from "@/components/FeturedSection";
import HeroSection from "@/components/HeroSection";
import MeetInstracture from "@/components/MeetInstracture";
import MusicTestimonial from "@/components/MusicTestimonial";
import UpcomingWebinar from "@/components/UpcomingWebinar";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.9] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeturedSection />
    
      <MusicTestimonial />
      <UpcomingWebinar />
      <MeetInstracture />
    </main>
  );
}
