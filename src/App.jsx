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

const Cheese = lazy(() =>
  import("./component/Categroies/products/Cheese/cheese")
);
const Chili = lazy(() => import("./component/Categroies/products/chili/Chili"));
const Kebab = lazy(() => import("./component/Categroies/products/kebab/Kebab"));

const Ketchup = lazy(() =>
  import("./component/Categroies/products/Ketchup/Ketchup")
);
const Broccoli = lazy(() =>
  import("./component/Categroies/products/broccoli/Broccoli")
);
const Artichokes = lazy(() =>
  import("./component/Categroies/products/artichokes/Artichokes")
);
const ChoppedGreen = lazy(() =>
  import("./component/Categroies/products/choppedGreen/ChoppedGreen")
);
const GreenPeas = lazy(() =>
  import("./component/Categroies/products/greenPeas/GreenPeas")
);
const MincedMolokhia = lazy(() =>
  import("./component/Categroies/products/mincedMolokhia/MincedMolokhia")
);
const Mixed = lazy(() =>
  import("./component/Categroies/products/mixedVegtables/Mixed")
);
const Okra = lazy(() => import("./component/Categroies/products/okra/okra"));
const PeeledBroad = lazy(() =>
  import("./component/Categroies/products/peeled/peeled")
);
const PeasCarrots = lazy(() =>
  import("./component/Categroies/products/peasCarrots/PeasCarrots")
);
const Spinach = lazy(() =>
  import("./component/Categroies/products/spinach/Spinach")
);
const Taro = lazy(() => import("./component/Categroies/products/taro/Taro"));
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
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
