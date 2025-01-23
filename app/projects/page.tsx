import ProjectsShowcase from "../components/ui/ProjectShowcase";
import Head from "next/head";

export default function Page() {
    return (
      <div style={{ backgroundColor: '#83c5be' }} className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
        <main>
          <ProjectsShowcase />
        </main>
      </div>
    );
}