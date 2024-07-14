import { useState } from "react";
import "./PicklesStyle.css"; // Make sure to adjust the path to your CSS file
import NavBar from "../../../NavBar/NavBar";
import Footer from "../../../Footer/Footer";
import UpBtn from "../../../UpBtn/UpBtn";

function MixedPickles() {
  const [isFirstImage, setIsFirstImage] = useState(true);

  const handleImageClick = () => {
    setIsFirstImage(!isFirstImage); // Toggle between true and false
  };

  return (
    <div className="pickles-holder">
      <NavBar />
      <div className="pickles-body">
        <div className="pickles-ingre">
          <h1>Mixed Pickles</h1>
          <div className="pickles-data">
            <h3>Ingredients:</h3>
            <p>Mixed Pickled - Water - Salt - Vinegar</p>
            <div className="pickles-store">
              <h3>Store:</h3>
              <span>(Shelf-Stable)</span>
            </div>
            <p>Refrigerate after opening</p>
            <p>
              This product contains no presrvaties, keep away from heat and sun
            </p>
          </div>
        </div>
        <div className="pickles-img">
          <img
            src={
              isFirstImage
                ? "/images/pickles/mixed pickles.webp"
                : "/images/pickles/mixedPicklesFactor.webp"
            }
            alt="mixed pickles"
            className="picklesImg"
            onClick={handleImageClick}
          />
        </div>
      </div>
      <UpBtn />
      <Footer />
    </div>
  );
}

export default MixedPickles;
