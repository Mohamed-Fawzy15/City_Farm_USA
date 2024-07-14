import { useState } from "react";
import "./CookedPeasStyle.css";
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
          <p className="ingre-text">Ready to eat</p>
          <div className="ChickPeas-data">
            <h3>Ingredients:</h3>
            <p>Dry Peas - Water - Salt - Sugar - Cacium Chloride</p>
            <div className="ChickPeas-store">
              <h3>Store:</h3>
              <span>(Shelf-Stable)</span>
            </div>

            <p>Refrigerate after opening</p>
            <p>Store in dry, good ventilated place.</p>
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
