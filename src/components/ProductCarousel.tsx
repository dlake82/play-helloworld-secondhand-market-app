// components/Carousel.tsx
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
interface ProductCarouselProps {
  products: Product[];
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({
  products,
}: ProductCarouselProps) => {
  return (
    <div className="carousel-container">
      {products && (
        <Carousel>
          {products.map((product, index) => (
            <div key={index}>
              <img src={product.productImage} alt={product.productName} />
            </div>
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default ProductCarousel;
