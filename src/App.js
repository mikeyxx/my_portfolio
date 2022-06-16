import { lazy, Suspense } from "react";
import { GlobalStyle } from "./globalStyles";
// Let's import all he components
// We will use Lazy to import all components

const Home = lazy(() => import("./Pages/Home"));
const Header = lazy(() => import("./components/Header"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop"));

function App() {
  return (
    <>
      <Suspense fallback={null}>
        <GlobalStyle />
        <Header />
        <Home />
        <ScrollToTop />
      </Suspense>
    </>
  );
}

export default App;
