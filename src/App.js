import Footer from "./components/footer/Footer";
import { Header } from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Footer
        h1="Prompt Generetor"
        h2="Dweep Daily"
        h3="All Contributors
"
        h4="Your data on Dweep.io
"
        h5="Contribute to Dweep
"
      />
    </div>
  );
}

export default App;
