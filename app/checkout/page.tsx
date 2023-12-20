import NavBar from "@/components/navBar";
import Footer from "@/components/footer";
import Table from "@/components/cart-checkout-table";
import CheckoutForm from "@/components/checkout-form";

function Page() {
  return (
    <div className="">
      <div className="h-screen mb-20 px-10">
        <NavBar />
        <section className="pt-32 h-screen   flex flex-col gap-5">
          {/* <h1 className="text-2xl font-bold">Checkout</h1> */}
          <main className="flex h-full gap-5 md:gap-0 md:flex-row flex-col ">
            <div className="md:w-[35%] w-full bg-gray-50 border h-full mb-auto flex items-start justify-center">
              <CheckoutForm />
            </div>
            <div className="flex flex-col h-[45%]  gap-3 w-full md:w-[65%]">
              <Table />
            </div>
          </main>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Page;
