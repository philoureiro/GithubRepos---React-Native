import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const BoxItem = styled.View`
  flex-direction: row;
  background-color: #292929;
  width: 100%;
  height: 130px;
  border-bottom-width: 2px;
  border-color: #5252525d;
`;

export const Image = styled.Image`
  position: absolute;
  margin-top: 27px;
  left: 25px;
  border-radius: 100px;
  border-color: #fff;
  border-width: 3px;
  margin-bottom: 40px;
  max-width: 75px;
  max-height: 75px;
  flex: 1;
`;

export const TextTitle = styled.Text`
  margin-top: 51px;
  margin-right: 10px;
  left: 130px;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

export const AvanceButton = styled.TouchableOpacity`
  position: absolute;
  left: 360px;
  width: 50px;
  margin-top: 40px;
  margin-bottom: 40px;
  background: transparent;
`;

export const Icon = styled(FeatherIcon)`
  margin-left: 10px;
  margin-top: 8px;
  font-size: 30px;
  color: #fff;
`;

export const HighlighterTitleIcon = styled.View`
  position: absolute;
  margin-top: 45px;
  margin-bottom: 30px;
  background-color: #ffce00;
  height: 42px;
  width: 20px;
  flex-direction: row;
  border-radius: 10px;
  right: 100px;
  left: -10px;
`;
