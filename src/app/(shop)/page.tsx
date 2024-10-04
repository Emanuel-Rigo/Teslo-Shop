import { Title } from "@/components";
import { initialData } from "@/seed/seed";
import { ProductGrid } from "@/components";

const products = initialData.products;

export default function page() {
  return (
    <>
      <Title
        title="Tienda"
        subtitle="todos los productos"
        className="mb-2"
      ></Title>

      <ProductGrid products={products}></ProductGrid>
    </>
  );
}
