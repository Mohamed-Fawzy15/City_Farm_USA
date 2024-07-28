import { useState } from "react";
import "./HummasStyle.css"; // Make sure to adjust the path to your CSS file
import NavBar from "../../../../NavBar/NavBar";
import Footer from "../../../../Footer/Footer";
import UpBtn from "../../../../UpBtn/UpBtn";

function Hummas() {
  const [isFirstImage, setIsFirstImage] = useState(true);

  const handleImageClick = () => {
    setIsFirstImage(!isFirstImage); // Toggle between true and false
  };

  return (
    <div className="ChickPeas-holder">
      <NavBar />
      <div className="ChickPeas-body">
        <div className="ChickPeas-ingre">
          <h1>Hummas With Tahini</h1>
          <p className="ingre-text">Ready to eat</p>
          <div className="ChickPeas-data">
            <h3>Ingredients:</h3>
            <p>
              ChickPeas - Water - Salt - Sugar - Sesame Pasta - Garlic - Citric
              Acid - E.D.T.A Salt
            </p>
            <div className="ChickPeas-store">
              <h3>Net weight:</h3>
              <h4>400g</h4>
            </div>
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
                ? "/images/beans/hummus with tahini.webp"
                : "/images/beans/hummus.webp"
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

export default Hummas;
