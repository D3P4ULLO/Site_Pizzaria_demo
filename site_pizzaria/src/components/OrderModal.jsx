import * as Styles from "./OrderModal.styles";

export default function OrderModal({ orderNumber, onClose }) {
  const whatsappNumber = "5511999999999";
  const whatsappMessage = `Olá! Gostaria de rastrear meu pedido nº ${orderNumber}`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <Styles.Overlay onClick={onClose}>
      <Styles.Modal onClick={(e) => e.stopPropagation()}>
        <Styles.Emoji>✅</Styles.Emoji>
        <Styles.Brand>🍕 Pizzas Dons</Styles.Brand>
        <Styles.Message>Pedido enviado com sucesso!</Styles.Message>

        <Styles.OrderNumber>
          <Styles.OrderLabel>Nº do Pedido</Styles.OrderLabel>
          <Styles.OrderCode>{orderNumber}</Styles.OrderCode>
        </Styles.OrderNumber>

        <Styles.WhatsAppLink
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          📱 Rastreie pelo nosso WhatsApp
        </Styles.WhatsAppLink>

        <Styles.CloseBtn onClick={onClose}>Voltar ao início</Styles.CloseBtn>
      </Styles.Modal>
    </Styles.Overlay>
  );
}
