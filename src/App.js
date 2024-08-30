import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main></main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
}

export default App;
