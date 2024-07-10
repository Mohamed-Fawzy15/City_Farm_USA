import { useState } from "react";
import "./KebabStyle.css"; // Make sure to adjust the path to your CSS file
import NavBar from "../../../../NavBar/NavBar";
import Footer from "../../../../Footer/Footer";
import UpBtn from "../../../../UpBtn/UpBtn";

function Kebab() {
  const [isFirstImage, setIsFirstImage] = useState(true);

  const handleImageClick = () => {
    setIsFirstImage(!isFirstImage); // Toggle between true and false
  };

  return (
    <div className="kebab-holder">
      <NavBar />
      <div className="kebab-body">
        <div className="kebab-ingre">
          <h1>Kebab</h1>
          <p>
            Fresh Potato slices fried in oil This product contains no
            preservatives.
          </p>
          <div className="kebab-data">
            <h3>Ingredients:</h3>
            <p>Fresh Potatoes - Vegetables - Oil - Kebab Flavor</p>
            <h3>Store</h3>
            <p className="kebab-store">
              <span>(Shelf-Stable)</span>
            </p>
            <h3>Food Allergy:</h3>
            <p>
              Gluten and product thereof - Wheat and product thereof - Milk and
              dairy product thereof.
            </p>
            <p>
              This Product Contains No Presrvaties, Keep Away From Heat And Sun
            </p>
          </div>
        </div>
        <div className="kebab-img">
          <img
            src={
              isFirstImage
                ? "/images/snacks/lion kebab.webp"
                : "/images/snacks/chipsfactors.jpg"
            }
            alt="Kebab"
            className="kebabImg"
            onClick={handleImageClick}
          />
        </div>
      </div>
      <UpBtn />
      <Footer />
    </div>
  );
}

export default Kebab;
