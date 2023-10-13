import React from "react";
import "./productSell.scss";
import image1 from "../../images/image-1.jpg";
import image2 from "../../images/image-2.jpeg";

const ProductSell = () => {
  return (
    <div className="productSell">
      <h1>Product Sell</h1>
      <p>Product Name</p>

      <div className="products">
        <div className="wrapper">
          <div className="image">
            <img src={image1} alt="" />
          </div>
          <div className="details">
            <h3>Abstract 3D</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>

        <div className="wrapper">
          <div className="image">
            <img src={image2} alt="" />
          </div>
          <div className="details">
            <h3>Sarphens Illustrations</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSell;
