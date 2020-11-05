import React from "react";
import ReactDOM from "react-dom";
import Header from "./componentes/Header";
import "./styles/styles.css";


function App() {
 
  return (
    <div className="App">
    
      <Header />
      <footer className="footer">
        <div className="container_footer">
          <div className="option">
            <a href="./index.js">Terminos y Condiciones </a>
          </div>
          <div className="option_contact">
            <a href="mailto:contado@gmail.com">
              <p>contacto@mail.com</p>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
