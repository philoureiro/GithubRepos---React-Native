import React from 'react';
import {View} from 'react-native';
import {
  HighlighterTitleIcon,
  TextHighlighterTitle,
  TextInfosHighlighter,
  StarIcon,
  UnlockIcon,
  LockIcon,
  Container,
  TextNumberStarts,
} from './styles';

interface RepoListItemProps {
  title: string;
  info: string;
  numberOfStars: number;
}
const RepoListItem: React.FC<RepoListItemProps> = (props) => {
  const {title, info, numberOfStars} = props;
  return (
    <>
      <Container>
        <HighlighterTitleIcon />
        <TextHighlighterTitle>{title}</TextHighlighterTitle>
        <TextInfosHighlighter>{info}</TextInfosHighlighter>
        <View style={{flexDirection: 'row'}}>
          <StarIcon name="star"></StarIcon>
          <TextNumberStarts>{numberOfStars}</TextNumberStarts>
          <UnlockIcon name="unlock"></UnlockIcon>
          <LockIcon name="lock"></LockIcon>
        </View>
      </Container>
    </>
  );
};

export default RepoListItem;
