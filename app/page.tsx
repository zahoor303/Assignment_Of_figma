
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import WorkTogether from "./components/worktogether";
import ExtensionPage from "./components/ExtensionCard";
import CustomizeSection from "./components/customize";
import YourWorkSection from "./components/yourwork";
import Sponsors from "./components/oursponsors";
import Footer from "./components/footer";




export default function Home() {
  return (
    <>
      <Navbar />
       <Hero />
     <WorkTogether />
     <ExtensionPage />
    <CustomizeSection />
     <YourWorkSection />
    <Sponsors />
    <Footer /> 
   
  
    </>
  );
} 


