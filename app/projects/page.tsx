import ProjectsShowcase from "../components/ui/ProjectShowcase";
import Head from "next/head";

export default function Page() {
    return (
      <div style={{ backgroundColor: '#FFFFFF00' }} className="flex min-h-screen flex-col items-center justify-between p-24
      ">
        <main>
          <ProjectsShowcase />
        </main>
      </div>
    );
}