import React from 'react';

// Styles and Icons
import * as S from './styles';
import avatar from '../../assets/images/avatar.png';
import IconFeather from 'react-native-vector-icons/Feather';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

const Activities = () => {
  return (
    <S.Container>
      <S.Header>
        <S.Title>Atividades</S.Title>
      </S.Header>

      <S.Card>
        <S.CardHeader>
          <S.Avatar source={avatar} />
          <S.Description>
            <S.Bold>Você</S.Bold> pagou a <S.Bold>@Marco-oli</S.Bold>
          </S.Description>
        </S.CardHeader>

        <S.CardBody>
          <S.UserName>Marco Oliveira</S.UserName>
        </S.CardBody>

        <S.CardFooter>
          <S.Details>
            <S.Value>R$ 18,00</S.Value>

            <S.Divider />

            <IconFeather name="lock" size={14} color="#fff" />
            <S.Date>há 2 anos</S.Date>
          </S.Details>

          <S.Actions>
            <S.Option>
              <IconMaterial name="comment-outline" size={14} color="#fff" />
              <S.OptionLabel>0</S.OptionLabel>
            </S.Option>

            <S.Option>
              <IconAntDesign name="hearto" size={14} color="#fff" />
              <S.OptionLabel>0</S.OptionLabel>
            </S.Option>
          </S.Actions>
        </S.CardFooter>
      </S.Card>
    </S.Container>
  );
};

export default Activities;
