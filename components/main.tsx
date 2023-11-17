import {} from "react";
import Products from '@/components/products'

function Main() {
  return (
    <section className="grid relative">
      <nav className="fixed px-3 py-28">
        <ul className="flex lg:flex-col  text-gray-700 flex-row lg:gap-3 text-sm">
          <li>smartphones</li>
          <li> laptops</li>
          <li>lighting</li>
          <li>home-decoration</li>
          <li>furniture</li>
          <li>tops</li>
          <li>womens-dresses</li>
          <li>womens-shoes</li>
          <li>mens-shirts</li>
          <li>mens-shoes</li>
          <li>mens-watches</li>
          <li>womens-watches</li>
          <li>womens-bags</li>
          <li>womens-jewellery</li>
          <li>sunglasses</li>
          <li>automotive</li>
          <li>motorcycle</li>
          <li>groceries</li>
          <li>fragrances</li>
          <li>skincare</li>
        </ul>
      </nav>
      <main className="lg:ml-[235px]  p-3">
        <h2 className="text-4xl font-light tracking-wider">Sunglasses</h2>
        <Products/>
      </main>
    </section>
  );
}

export default Main;
