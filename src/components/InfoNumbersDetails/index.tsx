import React from 'react';
import {
  RectangleInfo,
  TextRectangleNumbersInfo,
  TextRectangleLabelInfo,
  TextView,
} from './styles';

interface PersonDetailsProps {
  followers: number;
  following: number;
  repos: number;
}
const InfoNumbersDetails: React.FC<PersonDetailsProps> = (props) => {
  const {followers, following, repos} = props;
  return (
    <>
      <RectangleInfo>
        <TextView>
          <TextRectangleNumbersInfo>{followers}</TextRectangleNumbersInfo>
          <TextRectangleLabelInfo>Seguidores</TextRectangleLabelInfo>
        </TextView>
        <TextView>
          <TextRectangleNumbersInfo>{following}</TextRectangleNumbersInfo>
          <TextRectangleLabelInfo>Seguindo</TextRectangleLabelInfo>
        </TextView>
        <TextView>
          <TextRectangleNumbersInfo>{repos}</TextRectangleNumbersInfo>
          <TextRectangleLabelInfo>Repos</TextRectangleLabelInfo>
        </TextView>
      </RectangleInfo>
    </>
  );
};

export default InfoNumbersDetails;
