import NavBar from "@/components/navBar";
import Main from "@/components/main";
import Hero from "@/components/hero";
import Footer from "@/components/footer";


// importing contexts



function page() {
  return (
    <div className="">
      <div className="flex flex-col h-screen gap-20 px-10 bg-blue-200">
      <NavBar />
      <div className="flex items-center h-full ">
        <Hero />
      </div>
      </div>
      <Main />
      <Footer/>
    </div>
  );
}

export default page;
