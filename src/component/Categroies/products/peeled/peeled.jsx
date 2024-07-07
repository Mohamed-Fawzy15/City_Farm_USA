import "./PeeledBroadStyle.css";
import NavBar from "../../../NavBar/NavBar";
import Footer from "../../../Footer/Footer";
import UpBtn from "../../../UpBtn/UpBtn";

function PeeledBroad() {
  return (
    <div className="peeledBroad-holder">
      <NavBar />
      <div className="peeledBroad-body">
        <div className="peeledBroad-ingre">
          <h1>Peeled Broad Beans</h1>
          <p>
            You can enjoy our freshly harvested Broad Beans through all seasons.
            They are sorted and quickly frozen to preserve their bright green
            colour, smooth texture and essential nutritious values.
          </p>
          <div className="peeledBroad-data">
            <h3>Ingredients:</h3>
            <p>Garden fresh frozen Broad Beans. No additives.</p>
            <h3>Store</h3>
            <p className="peeledBroad-store">
              City Farm Broad Beans stay fresh up to 24 hours when stored in a
              cold place or up to expiry date when stored at -18°C.
              <span>(Shelif-Store)</span>
            </p>
            <h3>Cooking Suggestion:</h3>
            <p>
              Boil Broad Beans In water on medium high heat. Reduce heat to
              medium and soak for 45 minutes, or until Broad Beans are soft.
              Once Broad Beans are tender, remove beans from heat and puree in a
              blender. Put puréed broad beans in a saucepan and bring to a boil.
              Add water if needed. Stir in cumin, garlic, lemon Juice, and olive
              oil and bring to a second boil. Simmer for 5 minutes. Serve in a
              bowl and sprinkle parsley on top
            </p>
          </div>
        </div>
        <div className="peeledBroad-img">
          <img
            src="/images/frozen/Peeledbroad beans.webp"
            alt="peeledBroad"
            className="peeledBroadImg"
          />
        </div>
      </div>
      <UpBtn />
      <Footer />
    </div>
  );
}

export default PeeledBroad;
