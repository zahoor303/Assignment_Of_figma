import Image from 'next/image';
import logo from "@/app/assets/Logo.png"; 

export default function Footer() {
    return (
      <footer className="bg-[#043873] text-white py-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between">
          {/* Logo and Description */}
          <div className="mb-8 md:mb-0">
            <div className="flex items-center space-x-2">
              {/* Logo Section */}
              <div className='w-[191px] h-[34px]'>
                <Image src={logo} alt='Whitespace Logo' width={191} height={34} />
              </div>
              <span className="text-xl font-bold"></span>
            </div>
            <p className="text-gray-300 mt-4 max-w-xs">
              whitepace was created for the new ways we live and work. We make a better workspace around the world.
            </p>
          </div>
  
          {/* Links Sections */}
          <div className="flex flex-col md:flex-row md:space-x-16">
            {/* Product Links */}
            <div className="mb-6 md:mb-0">
              <button className="text-lg font-semibold mb-2">Product</button>
              <ul className="text-gray-300 space-y-1">
                <li className="hover:text-white hover:underline cursor-pointer">Overview</li>
                <li className="hover:text-white hover:underline cursor-pointer">Pricing</li>
                <li className="hover:text-white hover:underline cursor-pointer">Customer stories</li>
              </ul>
            </div>
  
            {/* Resources Links */}
            <div className="mb-6 md:mb-0">
              <button className="text-lg font-semibold mb-2">Resources</button>
              <ul className="text-gray-300 space-y-1">
                <li className="hover:text-white hover:underline cursor-pointer">Blog</li>
                <li className="hover:text-white hover:underline cursor-pointer">Guides & tutorials</li>
                <li className="hover:text-white hover:underline cursor-pointer">Help center</li>
              </ul>
            </div>
  
            {/* Company Links */}
            <div>
              <button className="text-lg font-semibold mb-2">Company</button>
              <ul className="text-gray-300 space-y-1">
                <li className="hover:text-white hover:underline cursor-pointer">About us</li>
                <li className="hover:text-white hover:underline cursor-pointer">Careers</li>
                <li className="hover:text-white hover:underline cursor-pointer">Media kit</li>
              </ul>
            </div>
          </div>
        </div>
  
        {/* Copyright Section */}
        <div className="border-t border-[#2E4E73] mt-10 pt-6 text-center text-white">
          &copy; 2024 Whitepace LLC.
        </div>
      </footer>
    );
}
