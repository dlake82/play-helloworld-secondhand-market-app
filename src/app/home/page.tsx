"use client";

import ProductCarousel from "@/components/ProductCarousel";

const products: Product[] = [
  {
    discountRate: 10,
    price: 10000,
    productImage:
      "https://health.chosun.com/site/data/img_dir/2023/07/17/2023071701753_0.jpg",
    productName: "product1",
    rating: 4.5,
    ratingCount: 100,
    storeImage:
      "https://health.chosun.com/site/data/img_dir/2023/07/17/2023071701753_0.jpg",
    storeName: "store1",
  },
  {
    discountRate: 10,
    price: 10000,
    productImage:
      "https://health.chosun.com/site/data/img_dir/2023/07/17/2023071701753_0.jpg",
    productName: "product1",
    rating: 4.5,
    ratingCount: 100,
    storeImage:
      "https://health.chosun.com/site/data/img_dir/2023/07/17/2023071701753_0.jpg",
    storeName: "store1",
  },
];

export default function Page() {
  return (
    <div>
      <h1>title</h1>
      <ProductCarousel products={products} />
    </div>
  );
}
