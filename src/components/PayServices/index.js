import React from 'react';

// Styles and Images
import * as S from './styles';
import avatar from '../../assets/images/avatar.png';
import img1 from '../../assets/images/01.png';
import img6 from '../../assets/images/06.png';
import img7 from '../../assets/images/07.png';
import img11 from '../../assets/images/11.png';
import IconSimple from 'react-native-vector-icons/SimpleLineIcons';

const items = [
  {
    key: String(Math.random()),
    img: avatar,
    title: 'Pagar pessoas',
    subtitle: 'Pague todos os seus amigos que também estão no PicPay',
  },
  {
    key: String(Math.random()),
    img: img11,
    title: 'Pagar nas maquininhas',
    subtitle:
      'Pague em máquinas Cielo, Getnet e Rede escaneando o Qr code na ...',
  },
  {
    key: String(Math.random()),
    img: img6,
    title: 'Pagar Conta',
    subtitle: 'Pague sua conta de luz, água, boletos bancários etc.',
  },
  {
    key: String(Math.random()),
    img: img7,
    title: 'Cobrar',
    subtitle: 'Cobre um amigo',
  },
  {
    key: String(Math.random()),
    img: img1,
    title: 'Recarga de Celular',
    subtitle: 'Vivo, Claro, Tim, Oi, Nextel, Algar, Sercomtel, Correios',
  },
];

const PayServices = () => {
  return (
    <S.PayServicesContainer>
      {items.map((item) => (
        <S.ServicesBox>
          <S.Img source={item.img} resizeMode="contain" />

          <S.DetailsContainer>
            <S.Title>{item.title}</S.Title>
            <S.Description>{item.subtitle}</S.Description>
          </S.DetailsContainer>

          <IconSimple name="options-vertical" size={20} color="#555e60" />
        </S.ServicesBox>
      ))}
    </S.PayServicesContainer>
  );
};

export default PayServices;
