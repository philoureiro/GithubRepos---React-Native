import React, {useMemo, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {saveDataUser} from '../../store/actions';
import findUserData from '../../services/findUserData';
import Bio from '../../components/Bio';
import InfoNumbersDetails from '../../components/InfoNumbersDetails';
import PersonDetails from '../../components/PersonDetails';
import {ScrollView, Alert} from 'react-native';
import {Image} from '../Dashboard/styles';
import {
  Container,
  ExitButton,
  Header,
  HeaderText,
  TextExitButton,
  Icon,
  SaveButton,
} from './styles';

interface SavePersonProps {
  navigation: any;
}
const SavePerson: React.FC<SavePersonProps> = (props) => {
  const {navigation} = props;
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [resultsData, setResultsData] = useState([]);

  const nameUser: any = useSelector(
    (state: {name_user_save_page: string}) => state.name_user_save_page,
  );

  useMemo(() => {
    setLoading(true);
    async function loadReposResults() {
      try {
        const resultDataProvisional = await findUserData(nameUser);
        setResultsData(resultDataProvisional);
        if (
          resultDataProvisional === '__ERRO__' ||
          resultDataProvisional === undefined
        ) {
          Alert.alert('Esse repositório não existe.');
        }
      } catch (error) {
        console.log('Erro ao buscar repositório.');
      }
      setLoading(false);
    }
    loadReposResults();
  }, [nameUser]);

  return (
    <>
      <Container>
        <Header>
          <SaveButton
            onPress={() => {
              navigation.goBack();
            }}>
            <Icon name="arrow-left" color="#fff" />
          </SaveButton>
          <HeaderText> {resultsData.login} </HeaderText>
          <ExitButton
            onPress={() => {
              dispatch(saveDataUser(resultsData));
              navigation.navigate('Home');
            }}>
            <TextExitButton>Salvar</TextExitButton>
            <Icon name="log-in" color="#5cbc29" />
          </ExitButton>
        </Header>
        <Image
          source={{uri: resultsData.avatar_url}}
          style={{width: 150, height: 150}}
        />
        <ScrollView>
          <PersonDetails
            name={resultsData.name}
            email={resultsData.email}
            location={resultsData.location}
          />
          <InfoNumbersDetails
            followers={resultsData.followers}
            following={resultsData.following}
            repos={resultsData.public_repos}
          />
          <Bio bio={resultsData.bio} />
        </ScrollView>
      </Container>
    </>
  );
};

export default SavePerson;
