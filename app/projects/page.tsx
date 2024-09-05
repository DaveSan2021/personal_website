import ProjectsShowcase from "../components/ui/ProjectShowcase";
import Head from "next/head";

export default function Page() {
    return (
      <div className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
        <Head>
          <div className="text-black">Projects Showcase</div>
        </Head>
        <main>
          <ProjectsShowcase />
        </main>
      </div>
    );
}