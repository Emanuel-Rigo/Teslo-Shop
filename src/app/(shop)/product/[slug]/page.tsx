import {
  ProductMobileSlideshow,
  ProductSlideshow,
  SizeSelector,
} from "@/components";
import { QuantitySelector } from "@/components/product/quantity-selector/QuantitySelector";
import { titleFont } from "@/config/fonts";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

interface Props {
  params: {
    slug: string;
  };
}

export default function page({ params }: Props) {
  const { slug } = params;
  const product = initialData.products.find((product) => product.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3">
      <div className="col-span-1 md:col-span-2">
        {/* Mobile slideshow  */}
        <ProductMobileSlideshow
          title={product.title}
          images={product.images}
          className="block md:hidden"
        />
        {/* Desktop slideshow */}
        <ProductSlideshow
          title={product.title}
          images={product.images}
          className="hidden md:block"
        />
      </div>
      <div className="col-span-1 px-5 ">
        <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>
          {product.title}
        </h1>
        <p className="text-lg mb-5">${product.price}</p>
        {/* selector de talla */}

        <SizeSelector
          selectedSize={product.sizes[0]}
          availableSizes={product.sizes}
        />

        {/* selector de cantidad */}
        <QuantitySelector quantity={2} />
        {/* Button */}
        <button className="btn-primary my-5">agregar al carrito</button>
        {/* descripcion */}
        <h3 className="font-bold text-sm">descripcion</h3>
        <p className="font-light">{product.description}</p>
      </div>
    </div>
  );
}
