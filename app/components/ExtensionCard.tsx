const ExtensionCard = () => {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#043873] px-8">
       
        {/* Main Content Container */}
        <div className="flex flex-col md:flex-row items-start justify-between max-w-6xl w-full">
          
          {/* Text Section (Left) */}
          <div className="text-white md:w-1/2 mb-8 md:mb-0 justify-center">
            <h2 className="text-4xl font-bold mb-4">Use as Extension</h2>
            <p className="text-lg mb-6 leading-relaxed">
              Use the web clipper extension, available on Chrome and Firefox, to save
              web pages or take screenshots as notes.
            </p>
            <button className="bg-[#4A90E2] text-white px-6 py-3 rounded-lg font-medium shadow-md hover:bg-[#357ABD] transition duration-300">
              Let’s Go →
            </button>
          </div>
          
          {/* Right Box Section */}
          <div className="w-1/2 h-80 bg-[#C4DEFD] shadow-md">
          </div>
        </div>
      </div>
    );
  };
  

export default ExtensionCard;
