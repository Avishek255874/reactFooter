import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import InputCard from "./components/InputCard/InputCard";
function App() {
  return (
    <div>
      <Navbar />
      <br />
      <Header title="Get in touch with us." caption="Send us a massage." />
      <br />
      <InputCard />
    </div>
  );
}
export default App;
