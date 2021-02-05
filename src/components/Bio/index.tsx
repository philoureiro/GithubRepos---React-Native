import React from 'react';
import {
  HighlighterTitleIcon,
  TextHighlighterTitle,
  TextInfosHighlighter,
  TextView,
} from './styles';

interface BioProps {
  bio: string;
}
const Bio: React.FC<BioProps> = (props) => {
  const {bio} = props;
  return (
    <>
      <HighlighterTitleIcon />
      <TextView>
        <TextHighlighterTitle>BIO</TextHighlighterTitle>
        <TextInfosHighlighter>{bio}</TextInfosHighlighter>
      </TextView>
    </>
  );
};

export default Bio;
