"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import MainNavbar from "./components/ui/MainNavbar";


export default function Home() {

  return (
    <main className="flex min-h-screen flex-col bg-white">
        <div className="flex min-h-screen flex-row mt-10 pl-10 pr-10">
        <div className="text-container pl-12 pr-8 w-1/2 flex flex-col justify-around">
          <div className="flex flex-col h-1/2 justify-evenly">
          <div className="text-5xl ml-10 mr-10">
            Hi! 👋
          </div>
          <div className="text-3xl whitespace-pre-line ml-10 mr-10">
            I am Davayan Sanyal, a full stack developer and machine learning enthusiast.
          </div>
          <div className="text-3xl whitespace-pre-line ml-10 mr-10">
            Welcome to my personal website! Feel free to look around. 🧑‍🚀
          </div>
          </div>
          <div className="flex flex-col gap-4 h-1/2">
            <div className="ml-10 mr-10">
        I am currently a student at the University of Maryland, College Park, studying Mathematics 🧮 and Computer Science ⌨️, with a minor in Computational Finance 💸. <br></br> 
            </div>
            <div className="ml-10 mr-10">
        As a machine learning researcher at the Robert H. Smith School of Business, I work on extracting insights from historic financial data using large language models. 💬
            </div>
          <div className="ml-10 mr-10">
        I love finding clever solutions to complex problems and am always up for a challenge. I have experience in full stack development, machine learning, and data analysis.
        If you have a project you would like to collaborate on, feel free to reach out to me! I would be happy to help. <br></br>🤝 🤝 🤝
          </div>
        </div>
        </div>

        <div className="image-container w-1/2 flex flex-col items-center justify-around">
          <Image src="/IMG_6952.jpeg" alt="Personal Image" width={500} height={300} />
        </div>
        </div>

    </main>
  );
}
