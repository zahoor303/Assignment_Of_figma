const HomePage = () => {
  return (
    <div className="bg-white min-h-screen text-[#212529]">
      {/* Project Management Section */}
      <div className="flex flex-col md:flex-row items-center justify-center py-16 px-8 md:px-[220px] space-y-12 md:space-y-0 md:space-x-24">
        
        {/* Left Content */}
        <div className="md:w-1/2 flex flex-col items-start space-y-4">
          <h2 className="text-3xl font-bold text-[#212529]">Project Management</h2>
          <p className="text-[#212529]">
            Images, videos, PDFs and audio files are supported. Create math expressions and
            diagrams directly from the app. Take photos with the mobile app and save them to a note.
          </p>
          <button className="px-4 py-2 bg-[#4A90E2] text-white rounded-lg font-medium text-sm shadow-md hover:bg-[#357ABD] transition duration-300">
            Get Started →
          </button>
        </div>

        {/* Right Image Box */}
        <div className="w-full md:w-[500px] h-[300px] bg-[#C4DEFD]  shadow-md"></div>
      </div>

      {/* Work Together Section */}
      <div className="flex flex-col md:flex-row items-center justify-center py-16 px-8 md:px-[220px] space-y-12 md:space-y-0 md:space-x-24">
        
        {/* Left Circular Graphic with Colored Circles */}
        <div className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] flex items-center justify-center bg-transparent rounded-full relative">
          {/* Center logo or icon */}
          <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-md">
            <span className="text-2xl bg-white text-[#5986EF] font-bold">W</span>
          </div>
          
          {/* Colored Circles for nodes */}
          {[
            { color: 'bg-red-500', position: 0 },
            { color: 'bg-yellow-400', position: 1 },
            { color: 'bg-green-500', position: 2 },
            { color: 'bg-blue-500', position: 3 },
            { color: 'bg-yellow-400', position: 4 },
            { color: 'bg-green-500', position: 5 },
            { color: 'bg-red-500', position: 6 },
            { color: 'bg-blue-500', position: 7 }
          ].map((circle, index) => (
            <div
              key={index}
              className={`${circle.color} absolute w-4 h-4 md:w-6 md:h-6 rounded-full`}
              style={{
                top: `${50 + 40 * Math.sin((index * Math.PI) / 4)}%`,
                left: `${50 + 40 * Math.cos((index * Math.PI) / 4)}%`,
              }}
            />
          ))}
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 flex flex-col items-start space-y-4">
          <h2 className="text-3xl font-bold text-[#212529]">Work together</h2>
          <p className="text-[#212529]">
            With whitespace, share your notes with your colleagues and collaborate on them.
            You can also publish a note to the internet and share the URL with others.
          </p>
          <button className="px-4 py-2 bg-[#4A90E2] text-white rounded-lg font-medium text-sm shadow-md hover:bg-[#357ABD] transition duration-300">
            Try it now →
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
