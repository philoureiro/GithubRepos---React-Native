import React, {useState, useMemo} from 'react';
import {useSelector} from 'react-redux';
import {ScrollView, Alert} from 'react-native';
import FollowersListItem from '../../components/FollowersListItem';
import {Container, Loading, ViewLoading} from './styles';
import Header from '../../components/Header';
import findFollowingData from '../../services/findFollowingData';

interface FollowersProps {
  navigation: object;
}

const Followers: React.FC<FollowersProps> = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [followers, setFollowers] = useState([]);
  const dataUser: any = useSelector(
    (state: {data_user: object}) => state.data_user,
  );

  useMemo(() => {
    setLoading(true);
    loadFollowersResults();
  }, [dataUser.followers, dataUser.login]);

  async function loadFollowersResults() {
    setFollowers([]);
    let i = 0;
    const numberOfCalls = Math.trunc(dataUser.followers / 100 + 1);
    while (i < numberOfCalls) {
      try {
        const resultData = await findFollowingData(
          dataUser.login,
          'followers',
          i,
        );
        if (resultData === '__ERRO__' || resultData === undefined) {
          Alert.alert('Esse repositório não existe.');
        } else {
          setFollowers((prevArray) => [...prevArray, resultData]);
        }
      } catch (error) {
        console.log('Erro ao buscar repositório.');
      }
      i++;
      setLoading(false);
    }
  }

  return (
    <>
      <Container>
        {loading ? (
          <ViewLoading>
            <Loading size="large" />
          </ViewLoading>
        ) : (
          <>
            <Header
              navigation={navigation}
              title={'seguidores'}
              numberOfTitle={dataUser.followers}
            />
            <ScrollView>
              {followers.map(function (data) {
                return data.map(function (data) {
                  return (
                    <FollowersListItem
                      key={data.login}
                      nameUser={data.login}
                      avatar_url={data.avatar_url}
                      redirect={'SavePerson'}
                      navigation={navigation}
                    />
                  );
                });
              })}
            </ScrollView>
          </>
        )}
      </Container>
    </>
  );
};

export default Followers;
