import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const HeaderBox = styled.View`
  background-color: #000;
  height: 100px;
  width: 100%;
  flex-direction: row;
`;

export const HeaderText = styled.Text`
  color: #fff;
  margin-top: 50px;
  margin-left: 100px;
  margin-right: 130px;
  font-size: 18px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
`;

export const BackButton = styled.TouchableOpacity`
  margin-bottom: 20px;
  background: transparent;
  flex-direction: row;
`;

export const Icon = styled(FeatherIcon)`
  margin-top: 48px;
  margin-left: 10px;
  font-size: 30px;
  color: #fff;
`;
