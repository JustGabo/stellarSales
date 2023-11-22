import React from "react";
import NavBar from "@/components/navBar";
import Main from "@/components/main";
import Hero from "@/components/hero";
import Footer from "@/components/footer";

function page() {
  return (
    <div className="  ">
      <div className="h-screen bg-blue-200 p-20 flex flex-col gap-20">
      <NavBar />
      <div className="  h-full flex items-center">
        <Hero />
      </div>
      </div>
      <Main />
      <Footer/>
    </div>
  );
}

export default page;
