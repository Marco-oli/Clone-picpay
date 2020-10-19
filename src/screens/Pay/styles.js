import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  background-color: #000;
  flex: 1;
`;

export const Container = styled.ScrollView``;

export const Header = styled.View`
  height: 50px;
  padding: 0 16px;
  margin-top: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const SearchContainer = styled.TextInput`
  flex: 0.9;
  border: 1px solid #555e60;
  border-radius: 30px;
  padding: 8px 16px;
  flex-direction: row;
`;

export const SearchLabel = styled.Text`
  color: #555e60;
  font-size: 16px;
`;

export const ServicesContainer = styled.View`
  padding: 0 16px;
  margin-top: 10px;
`;

export const ServicesTitle = styled.Text`
  font-size: 22px;
  color: #555e60;
  font-weight: 600;
`;
