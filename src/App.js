import React from "react";
import Agregar from "./components/Agregar/Agregar";
import Footer from "./components/Footer/Footer";
import Lista from "./components/Lista/Lista";

function App() {
  return (
    <div className="container-app">
        <div className="container-todo">
          <h1>Todo App</h1>
          <Agregar />
          <hr />
          <Lista />
        </div>
        <Footer />
    </div>
  );
}

export default App;
