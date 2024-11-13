import React from "react";

export default function CustomizeSection() {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="max-w-5xl mx-auto flex items-center p-8 space-x-8">
          {/* Left side placeholder (blue box) */}
          <div className="w-1/2 h-80 bg-[#C4DEFD] shadow-md"></div>
          
          {/* Right side content */}
          <div className="w-1/2 text-[#212529]
]">
            <h2 className="text-5xl font-bold mb-4">
              Customise it to <br /> your needs
            </h2>
            <p className="text-lg mb-8">
              Customise the app with plugins, custom themes and multiple text editors 
              (Rich Text or Markdown). Or create your own scripts and plugins using 
              the Extension API.
            </p>
            <button className="bg-[#4F9CF9] text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-600">
              Lets Go →
            </button>
          </div>
        </div>
      </div>
    );
  }
 