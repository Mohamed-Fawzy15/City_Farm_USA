import { useState } from "react";
import "./ChiliStyle.css"; // Make sure to adjust the path to your CSS file
import NavBar from "../../../NavBar/NavBar";
import Footer from "../../../Footer/Footer";
import UpBtn from "../../../UpBtn/UpBtn";

function Chili() {
  const [isFirstImage, setIsFirstImage] = useState(true);

  const handleImageClick = () => {
    setIsFirstImage(!isFirstImage); // Toggle between true and false
  };

  return (
    <div className="chili-holder">
      <NavBar />
      <div className="chili-body">
        <div className="chili-ingre">
          <h1>Chili & Lemon</h1>
          <p>
            Fresh Potato slices fried in oil This product contains no
            preservatives.
          </p>
          <div className="chili-data">
            <h3>Ingredients:</h3>
            <p>Fresh Potatoes - Vegetables - Oil - Chili & Lemon Flavor</p>
            <h3>Store</h3>
            <p className="chili-store">
              <span>(Shelf-Stable)</span>
            </p>
            <h3>Food Allergy:</h3>
            <p>
              Gluten and product thereof - Wheat and product thereof - Milk and
              dairy product thereof - Mustard and product thereof.
            </p>
          </div>
        </div>
        <div className="chili-img">
          <img
            src={
              isFirstImage
                ? "/images/snacks/lion chili.webp"
                : "/images/snacks/chipsfactors.jpg"
            }
            alt="Chili"
            className="chiliImg"
            onClick={handleImageClick}
          />
        </div>
      </div>
      <UpBtn />
      <Footer />
    </div>
  );
}

export default Chili;
