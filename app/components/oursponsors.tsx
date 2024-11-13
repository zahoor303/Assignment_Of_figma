import Image from 'next/image';
import sponsors from "../../app/assets/Our sponsors.png"
const Sponsors = () => {
  return (
    <div className="bg-white py-8 text-center">
      {/* Container for the image with custom sizing */}
      <div className="flex justify-center ">
        <Image 
          src={sponsors}
          alt=" Sponsors" 
          width={1922}  // Adjust width to your preference, e.g., 300 or 250
          height={538} // Adjust height to your preference, e.g., 100 or 80
          className="object-contain" // Ensures logos don't get cropped
        />
      </div>
    </div>
  );
};

export default Sponsors;
