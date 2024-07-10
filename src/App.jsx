import { Suspense, lazy } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Loader from "./component/loading/loadin";

// Lazy load the components
const HomePage = lazy(() => import("./component/home/HomePage"));
const About = lazy(() => import("./component/AboutUs/About"));
const Categroies = lazy(() => import("./component/Categroies/Categroies"));
const FrozenFood = lazy(() =>
  import("./component/Categroies/FrozenFood/Frozen")
);
const Media = lazy(() => import("./component/Media/Media"));
const ContactUs = lazy(() => import("./component/ContactUs/ContactUs"));
const StillInProgress = lazy(() =>
  import("./component/stillInProgress/StillInProgress")
);

// product import

//snacks
const Cheese = lazy(() =>
  import("./component/Categroies/products/snacks/Cheese/cheese")
);
const Chili = lazy(() =>
  import("./component/Categroies/products/snacks/chili/Chili")
);
const Kebab = lazy(() =>
  import("./component/Categroies/products/snacks/kebab/Kebab")
);
const Ketchup = lazy(() =>
  import("./component/Categroies/products/snacks/Ketchup/Ketchup")
);

//frozen
const Broccoli = lazy(() =>
  import("./component/Categroies/products/Frozen/broccoli/Broccoli")
);
const Artichokes = lazy(() =>
  import("./component/Categroies/products/Frozen/artichokes/Artichokes")
);
const ChoppedGreen = lazy(() =>
  import("./component/Categroies/products/Frozen/choppedGreen/ChoppedGreen")
);
const GreenPeas = lazy(() =>
  import("./component/Categroies/products/Frozen/greenPeas/GreenPeas")
);
const MincedMolokhia = lazy(() =>
  import("./component/Categroies/products/Frozen/mincedMolokhia/MincedMolokhia")
);
const Mixed = lazy(() =>
  import("./component/Categroies/products/Frozen/mixedVegtables/Mixed")
);
const Okra = lazy(() =>
  import("./component/Categroies/products/Frozen/okra/okra")
);
const PeeledBroad = lazy(() =>
  import("./component/Categroies/products/Frozen/peeled/peeled")
);
const PeasCarrots = lazy(() =>
  import("./component/Categroies/products/Frozen/peasCarrots/PeasCarrots")
);
const Spinach = lazy(() =>
  import("./component/Categroies/products/Frozen/spinach/Spinach")
);
const Taro = lazy(() =>
  import("./component/Categroies/products/Frozen/taro/Taro")
);

//beans
const ChickPeas = lazy(() =>
  import("./component/Categroies/products/Beans/chickBeans/ChickBeans")
);
const Hummas = lazy(() =>
  import("./component/Categroies/products/Beans/hummas/Hummas")
);
const CookedGreenPeas = lazy(() =>
  import(
    "./component/Categroies/products/Beans/cookedGreenPeas/CookedGreenPeas"
  )
);
const WhiteBeans = lazy(() =>
  import("./component/Categroies/products/Beans/WhiteBeans/WhiteBeans")
);
const PlainPeas = lazy(() =>
  import("./component/Categroies/products/Beans/plainPeas/PlainPeas")
);
const EgyFavaBeans = lazy(() =>
  import("./component/Categroies/products/Beans/EgyptianFavaBeans/EgyFavaBeans")
);

//pickles
const MixedPickles = lazy(() =>
  import("./component/Categroies/products/Pickles/MixedPickles")
);
const SpicyMixedPickles = lazy(() =>
  import("./component/Categroies/products/Pickles/SpicyMixedPickles")
);
const LemonPickles = lazy(() =>
  import("./component/Categroies/products/Pickles/LemonPickles")
);
const SpicyLemonPickles = lazy(() =>
  import("./component/Categroies/products/Pickles/SpicyLemonPickles")
);

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="categroies" element={<Categroies />} />
          <Route path="categroies/:id" element={<FrozenFood />} />
          <Route path="media" element={<Media />} />
          <Route path="contact" element={<ContactUs />} />
          <Route
            path="categroies/:id/stillInProgress"
            element={<StillInProgress />}
          />
          {/* <Route path="/loading" element={<Loader />} /> */}

          {/* product */}
          <Route path="/product/cheese" element={<Cheese />} />
          <Route path="/product/ketchup" element={<Ketchup />} />
          <Route path="/product/broccoli" element={<Broccoli />} />
          <Route path="/product/artichokes" element={<Artichokes />} />
          <Route
            path="/product/chopped-green-beans"
            element={<ChoppedGreen />}
          />
          <Route path="/product/green-peas" element={<GreenPeas />} />
          <Route path="/product/minced-molokhia" element={<MincedMolokhia />} />
          <Route path="/product/mixed-vegetables" element={<Mixed />} />
          <Route path="/product/okra" element={<Okra />} />
          <Route path="/product/peeled-broad-beans" element={<PeeledBroad />} />
          <Route path="/product/peas-and-carrots" element={<PeasCarrots />} />
          <Route path="/product/Spinach" element={<Spinach />} />
          <Route path="/product/taro" element={<Taro />} />
          <Route path="/product/chili" element={<Chili />} />
          <Route path="/product/kebab" element={<Kebab />} />
          <Route path="/product/chickbeans" element={<ChickPeas />} />
          <Route path="/product/hummas-tahini" element={<Hummas />} />
          <Route path="/product/cooked-green" element={<CookedGreenPeas />} />
          <Route path="/product/white-beans" element={<WhiteBeans />} />
          <Route path="/product/plain-beans" element={<PlainPeas />} />
          <Route
            path="/product/egyptian-fava-beans"
            element={<EgyFavaBeans />}
          />
          <Route path="/product/mixed-pickles" element={<MixedPickles />} />
          <Route
            path="/product/spicy-mixed-pickles"
            element={<SpicyMixedPickles />}
          />
          <Route path="/product/lemon-pickles" element={<LemonPickles />} />
          <Route
            path="/product/spicy-lemon-pickles"
            element={<SpicyLemonPickles />}
          />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
