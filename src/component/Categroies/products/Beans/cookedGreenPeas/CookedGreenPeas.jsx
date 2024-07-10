import { useState } from "react";
import "./CookedPeasStyle.css"; // Make sure to adjust the path to your CSS file
import NavBar from "../../../../NavBar/NavBar";
import Footer from "../../../../Footer/Footer";
import UpBtn from "../../../../UpBtn/UpBtn";

function CookedGreenPeas() {
  const [isFirstImage, setIsFirstImage] = useState(true);

  const handleImageClick = () => {
    setIsFirstImage(!isFirstImage); // Toggle between true and false
  };

  return (
    <div className="ChickPeas-holder">
      <NavBar />
      <div className="ChickPeas-body">
        <div className="ChickPeas-ingre">
          <h1>Cooked Green Peas</h1>
          <div className="ChickPeas-data">
            <h3>Ingredients:</h3>
            <p>Dry Peas - Water - Salt - Sugar - Cacium Chloride</p>
            <h3 className="ChickPeas-store">
              Store: <span>(Shelf-Stable)</span>
            </h3>
            <p>Refrigerated After Opening</p>
            <p>Store in dry, good Ventilated Place.</p>
          </div>
        </div>
        <div className="ChickPeas-img">
          <img
            src={
              isFirstImage
                ? "/images/beans/cooked peas.webp"
                : "/images/beans/cookedPeasFactor.webp"
            }
            alt="ChickPeas"
            className="ChickPeasImg"
            onClick={handleImageClick}
          />
        </div>
      </div>
      <UpBtn />
      <Footer />
    </div>
  );
}

export default CookedGreenPeas;
