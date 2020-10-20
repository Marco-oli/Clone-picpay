import React from 'react';

// Components
import PayServices from '../../components/PayServices';

// Styles and Icons
import * as S from './styles';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import IconIonicons from 'react-native-vector-icons/Ionicons';

const Pay = () => {
  return (
    <S.Wrapper>
      <S.Container>
        {/* Header */}
        <S.Header>
          <IconMaterial name="qrcode-scan" size={30} color="#10c86e" />

          <S.SearchContainer placeholder="ola">
            <IconIonicons name="search" size={20} color="#555E60" />
          </S.SearchContainer>
        </S.Header>

        {/* Services */}
        <S.ServicesContainer>
          <S.ServicesTitle>Serviços</S.ServicesTitle>

          <PayServices />
        </S.ServicesContainer>
      </S.Container>
    </S.Wrapper>
  );
};

export default Pay;
