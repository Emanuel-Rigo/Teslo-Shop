//import notFound from "../not-found";
import { ProductGrid, Title } from "@/components";
import { Category } from "@/interfaces";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

const seedProducts = initialData.products;

interface Props {
  params: {
    id: Category;
  };
}

const labels: Record<Category, string> = {
  men: "Hombres",
  women: "Mujeres",
  kid: "Niños",
  unisex: "Todos",
};

export default function page({ params }: Props) {
  const { id } = params;

  const products = seedProducts.filter((product) => product.gender === id);

  // if (id === "kids") {
  //   notFound();
  // }

  return (
    <>
      <Title
        title={`Articulos de ${labels[id]}`}
        subtitle="todos los productos"
        className="mb-2"
      ></Title>

      <ProductGrid products={products}></ProductGrid>
    </>
  );
}
