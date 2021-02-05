import React from 'react';
import {useDispatch} from 'react-redux';
import {setNameUserSavePage} from '../../store/actions';
import {
  BoxItem,
  HighlighterTitleIcon,
  Image,
  TextTitle,
  Icon,
  AvanceButton,
} from './styles';

interface FollowersListItemProps {
  redirect: string;
  navigation: any;
  nameUser: string;
  avatar_url: string;
}

const FollowersListItem: React.FC<FollowersListItemProps> = (props) => {
  const dispatch = useDispatch();
  const {nameUser, redirect, navigation, avatar_url} = props;
  return (
    <>
      <BoxItem>
        <HighlighterTitleIcon />
        <Image source={{uri: avatar_url}} style={{width: 150, height: 150}} />
        <TextTitle>{nameUser}</TextTitle>
        <AvanceButton
          onPress={() => {
            dispatch(setNameUserSavePage(nameUser));
            navigation.navigate(redirect);
          }}>
          <Icon name="arrow-right" />
        </AvanceButton>
      </BoxItem>
    </>
  );
};

export default FollowersListItem;
