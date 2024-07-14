import { useState } from "react";
import "./PlainPeasStyle.css"; // Make sure to adjust the path to your CSS file
import NavBar from "../../../../NavBar/NavBar";
import Footer from "../../../../Footer/Footer";
import UpBtn from "../../../../UpBtn/UpBtn";

function PlainPeas() {
  const [isFirstImage, setIsFirstImage] = useState(true);

  const handleImageClick = () => {
    setIsFirstImage(!isFirstImage); // Toggle between true and false
  };

  return (
    <div className="ChickPeas-holder">
      <NavBar />
      <div className="ChickPeas-body">
        <div className="ChickPeas-ingre">
          <h1>Plain Beans</h1>
          <p className="ingre-text">Ready to eat</p>
          <div className="ChickPeas-data">
            <h3>Ingredients:</h3>
            <p>
              Whole Fava Beans - Water - Salt - Sugar - Citric Acid - E.D.T.A
              Salt
            </p>
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
                ? "/images/beans/fava beans.webp"
                : "/images/beans/plainbeansFactor.webp"
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

export default PlainPeas;
