import "./ArtichokesStyle.css";
import NavBar from "../../../NavBar/NavBar";
import Footer from "../../../Footer/Footer";
import UpBtn from "../../../UpBtn/UpBtn";

function Artichokes() {
  return (
    <div className="artichokes-holder">
      <NavBar />
      <div className="artichokes-body">
        <div className="artichokes-ingre">
          <h1>Artichokes</h1>
          <p>
            Our Artichoke is cultivated from the best quality seeds. It is
            picked and frozen fast to preserve the simple goodness nature
            intended. We offer our consumers several types of processed
            artichokes: bottoms, hearts, quarters and cubes as well as artichoke
            slice, artichoke broken and artichoke with stem. Artichoke Bottoms
            are of a special variety which ensures high quality. They are
            available in different sizes: Small Bottoms: ( 3:5) cm in diameter.
            Medium Bottoms: ( 5:6) cm and (6:7) cm in diameter. Large Bottoms: (
            7:9) cm in diameter
          </p>
          <div className="artichokes-data">
            <h3>Ingredients:</h3>
            <p>Garden fresh frozen Artichokes. No additives.</p>
            <h3>Store</h3>
            <p className="artichokes-store">
              City Farm Usa Artichokes stays fresh up to 24 hours when stored in
              a cold place or up to expiry date when stored at -18°C.
              <span>(Shelif-Store)</span>
            </p>
            <h3>Cooking Suggestion:</h3>
            <p>
              Brown medium-size sliced onion and 1/2 kg minced meat, Add 2 tbsp.
              tomato paste, l/2 cup of water. Place mixture in frozen
              artichokes, place on bed of diced carrots in a shallow cooking
              dish. Spoon on bouillon cube dissolved in water. Place dish in
              medium heat over 10 minutes.
            </p>
          </div>
        </div>
        <div className="artichokes-img">
          <img
            src="/images/frozen/Artichokes.webp"
            alt="artichokes"
            className="artichokesImg"
          />
        </div>
      </div>
      <UpBtn />
      <Footer />
    </div>
  );
}

export default Artichokes;
