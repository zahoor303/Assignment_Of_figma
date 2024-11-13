import Image from "next/image";
import logo from "../../app/assets/Logo.png"
const Navbar = () => {
  return (
    <div className='w-full max-w-screen-xl h-[92px] py-4 px-8 md:px-[220px] bg-[#043873] flex justify-between items-center mx-auto'>
      <div className='w-[191px] h-[34px]'>
        <Image src={logo} alt='Whitespace Logo' width={191} height={34} />
      </div>
      <div className='flex items-center space-x-8'>
        <ul className='flex space-x-8 text-white text-base'>
        <button className='hover:text-blue-500 transition-colors'>Products</button>
          <button className="hover:text-blue-500 transition-colors">Solutions</button>
          <button className="hover:text-blue-500 transition-colors">Resources</button>
          <button className="hover:text-blue-500 transition-colors">Pricing</button>
        </ul>
        <button className='px-6 py-2 rounded-lg bg-[#FFE492] text-[#043873]' aria-label="Login">
          Login
        </button>
	
      </div>
    </div>
  );
};

export default Navbar;

