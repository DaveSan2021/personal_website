"use client";
import MainPage from "./components/ui/MainPage";
import ExperienceSection from "./components/ui/ExperienceSection";

export default function Home() {
  return (
    <main
      style={{ backgroundColor: "#FFFFFF00" }}
      className="flex flex-col items-center justify-start gap-16 px-6 py-16 md:p-24"
    >
      <MainPage />
      <ExperienceSection />
    </main>
  );
}
