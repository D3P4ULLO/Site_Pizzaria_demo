import React from "react";

// importação de estilos
import * as Styles from "./Footer.styles";

function Footer() {
  return (
    <footer>
      <div>© {new Date().getFullYear()} Pizzaria — Projeto demonstrativo</div>
    </footer>
  );
}

export default Footer;
