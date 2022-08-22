import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Banner = () => {
  return (
    <div className="relative">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={3000}
      >
        <div>
          <img loading="lazy" src="https://cdn.shopify.com/s/files/1/0068/5074/0281/files/Artboard_2_1_2000x.jpg?v=1660926610" alt="xd" />
        </div>

        <div>
          <img loading="lazy" src="https://cdn.shopify.com/s/files/1/0068/5074/0281/files/Hype-16x9.png?v=1660577565" alt="xd" />
        </div>

        <div>
          <img loading="lazy" src="https://cdn.shopify.com/s/files/1/0068/5074/0281/files/Image_from_iOS_50_94fafce7-e212-4f02-8532-1ac728fc7729.jpg?v=1658943136" alt="xd" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
