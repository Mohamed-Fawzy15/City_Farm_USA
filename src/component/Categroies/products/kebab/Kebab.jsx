import { useState } from "react";
import "./KebabStyle.css"; // Make sure to adjust the path to your CSS file
import NavBar from "../../../NavBar/NavBar";
import Footer from "../../../Footer/Footer";
import UpBtn from "../../../UpBtn/UpBtn";

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
            City Farm offers the finest quality Colcasia grown in the rich
            fertile soil of Egypt. It is carefully selected, cut, washed and
            frozen. Our Colcasia is ready for cooking as each pack contains a
            small bag of green leaves, essential for the flavor, to make
            preparing quick and easy.
          </p>
          <div className="kebab-data">
            <h3>Ingredients:</h3>
            <p>
              Garden fresh frozen Colcas (Taro Roots) and spices. No additives.
            </p>
            <h3>Store</h3>
            <p className="kebab-store">
              City Farm Colcas and spices stay fresh up to 24 hours when stored
              in a cold place or up to expiry date when stored at -18°C.
              <span>(Shelif-Store)</span>
            </p>
            <h3>Cooking Suggestion:</h3>
            <p>
              To retain maximum flavor don&apos;t thaw before cooking. Drop in
              boiling water and cook over medium heat for 8-10 minutes, drain
              and add butter.
            </p>
            <h3>Other Cooking Suggestion:</h3>
            <p>
              Other Cooking Suggestions: Drop frozen colcas into 4 boiling
              bouillon broth. Add salt, pepper, cook for 4 minutes adding the
              included spices. Cook some garlic in 1 tbsp butter. Add to
              mixture. Serve over cooked rice.
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
