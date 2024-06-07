// components/ProductCarousel.tsx
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // 스타일 임포트

interface ProductCarouselProps {
  images: string[];
  videos: string[];
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({
  images,
  videos,
}) => {
  return (
    <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true}>
      {images.map((src, index) => (
        <div key={index}>
          <img src={src} alt={`product image ${index + 1}`} />
        </div>
      ))}
      {videos.map((src, index) => (
        <div key={index}>
          <video controls>
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
