import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  background-color: #fff;
  flex: 1;
`;

export const Container = styled.ScrollView``;

export const Header = styled.View`
  height: 70px;
  background: #f2f2f2;
  padding: 0 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 2px;
  border-bottom-color: #ccdbd1;
`;

export const Title = styled.Text`
  font-size: 26px;
  color: #363f50;
  font-weight: bold;
`;

export const Config = styled.Text`
  font-size: 20px;
  color: #5fbd72;
  font-weight: bold;
`;

export const Body = styled.View``;

export const ContainerBody = styled.View`
  background: ${({bgColor}) => bgColor};
  padding: 10px 16px;
  border-bottom-color: #c8e0d0;
  border-bottom-width: 1px;
`;

export const Message = styled.Text`
  font-size: 18px;
  color: #3d483f;
  margin-bottom: 5px;
`;

export const Date = styled.Text`
  font-size: 16px;
  color: #b5cdbd;
`;
