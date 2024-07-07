import "./GreenPeasStyle.css";
import NavBar from "../../../NavBar/NavBar";
import Footer from "../../../Footer/Footer";
import UpBtn from "../../../UpBtn/UpBtn";

function GreenPeas() {
  return (
    <div className="greenPeas-holder">
      <NavBar />
      <div className="greenPeas-body">
        <div className="greenPeas-ingre">
          <h1>Green Peas</h1>
          <p>
            City Farm offers you both pure whole Green Beans as well as tender
            cut Green Beans. They are rich, delicious and free from veins.{" "}
          </p>
          <div className="greenPeas-data">
            <h3>Ingredients:</h3>
            <p>Garden fresh frozen Peas. No additives.</p>
            <h3>Store</h3>
            <p className="greenPeas-store">
              City Farm peas stays fresh up to 24 hours when stored in a cold
              place or up to expiry date when stored at -18°C.
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
              Brown medium-size sliced onion in butter. Add 1/2 kg cubed meat.
              Brown for 15 minutes over medium heat. Add 1 cup of water and 1
              tbsp tomato paste, bring to boil, stir in frozen peas, add salt
              and pepper. Reduce heat and cook for 15 minutes
            </p>
          </div>
        </div>
        <div className="greenPeas-img">
          <img
            src="/images/frozen/green peas.webp"
            alt="greenPeas"
            className="greenPeasImg"
          />
        </div>
      </div>
      <UpBtn />
      <Footer />
    </div>
  );
}

export default GreenPeas;
