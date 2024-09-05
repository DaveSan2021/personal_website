import Image from "next/image";

export default function Page() {
  return (
    <div className="mx-auto px-4 py-8 bg-white min-h-screen flex flex-col">
      
  {/* Contact Header */}
  <div className="text-black text-3xl text-center mb-10">
    Like what you see? Contact me!
  </div>

  {/* Contact Options */}
  <div className="flex flex-col md:flex-row flex-1 justify-center items-start">
    <div className="flex flex-col items-center justify-start h-full w-full md:w-2/3 space-y-16">
      <a href="mailto:davayansa@gmail.com" className="block">
      <div className="flex flex-col items-center ">
        <div className="w-24 h-24 mb-2">
          <Image
            src={'/gmail.png'}
            alt={`Google Email Logo`}
            width={96}
            height={96}
            className="rounded-lg shadow-lg"
            placeholder="blur"
            blurDataURL="/images/placeholder.png" // Optional: Add a placeholder image
          />
        </div>
        <span>Gmail: davayansa@gmail.com</span>
      </div>
      </a>

      <a href="https://www.linkedin.com/in/davayan-sanyal-b381831a1/" className="block">
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 mb-2">
          {/* Replace with your GitHub image */}
          <Image
            src={'/linkedin.png'}
            alt={`LinkedIn Logo`}
            width={96}
            height={96}
            className="rounded-lg shadow-lg"
            placeholder="blur"
            blurDataURL="/images/placeholder.png" // Optional: Add a placeholder image
          />
        </div>
        <span>LinkedIn</span>
      </div>
      </a>
      
      <a href="https://github.com/DaveSan2021" className="block">
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 mb-2">
          {/* Replace with your Email image */}
          <Image
            src={'/github.png'}
            alt={`Github Logo`}
            width={96}
            height={96}
            className="rounded-lg shadow-lg"
            placeholder="blur"
            blurDataURL="/images/placeholder.png" // Optional: Add a placeholder image
          />
        </div>
        <span>Github</span>
      </div>
      </a>
    </div>
    
  </div>
</div>


  );
}
