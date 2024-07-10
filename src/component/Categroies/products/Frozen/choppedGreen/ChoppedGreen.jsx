import "./ChoppedGreenStyle.css";
import NavBar from "../../../../NavBar/NavBar";
import Footer from "../../../../Footer/Footer";
import UpBtn from "../../../../UpBtn/UpBtn";

function ChoppedGreen() {
  return (
    <div className="choppedGreen-holder">
      <NavBar />
      <div className="choppedGreen-body">
        <div className="choppedGreen-ingre">
          <h1>Chopped Green Beans</h1>
          <p>
            City Farm offers you both pure whole Green Beans as well as tender
            cut Green Beans. They are rich, delicious and free from veins.{" "}
          </p>
          <div className="choppedGreen-data">
            <h3>Ingredients:</h3>
            <p>Garden fresh frozen Green Beans. No additives</p>
            <h3 className="choppedGreen-store">
              Store <span>(Keep Frozen)</span>
            </h3>
            <p>
              City Farm green Beans stays fresh up to 24 hours when stored in a
              cold place or up to expiry date when stored at -18°C.
            </p>
            <h3>Cooking Suggestion:</h3>
            <p>
              Brown medium size sliced onion in 1 tbsp butter. Add 1/2 Kg cubed
              meat, brown 15 minutes. Drop frozen green Beans into pot, add
              salt, pepper,2 tbsp tomato paste, 1 cup of water, cook for 15
              minutes over medium heat.
            </p>
          </div>
        </div>
        <div className="choppedGreen-img">
          <img
            src="/images/frozen/chopped Green Beans.webp"
            alt="choppedGreen"
            className="choppedGreenImg"
          />
        </div>
      </div>
      <UpBtn />
      <Footer />
    </div>
  );
}

export default ChoppedGreen;
