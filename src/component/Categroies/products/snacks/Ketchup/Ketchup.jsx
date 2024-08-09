import { useState } from "react";
import "./KetchupStyle.css"; // Make sure to adjust the path to your CSS file
import NavBar from "../../../../NavBar/NavBar";
import Footer from "../../../../Footer/Footer";
import UpBtn from "../../../../UpBtn/UpBtn";

function Ketchup() {
  const [isFirstImage, setIsFirstImage] = useState(true);

  const handleImageClick = () => {
    setIsFirstImage(!isFirstImage); // Toggle between true and false
  };

  return (
    <div className="ketchup-holder">
      <NavBar />
      <div className="ketchup-body">
        <div className="ketchup-ingre">
          <h1>Ketchup</h1>
          <p>
            Fresh Potato slices fried in oil This product contains no
            preservatives.
          </p>
          <div className="ketchup-data">
            <h3>Ingredients:</h3>
            <p>Fresh Potatoes - Vegetables Oil - Ketchup Flavor</p>
            <h3>Store</h3>
            <p className="ketchup-store">
              <span>(Shelf-Stable)</span>
            </p>
            <p>
              Gluten and product thereof - Wheat and product thereof - Milk and
              dairy product thereof.
            </p>
            <p>
              This product contains no presrvaties, Keep away from heat and sun
            </p>
          </div>
        </div>
        <div className="ketchup-img">
          <img
            src={
              isFirstImage
                ? "/images/snacks/lion katchap.png"
                : "/images/snacks/ketchup.jpg"
            }
            alt="Ketchup"
            className="ketchupImg"
            onClick={handleImageClick}
          />
        </div>
      </div>
      <UpBtn />
      <Footer />
    </div>
  );
}

export default Ketchup;
