import { useState } from "react";
import "./snacksStye.css"; // Make sure to adjust the path to your CSS file
import NavBar from "../../../../NavBar/NavBar";
import Footer from "../../../../Footer/Footer";
import UpBtn from "../../../../UpBtn/UpBtn";

function HotBreak() {
  const [isFirstImage, setIsFirstImage] = useState(true);

  const handleImageClick = () => {
    setIsFirstImage(!isFirstImage); // Toggle between true and false
  };

  return (
    <div className="hotBreak-holder">
      <NavBar />
      <div className="hotBreak-body">
        <div className="hotBreak-ingre">
          <h1>Hot Chili pepper</h1>
          <p>
            Fresh Potato slices fried in oil This product contains no
            preservatives.
          </p>
          <div className="hotBreak-data">
            <h3>Ingredients:</h3>
            <p>
              Wheat Flour - Corn Strach - Vegetable Oil - Hot Chili Flavor -
              Salt(3% approx)
            </p>
            <h3>Store</h3>
            <p className="hotBreak-store">
              <span>(Shelf-Stable)</span>
            </p>
            <h3>Food Allergy:</h3>
            <p>Wheat and derivatives cereals(Gluten)</p>
            <p>
              This product contains no presrvaties, Keep away from heat and sun
            </p>
          </div>
        </div>
        <div className="hotBreak-img">
          <img
            src={
              isFirstImage
                ? "/images/snacks/break hot.webp"
                : "/images/snacks/breakchilifactor.webp"
            }
            alt="hotBreak"
            className="hotBreakImg"
            onClick={handleImageClick}
          />
        </div>
      </div>
      <UpBtn />
      <Footer />
    </div>
  );
}

export default HotBreak;
