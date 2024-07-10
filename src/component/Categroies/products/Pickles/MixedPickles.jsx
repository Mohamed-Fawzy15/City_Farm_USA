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
            <h3 className="pickles-store">
              Store: <span>(Shelf-Stable)</span>
            </h3>
            <p>Refrigerated After Opening</p>
            <p>
              This Product Contains No Presrvaties, Keep Away From Heat And Sun
            </p>
          </div>
        </div>
        <div className="pickles-img">
          <img
            src={
              isFirstImage
                ? "/images/pickles/mixed pickles.webp"
                : "/images/beans/mixedPicklesFactor.webp"
            }
            alt="ChickPeas"
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
