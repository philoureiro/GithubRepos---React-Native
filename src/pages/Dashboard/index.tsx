import React, {useState} from 'react';
import Bio from '../../components/Bio';
import InfoNumbersDetails from '../../components/InfoNumbersDetails';
import PersonDetails from '../../components/PersonDetails';
import {ScrollView} from 'react-native';
import {Image} from '../Dashboard/styles';
import {useSelector} from 'react-redux';

import {
  Container,
  ExitButton,
  Header,
  HeaderText,
  TextExitButton,
  Icon,
} from './styles';

interface HomeProps {
  navigation: any;
}

const HomeScreen: React.FC<HomeProps> = ({navigation}) => {
  const dataUser: any = useSelector(
    (state: {data_user: object}) => state.data_user,
  );

  return (
    <>
      <Container>
        <Header>
          <HeaderText> {dataUser.login} </HeaderText>
          <ExitButton
            onPress={() => {
              navigation.navigate('Login');
            }}>
            <TextExitButton>Sair</TextExitButton>
            <Icon name="log-out" />
          </ExitButton>
        </Header>
        <Image
          source={{uri: dataUser.avatar_url}}
          style={{width: 150, height: 150}}
        />
        <ScrollView>
          <PersonDetails
            name={dataUser.name}
            email={dataUser.email}
            location={dataUser.location}
          />
          <InfoNumbersDetails
            followers={dataUser.followers}
            following={dataUser.following}
            repos={dataUser.public_repos}
          />
          <Bio bio={dataUser.bio} />
        </ScrollView>
      </Container>
    </>
  );
};

export default HomeScreen;
