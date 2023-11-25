import NavBar from "@/components/navBar";
import ProductView from "@/components/product-view";
import RelatedProducts from "@/components/related-products";

interface Props {
  params: {
    id: number;
  };
}

function page({ params }: Props) {
  return (
    <div className="px-10 pb-5">
        <NavBar />
      <div className="pt-32 mb-10">
        <div className="flex flex-col justify-center h-full">
          <ProductView id={params.id} />
        </div>
      </div>

      <RelatedProducts id={params.id} />
    </div>
  );
}

export default page;
