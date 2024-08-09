import { useState } from "react";
import "./cheeseStyle.css"; // Make sure to adjust the path to your CSS file
import NavBar from "../../../../NavBar/NavBar";
import Footer from "../../../../Footer/Footer";
import UpBtn from "../../../../UpBtn/UpBtn";

function Cheese() {
  const [isFirstImage, setIsFirstImage] = useState(true);

  const handleImageClick = () => {
    setIsFirstImage(!isFirstImage); // Toggle between true and false
  };

  return (
    <div className="cheese-holder">
      <NavBar />
      <div className="cheese-body">
        <div className="cheese-ingre">
          <h1>Lion Cheese</h1>
          <p>
            Fresh Potato slices fried in oil This product contains no
            preservatives.
          </p>
          <div className="cheese-data">
            <h3>Ingredients:</h3>
            <p>Fresh Potatoes - Vegetables Oil - Cheese Flavor</p>
            <h3>Store</h3>
            <p className="cheese-store">
              <span>(Shelf-Stable)</span>
            </p>
            <h3>Food Allergy:</h3>
            <p>
              Gluten and product thereof - Wheat and product thereof - Milk and
              dairy product thereof.
            </p>
            <p>
              This product contains no presrvaties, Keep away from heat and sun
            </p>
          </div>
        </div>
        <div className="cheese-img">
          <img
            src={
              isFirstImage
                ? "/images/snacks/lion cheese.webp"
                : "/images/snacks/chipsfactors.jpg"
            }
            alt="cheese"
            className="cheeseImg"
            onClick={handleImageClick}
          />
        </div>
      </div>
      <UpBtn />
      <Footer />
    </div>
  );
}

export default Cheese;
