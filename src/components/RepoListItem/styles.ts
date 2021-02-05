import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  border-bottom-width: 2px;
  border-color: #5252525d;
  margin-top: 30px;
`;

export const HighlighterTitleIcon = styled.View`
  background-color: #ffce00;
  height: 42px;
  width: 20px;
  flex-direction: row;
  border-radius: 10px;
  right: 100px;
  left: -10px;
`;

export const TextHighlighterTitle = styled.Text`
  color: #fff;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: -34px;
  font-size: 20px;
  font-weight: bold;
`;

export const TextInfosHighlighter = styled.Text`
  margin-top: 3px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 15px;
  color: #fff;
  font-size: 18px;
  font-weight: 300;
`;

export const StarIcon = styled(FeatherIcon)`
  margin-left: 20px;
  margin-bottom: 30px;
  font-size: 22px;
  color: #ffce00;
`;

export const UnlockIcon = styled(FeatherIcon)`
  position: absolute;
  left: 325px;
  margin-bottom: 30px;
  margin-right: 10px;
  font-size: 22px;
  color: #63bf1f;
`;
export const LockIcon = styled(FeatherIcon)`
  position: absolute;
  left: 360px;
  margin-bottom: 30px;
  margin-right: 10px;
  font-size: 22px;
  color: #cc042a;
`;

export const TextNumberStarts = styled.Text`
  margin-top: 1px;
  margin-left: 8px;
  margin-right: 150px;
  margin-bottom: 15px;
  color: #fff;
  font-size: 18px;
  font-weight: 300;
`;
