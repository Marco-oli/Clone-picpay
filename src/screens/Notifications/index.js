import React from 'react';

// Styles and Icons
import * as S from './styles';

const items = [
  {
    key: String(Math.random()),
    message:
      'Identificamos um novo acesso à sua conta. Toque aqui para saber mais',
    data: 'Hoje às 11:52',
    lida: false,
  },
  {
    key: String(Math.random()),
    message:
      '@Roberta.menezes acabou de fazer seu primeiro pagamento, deixe um comentário',
    data: '24 de ago às 20:24',
    lida: false,
  },
  {
    key: String(Math.random()),
    message:
      'Ganhe até R$ 15,00 de volta. Basta recarregar seu cartão GIRO do MêtroRio com o cartão de crédito no PicPay',
    data: '14 de ago às 15:34',
    lida: true,
  },
  {
    key: String(Math.random()),
    message:
      '@Marco-oli acabou de fazer seu primeiro pagamento, deixe um comentário',
    data: '10 de ago às 12:59',
    lida: true,
  },
  {
    key: String(Math.random()),
    message:
      'Recarregue seu Cartão GIRO do mêtro! Com o PicPay você faz tudo direto do celular. Toque para saber mais',
    data: '10 de ago às 12:09',
    lida: false,
  },
  {
    key: String(Math.random()),
    message:
      '@Márcio.silva acabou de fazer seu primeiro pagamento, deixe um comentário',
    data: '10 de ago às 12:09',
    lida: false,
  },
  {
    key: String(Math.random()),
    message:
      'Identificamos um novo acesso à sua conta. Toque aqui para saber mais',
    data: '10 de ago às 12:09',
    lida: false,
  },
  {
    key: String(Math.random()),
    message:
      'Ganhe até R$ 15,00 de volta. Basta recarregar seu cartão GIRO do MêtroRio com o cartão de crédito no PicPay',
    data: '10 de ago às 12:09',
    lida: true,
  },
];

const Notifications = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Header>
          <S.Title>Notificações</S.Title>

          <S.Config>Configurar</S.Config>
        </S.Header>

        <S.Body>
          {items.map((item) => (
            <S.ContainerBody bgColor={item.lida ? '#fff' : '#d3f3de'}>
              <S.Message key={item.key}>{item.message}</S.Message>
              <S.Date>{item.data}</S.Date>
            </S.ContainerBody>
          ))}
        </S.Body>
      </S.Container>
    </S.Wrapper>
  );
};

export default Notifications;
