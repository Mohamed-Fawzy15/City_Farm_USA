import "./SpinachStyle.css";
import NavBar from "../../../NavBar/NavBar";
import Footer from "../../../Footer/Footer";
import UpBtn from "../../../UpBtn/UpBtn";

function Spinach() {
  return (
    <div className="Spinach-holder">
      <NavBar />
      <div className="Spinach-body">
        <div className="Spinach-ingre">
          <h1>Spinach</h1>
          <p>
            We also produce conveniently chopped Spinach that is ready for
            cooking. It&apos;s flavoured, nutritious and suitable for a range of
            delicious dishes.
          </p>
          <div className="Spinach-data">
            <h3>Ingredients:</h3>
            <p>Garden fresh frozen Spinach Leaves and spices. No additives.</p>
            <h3>Store</h3>
            <p className="Spinach-store">
              City Farm Spinach stays fresh up to 24 hours when stored in a cold
              place or up to expiry date when stored at -18°C.
              <span>(Shelif-Store)</span>
            </p>
            <h3>Cooking Suggestion:</h3>
            <p>To retain maximum flavor, don’t thaw before cooking.</p>
            <h3>Other Cooking Suggestion:</h3>
            <p>
              Drop frozen Spinach into pot, adding salt, pepper, garlic,1tbsp
              tomato paste, 1 cup of water. Cook for 5 minutes over medium heat.
            </p>
          </div>
        </div>
        <div className="Spinach-img">
          <img
            src="/images/frozen/Spinach.webp"
            alt="Spinach"
            className="SpinachImg"
          />
        </div>
      </div>
      <UpBtn />
      <Footer />
    </div>
  );
}

export default Spinach;
