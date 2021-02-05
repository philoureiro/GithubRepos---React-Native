import React, {useState, useMemo} from 'react';
import {useSelector} from 'react-redux';
import {ScrollView, Alert} from 'react-native';
import FollowersListItem from '../../components/FollowersListItem';
import {Container, Loading, ViewLoading} from './styles';
import Header from '../../components/Header';
import findFollowingData from '../../services/findFollowingData';

interface FollowingProps {
  navigation: object;
}

interface DataProps {
  login: string;
  redirect: string;
  navigation: number;
  avatar_url: string;
}

const Following: React.FC<FollowingProps> = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [following, setFollowing] = useState([]);
  const dataUser: any = useSelector(
    (state: {data_user: object}) => state.data_user,
  );

  useMemo(() => {
    setLoading(true);
    loadFollowingResults();
  }, [dataUser.following, dataUser.login]);

  async function loadFollowingResults() {
    setFollowing([]);
    let i = 0;
    const numberOfCalls = Math.trunc(dataUser.following / 100 + 1);
    while (i < numberOfCalls) {
      try {
        const resultData = await findFollowingData(
          dataUser.login,
          'following',
          i,
        );
        if (resultData === '__ERRO__' || resultData === undefined) {
          Alert.alert('Esse repositório não existe.');
        } else {
          setFollowing((prevArray) => [...prevArray, resultData]);
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
              title={'seguindo'}
              numberOfTitle={dataUser.following}
            />
            <ScrollView>
              {following.map(function (data: []) {
                return data.map(function (data: DataProps) {
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

export default Following;
