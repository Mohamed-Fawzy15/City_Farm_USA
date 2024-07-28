import { useState } from "react";
import "./windowsStyle.css";
import NavBar from "../../../../NavBar/NavBar";
import Footer from "../../../../Footer/Footer";
import UpBtn from "../../../../UpBtn/UpBtn";

function WindowsChips() {
  const [isFirstImage, setIsFirstImage] = useState(true);

  const handleImageClick = () => {
    setIsFirstImage(!isFirstImage); // Toggle between true and false
  };

  return (
    <div className="windowsChips-holder">
      <NavBar />
      <div className="windowsChips-body">
        <div className="windowsChips-ingre">
          <h1>Windows Snacks</h1>
          <p>
            Fresh Potato slices fried in oil This product contains no
            preservatives.
          </p>
          <div className="windowsChips-data">
            <h3>Ingredients:</h3>
            <p>Corn vegetable oil - Salt - Cheese flavor - Natural colors</p>
            <h3>Store</h3>
            <p className="windowsChips-store">
              <span>(Shelf-Stable)</span>
            </p>
            <p>Free from perservation agents, keep away from heat and sun.</p>
          </div>
        </div>
        <div className="windowsChips-img">
          <img
            src={
              isFirstImage
                ? "/images/snacks/windows.webp"
                : "/images/snacks/windowsFactor.webp"
            }
            alt="windowsChips"
            className="windowsChipsImg"
            onClick={handleImageClick}
          />
        </div>
      </div>
      <UpBtn />
      <Footer />
    </div>
  );
}

export default WindowsChips;
