import Header from "../src/Components/Header";
import Beneficios from "./Components/ Beneficios";
import Contato from "./Components/ Contato";
import Resultados from "./Components/ Resultados";
import Sobre from "./Components/ Sobre";
import Home from "./Components/Home";
import Problemas from "./Components/Problemas";
import Servicos from "./Components/Servicos";
import Footer from "../src/Components/Footer";

function App() {

  return (


    <>
      <Header />
      <main>
        <Home />
        <Sobre />
        <Problemas />
        <Beneficios />
        <Servicos />
        <Resultados />

        <Contato />
      </main >
      <Footer />
    </>
  );
}



export default App


