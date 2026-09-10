import { useLenis } from "./components/scroll/useLenis";
import Router from "./Router";
import Nav from "./layout/nav/Nav";
import Footer from "./layout/footer/Footer";

import "./sass/main.scss";

function App() {
  useLenis();

  return (
    <>
      <Nav socials={["github", "linkedIn", "resume"]} />
      <main className="main-content">
        <Router />
      </main>
      <Footer />
    </>
  );
}

export default App;
