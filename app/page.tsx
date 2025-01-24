"use client";
import { Image } from "@heroui/image";
import MainPage from "./components/ui/MainPage";

export default function Home() {
  return (
    <main
      style={{ backgroundColor: "#FFFFFF00" }}
      className="flex min-h-screen flex-col items-center justify-between p-24"
    > 
      <MainPage/>

      
      {/* Container */}
      <div className="max-w-[800px] mx-auto px-4">
        {/* Image Container */}

        {/* Text Container 
        <div className="flex flex-col h-2/5 gap-4 justify-evenly">
          <div className="text-3xl whitespace-pre-line text-center text-[#339989]">
            Full stack developer and machine learning enthusiast.
          </div>
        </div>
        */}
        {/*<div className="flex justify-center mb-8">
          <Image
            alt="Personal Image"
            src="/IMG_3578.jpeg" // Relative path from the `public` folder
            width={300}
          />
        </div>*/}

        {/* Info Section 
        <div className="flex flex-col gap-4 h-3/5 text-[#fffafb]">
          <div className="text-center">
            I am currently a student at the University of Maryland, College Park, studying Mathematics and Computer Science, with a minor in Computational Finance.
          </div>
          <div className="text-center">
            As a machine learning researcher at the Robert H. Smith School of Business, I work on extracting insights from historic financial data using large language models.
          </div>
          <div className="text-center">
            I love finding clever solutions to complex problems and am always up for a challenge. I have experience in full stack development, machine learning, and data analysis.
            If you have a project you would like to collaborate on, feel free to reach out to me! I would be happy to help. <br />
          </div>
        </div>
        */}
      </div>
    </main>
  );
}
