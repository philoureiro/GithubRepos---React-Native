import React from 'react';
import {
  HighlighterTitleIcon,
  TextHighlighterTitle,
  TextInfosHighlighter,
  TextView,
} from './styles';

interface PersonDetailsProps {
  name: string;
  email: string;
  location: string;
}

const PersonDetails: React.FC<PersonDetailsProps> = (props) => {
  const {name, email, location} = props;
  const nameUp = name ? name.toUpperCase() : name;

  return (
    <>
      <HighlighterTitleIcon />
      <TextView>
        <TextHighlighterTitle>{nameUp}</TextHighlighterTitle>
        <TextInfosHighlighter>{email}</TextInfosHighlighter>
        <TextInfosHighlighter>{location}</TextInfosHighlighter>
      </TextView>
    </>
  );
};

export default PersonDetails;
