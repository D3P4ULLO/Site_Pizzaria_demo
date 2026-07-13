import React from "react";

// importação de estilos
import * as Styles from "./Footer.styles";

function Footer() {
  return (
    <Styles.FooterContainer>
      <Styles.FooterContent>
        <Styles.Column>
          <Styles.Brand>🍕 Pizzas Dons</Styles.Brand>
          <Styles.Text>
            A melhor pizza da cidade, feita com ingredientes frescos e muito
            amor. Peça online e receba no conforto da sua casa.
          </Styles.Text>
        </Styles.Column>

        <Styles.Column>
          <Styles.ColumnTitle>Horário</Styles.ColumnTitle>
          <Styles.FooterLink>Seg - Sex: 18h às 23h</Styles.FooterLink>
          <Styles.FooterLink>Sáb - Dom: 17h às 00h</Styles.FooterLink>
        </Styles.Column>

        <Styles.Column>
          <Styles.ColumnTitle>Contato</Styles.ColumnTitle>
          <Styles.FooterLink>📞 (11) 99999-9999</Styles.FooterLink>
          <Styles.FooterLink>📍 Rua da Pizza, 123</Styles.FooterLink>
          <Styles.FooterLink>📧 contato@pizzasdons.com</Styles.FooterLink>
        </Styles.Column>
      </Styles.FooterContent>

      <Styles.Divider />
      <Styles.Copyright>
        © {new Date().getFullYear()} Pizzas Dons — Todos os direitos reservados
      </Styles.Copyright>
    </Styles.FooterContainer>
  );
}

export default Footer;
