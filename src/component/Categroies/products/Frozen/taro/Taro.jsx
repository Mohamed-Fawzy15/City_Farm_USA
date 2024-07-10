import "./TaroStyle.css";
import NavBar from "../../../../NavBar/NavBar";
import Footer from "../../../../Footer/Footer";
import UpBtn from "../../../../UpBtn/UpBtn";

function Taro() {
  return (
    <div className="taro-holder">
      <NavBar />
      <div className="taro-body">
        <div className="taro-ingre">
          <h1>Taro</h1>
          <p>
            City Farm offers the finest quality Colcasia grown in the rich
            fertile soil of Egypt. It is carefully selected, cut, washed and
            frozen. Our Colcasia is ready for cooking as each pack contains a
            small bag of green leaves, essential for the flavor, to make
            preparing quick and easy.
          </p>
          <div className="taro-data">
            <h3>Ingredients:</h3>
            <p>
              Garden fresh frozen Colcas (Taro Roots) and spices. No additives.
            </p>
            <h3 className="taro-store">
              Store <span>(Keep Frozen)</span>
            </h3>
            <p>
              City Farm Colcas and spices stay fresh up to 24 hours when stored
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
              Other Cooking Suggestions: Drop frozen colcas into 4 boiling
              bouillon broth. Add salt, pepper, cook for 4 minutes adding the
              included spices. Cook some garlic in 1 tbsp butter. Add to
              mixture. Serve over cooked rice.
            </p>
          </div>
        </div>
        <div className="taro-img">
          <img src="/images/frozen/Taro.webp" alt="Taro" className="taroImg" />
        </div>
      </div>
      <UpBtn />
      <Footer />
    </div>
  );
}

export default Taro;
