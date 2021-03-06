import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex: 1;
  background-color: #292929;
`;

export const Header = styled.View`
  background-color: #000;
  height: 200px;
  width: 100%;
  flex-direction: row;
`;

export const HeaderText = styled.Text`
  color: #fff;
  margin-top: 50px;
  margin-left: 20px;
  font-size: 18px;
  font-weight: bold;
`;

export const ExitButton = styled.TouchableOpacity`
  position: absolute;
  left: 330px;
  margin-bottom: 120px;
  background: transparent;
  border-top-width: 1px;
  border-color: #232129;
  flex-direction: row;
`;

export const TextExitButton = styled.Text`
  color: #fff;
  margin-top: 50px;
  font-size: 18px;
  font-weight: bold;
`;

export const Icon = styled(FeatherIcon)`
  margin-top: 48px;
  margin-left: 5px;
  font-size: 25px;
  color: #d03434;
`;
export const Image = styled.Image`
  border-radius: 100px;
  border-width: 3px;
  border-color: #fff;
  margin-top: -75px;
  margin-bottom: 40px;
  max-width: 150px;
  max-height: 150px;
  right: 130px;
  left: 130px;
`;
