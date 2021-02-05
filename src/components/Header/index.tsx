import React from 'react';
import {HeaderBox, BackButton, Icon, HeaderText} from './styles';

interface HeaderProps {
  navigation: any;
  title: string;
  numberOfTitle: number;
}

const Header: React.FC<HeaderProps> = (props) => {
  const {navigation, title, numberOfTitle} = props;
  return (
    <HeaderBox>
      <BackButton
        onPress={() => {
          navigation.goBack();
        }}>
        <Icon name="arrow-left" />
      </BackButton>
      <HeaderText>
        {numberOfTitle} {title}
      </HeaderText>
    </HeaderBox>
  );
};

export default Header;
