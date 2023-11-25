import NavBar from "@/components/navBar";
import Table from "@/components/cart-checkout-table";

function Page() {
  return (
    <div className="h-screen px-10 ">
      <NavBar />
      <main className="flex items-center h-screen pt-32">
      <div className="flex flex-col h-full gap-5 w-[70%]">
        <h1 className="text-2xl font-bold">Checkout</h1>
        <Table />
      </div>
      <div className="w-[30%] flex items-center justify-center">checkout</div>
      </main>

    </div>
  );
}

export default Page;
