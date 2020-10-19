import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  background: #fff;
  flex: 1;
`;

export const Container = styled.ScrollView``;

export const Header = styled.View`
  flex: 1;
  height: 300px;
  background: #f2f2f2;
  padding: 15px 12px;
`;

export const BoxHelp = styled.View`
  align-items: flex-end;
`;

export const HelpLabel = styled.Text`
  font-size: 20px;
  color: #5fbb6b;
  font-weight: bold;
`;

export const BoxPerfil = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const ContainerDados = styled.View`
  align-items: center;
`;

export const BoxIcon = styled.View`
  background: #d8f4de;
  width: 120px;
  height: 120px;
  border-radius: 60px;
  align-items: center;
  justify-content: center;
  border-color: #dde7e0;
  border-width: 1px;
`;

export const UserName = styled.Text`
  font-size: 30px;
  color: #545454;
  font-weight: bold;
`;

export const Name = styled.Text`
  font-size: 18px;
  color: #bbbbbb;
  font-weight: 200;
`;

export const ButtonPerfil = styled.TouchableOpacity``;

export const ButtonPerfilLabel = styled.Text`
  font-size: 16px;
  color: #5dbc84;
  text-decoration-line: underline;
`;

export const BoxMyAccount = styled.View`
  align-items: flex-start;
`;

export const MyAccount = styled.Text`
  font-size: 16px;
  color: #5fbb6b;

  font-weight: bold;
`;
