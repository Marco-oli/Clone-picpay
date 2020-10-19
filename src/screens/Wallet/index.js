import React, {useState} from 'react';

import {Switch} from 'react-native';

// Styles and Icons
import * as S from './styles';
import IconFeather from 'react-native-vector-icons/Feather';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import creditCard from '../../assets/images/credit-card.png';

const Wallet = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [useBalance, setUseBalance] = useState(true);

  const handleToggleUseBalance = () => {
    setUseBalance((prevState) => !prevState);
  };

  return (
    <S.Wrapper>
      <S.Header
        colors={useBalance ? ['#52e78c', '#1ab563'] : ['#d3d3d3', '#868686']}
        start={{x: 0.0, y: 0.25}}
        end={{x: 0.5, y: 1.0}}>
        <S.HeaderContainer>
          <S.Title>Saldo PicPay</S.Title>

          <S.BalanceContainer>
            <S.Value>
              R$ <S.Bold>{isVisible ? '0,00' : '----'}</S.Bold>
            </S.Value>

            <S.EyeButton
              onPress={() => {
                setIsVisible((prevState) => !prevState);
              }}>
              <IconFeather
                name={isVisible ? 'eye' : 'eye-off'}
                size={28}
                color="#fff"
              />
            </S.EyeButton>
          </S.BalanceContainer>

          <S.Info>Seu saldo está rendendo 100% do CDI</S.Info>

          <S.Actions>
            <S.Action>
              <IconMaterial name="cash" size={28} color="#fff" />
              <S.ActionLabel>Adicionar</S.ActionLabel>
            </S.Action>

            <S.Action>
              <IconFontAwesome name="bank" size={20} color="#fff" />
              <S.ActionLabel>Retirar</S.ActionLabel>
            </S.Action>
          </S.Actions>
        </S.HeaderContainer>
      </S.Header>

      <S.UseBalance>
        <S.UseBalanceTitle>Usar saldo ao pagar</S.UseBalanceTitle>

        <Switch value={useBalance} onValueChange={handleToggleUseBalance} />
      </S.UseBalance>

      <S.PaymentMethods>
        <S.PaymentMethodsTitle>Formas de pagamento</S.PaymentMethodsTitle>

        <S.Card>
          <S.CardBody>
            <S.CardDetails>
              <S.CardTitle>Cadastre seu cartão de crédito</S.CardTitle>
              <S.CardInfo>
                Cadastre seu cartão de crédito para poder fazer pagamentos mesmo
                quando não tiver saldo no seu PicPay
              </S.CardInfo>
            </S.CardDetails>

            <S.Img source={creditCard} resizeMode="contain" />
          </S.CardBody>

          <S.AddButton>
            <IconAntDesign name="pluscircleo" size={30} color="#0db060" />
            <S.AddLabel>Adicionar cartão de crédito</S.AddLabel>
          </S.AddButton>
        </S.Card>

        <S.UseTicketContainer>
          <S.UseTicketButton>
            <IconMaterial name="ticket-outline" size={20} color="#0db060" />
            <S.UseTicketLabel>Usar código promocional</S.UseTicketLabel>
          </S.UseTicketButton>
        </S.UseTicketContainer>
      </S.PaymentMethods>
    </S.Wrapper>
  );
};

export default Wallet;
