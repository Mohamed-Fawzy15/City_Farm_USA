import "./MixedStyle.css";
import NavBar from "../../../../NavBar/NavBar";
import Footer from "../../../../Footer/Footer";
import UpBtn from "../../../../UpBtn/UpBtn";

function Mixed() {
  return (
    <div className="mixed-holder">
      <NavBar />
      <div className="mixed-body">
        <div className="mixed-ingre">
          <h1>Mixed Vegetables</h1>
          <p>
            We select the highest quality standard fresh peas, carrots and green
            beans. The vegetables are rapidly transported from fields to the
            factory to lock in freshness.
          </p>
          <div className="mixed-data">
            <h3>Ingredients:</h3>
            <p>Garden fresh frozen Peas and carrots. No additives.</p>
            <h3 className="mixed-store">
              Store <span>(Keep Frozen)</span>
            </h3>
            <p>
              City Farm peas and carrots stays fresh up to 24 hours when stored
              in a cold place or up to expiry date when stored at -18°C.
            </p>
            <h3>Cooking Suggestion:</h3>
            <p>
              To retain maximum flavor don&apos;t thaw before cooking. Drop in
              boiling water and cook over medium heat for 8-10 minutes, drain
              and add butter.
            </p>
            <h3>Other Cooking Suggestion:</h3>
            <p>
              Brown medium size sliced onion in butter. Add 1/2Kg cubed meat.
              Brown 15 minutes over medium heat. Add 1 cup of water and 1 tbsp
              tomato paste, bring to boil, stir in frozen peas and carrots, add
              salt and pepper. Reduce heat and cook 20 minutes.
            </p>
          </div>
        </div>
        <div className="mixed-img">
          <img
            src="/images/frozen/Mixed.webp"
            alt="mixed"
            className="mixedImg"
          />
        </div>
      </div>
      <UpBtn />
      <Footer />
    </div>
  );
}

export default Mixed;
