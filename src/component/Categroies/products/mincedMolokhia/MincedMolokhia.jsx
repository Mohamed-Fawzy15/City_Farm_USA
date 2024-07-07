import "./MincedMolokhiaStyle.css";
import NavBar from "../../../NavBar/NavBar";
import Footer from "../../../Footer/Footer";
import UpBtn from "../../../UpBtn/UpBtn";

function MincedMolokhia() {
  return (
    <div className="mincedMolokhia-holder">
      <NavBar />
      <div className="mincedMolokhia-body">
        <div className="mincedMolokhia-ingre">
          <h1>Minced Molokhia</h1>
          <p>
            Our Minced Molokhia texture is what makes it unique: very slimy when
            cooked which is why it makes an ideal soup.
          </p>
          <div className="mincedMolokhia-data">
            <h3>Ingredients:</h3>
            <p>Garden fresh frozen Minced Molokhia. No additives.</p>
            <h3>Store</h3>
            <p className="mincedMolokhia-store">
              City Farm Minced Molokhia stay fresh up to 24 hours when stored in
              a cold place or up to expiry date when stored at -18°C.
              <span>(Shelif-Store)</span>
            </p>
            <h3>Cooking Suggestion:</h3>
            <p>
              Drop frozen Molokhia in 2-3 cups of boiling broth Add salt,
              pepper, bring to boil. Brown 6 garlic cloves, in 1 tbsp butter
              adding a pinch of coriander add to Molokhia. Cook 2 minutes and
              serve with cooked rice
            </p>
          </div>
        </div>
        <div className="mincedMolokhia-img">
          <img
            src="/images/frozen/Minced.webp"
            alt="mincedMolokhia"
            className="mincedMolokhiaImg"
          />
        </div>
      </div>
      <UpBtn />
      <Footer />
    </div>
  );
}

export default MincedMolokhia;
