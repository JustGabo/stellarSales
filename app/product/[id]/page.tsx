import NavBar from "@/components/navBar";
import ProductView from "@/components/product-view";
import RelatedProducts from "@/components/related-products";
import { Suspense } from "react";

interface Props {
  params: {
    id: number;
  };
}

function page({ params }: Props) {
  return (
    <div className="px-10 pb-5">
      <NavBar />
      <Suspense fallback={<div>loading...</div>}>
        <div className="pt-32 mb-10">
          <div className="flex flex-col justify-center h-full">
            <ProductView id={params.id} />
          </div>
        </div>
      </Suspense>

      <RelatedProducts id={params.id} />
    </div>
  );
}

export default page;
