import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #292929;
`;

export const Input = styled.TextInput`
  border-width: 1px;
  border-color: #666;
  background-color: #fff;
  color: #000;
  padding: 12px;
  width: 340px;
  height: 56px;
  border-radius: 10px;
  flex-direction: row;
  margin-bottom: 18px;
  font-size: 20px;
`;

export const Button = styled.TouchableOpacity`
  border-width: 1px;
  border-color: #666;
  justify-content: center;
  align-items: center;
  background-color: #ffce00;
  color: #fff;
  width: 340px;
  height: 56px;
  border-radius: 10px;
  flex-direction: row;
`;

export const ButtonText = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const Icon = styled(FeatherIcon)`
  font-size: 25px;
  color: #000;
`;

export const Image = styled.Image`
  border-radius: 100px;
  margin-bottom: 40px;
  max-width: 150px;
  max-height: 150px;
  flex: 1;
  align-items: center;
  justify-content: center;
`;
