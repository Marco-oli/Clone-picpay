import React from 'react';

// Components
import InformationSettings from '../../components/InformationSettings';

// Styles and Icons
import * as S from './styles';
import IconIonicons from 'react-native-vector-icons/Ionicons';

const Settings = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Header>
          {/* Button Help */}
          <S.BoxHelp>
            <S.HelpLabel>Ajuda</S.HelpLabel>
          </S.BoxHelp>

          {/*Dados Perfil */}
          <S.BoxPerfil>
            <S.ContainerDados>
              <S.BoxIcon>
                <IconIonicons name="people-outline" size={70} color="#8EC29B" />
              </S.BoxIcon>

              <S.UserName>@Robson.Duarte</S.UserName>
              <S.Name>Robson Duarte</S.Name>
              <S.ButtonPerfil>
                <S.ButtonPerfilLabel>Ver meu perfil </S.ButtonPerfilLabel>
              </S.ButtonPerfil>
            </S.ContainerDados>

            <S.BoxMyAccount>
              <S.MyAccount>Minha conta</S.MyAccount>
            </S.BoxMyAccount>
          </S.BoxPerfil>
        </S.Header>

        {/* Body */}
        <InformationSettings />
      </S.Container>
    </S.Wrapper>
  );
};

export default Settings;
