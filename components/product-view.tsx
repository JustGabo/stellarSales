import { Product } from "@/types/index";

function ProductView(product: Product) {
  return (
    <div className="flex items-center">
      <div>
        <img src={product.image} alt="" />
      </div>
      <div>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
      </div>
    </div>
  );
}

export default ProductView;
