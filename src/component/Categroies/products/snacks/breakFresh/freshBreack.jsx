import { useState } from "react";
import "./freshBreakStyle.css"; // Make sure to adjust the path to your CSS file
import NavBar from "../../../../NavBar/NavBar";
import Footer from "../../../../Footer/Footer";
import UpBtn from "../../../../UpBtn/UpBtn";

function FreshBreak() {
  const [isFirstImage, setIsFirstImage] = useState(true);

  const handleImageClick = () => {
    setIsFirstImage(!isFirstImage); // Toggle between true and false
  };

  return (
    <div className="freshBreak-holder">
      <NavBar />
      <div className="freshBreak-body">
        <div className="freshBreak-ingre">
          <h1>Fresh Vegetables</h1>
          <p>
            Fresh Potato slices fried in oil This product contains no
            preservatives.
          </p>
          <div className="freshBreak-data">
            <h3>Ingredients:</h3>
            <p>
              Wheat Flour - Corn Strach - Vegetable Oil - Vegetables Flavor -
              Salt(2.5% approx)
            </p>
            <h3>Store</h3>
            <p className="freshBreak-store">
              <span>(Shelf-Stable)</span>
            </p>
            <h3>Food Allergy:</h3>
            <p>Wheat and derivatives cereals(Gluten)</p>
            <p>
              This product contains no presrvaties, Keep away from heat and sun
            </p>
          </div>
        </div>
        <div className="freshBreak-img">
          <img
            src={
              isFirstImage
                ? "/images/snacks/break fresh.webp"
                : "/images/snacks/breakfreshFactor.webp"
            }
            alt="freshBreak"
            className="freshBreakImg"
            onClick={handleImageClick}
          />
        </div>
      </div>
      <UpBtn />
      <Footer />
    </div>
  );
}

export default FreshBreak;
