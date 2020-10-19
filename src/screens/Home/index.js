import React from 'react';

// Components
import Suggestions from '../../components/Suggestions';
import Activities from '../../components/Activities';
import Tips from '../../components/Tips';
import Banner from '../../components/Banner';

// Styles and Icons
import * as S from './styles';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

const Home = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Header>
          <IconMaterial name="qrcode-scan" size={30} color="#10c86e" />

          <S.BalanceContainer>
            <S.BalanceTitle>Meu Saldo</S.BalanceTitle>
            <S.Balance>R$ 0,00</S.Balance>
          </S.BalanceContainer>
          <IconAntDesign name="gift" size={30} color="#10c86e" />
        </S.Header>

        <Suggestions />
        <Activities />
        <Tips />
        <Banner />
      </S.Container>
    </S.Wrapper>
  );
};

export default Home;
