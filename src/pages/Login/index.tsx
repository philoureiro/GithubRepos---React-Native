import React, {useState} from 'react';
import logoGithub from '../../assets/GitHubLogo.png';
import {Container, Button, ButtonText, Input, Icon, Image} from './styles';
import findUserData from '../../services/findUserData';
import {Alert, ActivityIndicator} from 'react-native';
import {useDispatch} from 'react-redux';
import {saveDataUser, setNameUserSavePage} from '../../store/actions';

interface LoginProps {
  navigation: any;
}

const Login: React.FC<LoginProps> = ({navigation}) => {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  let resultData: any;
  return (
    <Container>
      <Image source={logoGithub} />
      <Input
        autoCapitalize="none"
        autoCorrect={true}
        placeholder="Usuário"
        placeholderTextColor="#535353"
        onChangeText={(text) => {
          setText(text);
        }}
      />

      <Button
        onPress={async () => {
          setLoading(true);
          resultData = await findUserData(text);
          if (resultData === '__ERRO__' || resultData === undefined) {
            Alert.alert('Esse usuário não existe, confira seus dados!');
            setLoading(false);
          } else {
            dispatch(saveDataUser(resultData));
            setLoading(false);
            navigation.navigate('TabNavigator');
          }
        }}>
        <ButtonText>ENTRAR </ButtonText>
        <Icon name="arrow-right" />
      </Button>
      {loading ? (
        <ActivityIndicator color="#fff" size="large" style={{marginTop: 20}} />
      ) : null}
    </Container>
  );
};

export default Login;
