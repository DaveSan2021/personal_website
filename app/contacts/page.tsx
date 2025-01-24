import Image from "next/image";

export default function Page() {
  return (
    <div 
        style={{ backgroundColor: '#FFFFFF00' }} 
        className="flex min-h-screen flex-col items-center justify-between p-24">
    

  {/* Contact Options */}
  <div className="flex flex-col justify-center space-y-6">
    
    {/* Contact Header */}
    <h2 className="flex text-4xl mb-4 text-center justify-center text-[#7de2d1]">
      My Links
    </h2>

    <div className="flex flex-col items-center justify-center space-y-2">
      <a href="mailto:davayansa@gmail.com" className="flex flex-row items-center">
      <div className="w-24 h-24">
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
      </a>
      <p className="text-[#339989] text-lg">Gmail: davayansa@gmail.com</p>
    </div>
    <div className="flex flex-col items-center justify-center space-y-2">
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
        
      </div>
      </a>
      <p className="text-[#339989]" >LinkedIn</p>
      
    </div>
    <div className="flex flex-col items-center justify-center space-y-2">
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
        
      </div>
      </a>
      <p className="text-[#339989]" >Github</p>
    </div>
    
  </div>
</div>


  );
}
