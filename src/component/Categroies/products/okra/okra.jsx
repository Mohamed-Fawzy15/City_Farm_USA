import "./okraStyle.css";
import NavBar from "../../../NavBar/NavBar";
import Footer from "../../../Footer/Footer";
import UpBtn from "../../../UpBtn/UpBtn";

function Okra() {
  return (
    <div className="okra-holder">
      <NavBar />
      <div className="okra-body">
        <div className="okra-ingre">
          <h1>Okra</h1>
          <p>
            Available in five grades to fit your needs: Okra Extra Fine, Okra0,
            Okra1, Okra 2. We produce premium Egyptian Okra chosen from the best
            quality seeds which are free from chemicals and additives. Our okra
            is bursting with vitamins and minerals.
          </p>
          <div className="okra-data">
            <h3>Ingredients:</h3>
            <p>Garden fresh frozen Okra. No additives..</p>
            <h3>Store</h3>
            <p className="okra-store">
              City Farm Okra stays fresh up to 24 hours when stored in a cold
              place or up to expiry date when stored at -18°C.
              <span>(Shelif-Store)</span>
            </p>
            <h3>Cooking Suggestion:</h3>
            <p>To retain maximum flavor don’t thaw before cooking.</p>
          </div>
        </div>
        <div className="okra-img">
          <img src="/images/frozen/Okra.webp" alt="okra" className="okraImg" />
        </div>
      </div>
      <UpBtn />
      <Footer />
    </div>
  );
}

export default Okra;
