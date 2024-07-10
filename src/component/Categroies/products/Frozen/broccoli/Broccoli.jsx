import "./BroccoliStyle.css";
import NavBar from "../../../../NavBar/NavBar";
import Footer from "../../../../Footer/Footer";
import UpBtn from "../../../../UpBtn/UpBtn";

function Broccoli() {
  return (
    <div className="broccoli-holder">
      <NavBar />
      <div className="broccoli-body">
        <div className="broccoli-ingre">
          <h1>Broccoli</h1>
          <p>Broccoli Florets are packed with full health benefits. </p>
          <div className="broccoli-data">
            <h3>Ingredients:</h3>
            <p>Garden fresh frozen Broccoli. No additives.</p>
            <h3 className="broccoli-store">
              Store <span>(Keep Frozen)</span>{" "}
            </h3>
            <p>
              City Farm Broccoli stays fresh up to 24 hours when stored in a
              cold place or up to expiry date when stored at -18°C.
            </p>
            <h3>Cooking Suggestion:</h3>
            <p>To retain maximum flavor don’t thaw before cooking.</p>
          </div>
        </div>
        <div className="broccoli-img">
          <img
            src="/images/frozen/Broccoli.webp"
            alt="broccoli"
            className="broccoliImg"
          />
        </div>
      </div>
      <UpBtn />
      <Footer />
    </div>
  );
}

export default Broccoli;
