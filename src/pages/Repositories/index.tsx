import React, {useState, useMemo} from 'react';
import {useSelector} from 'react-redux';
import {ScrollView, Alert} from 'react-native';
import ReposListItem from '../../components/RepoListItem';
import {Container, Loading, ViewLoading} from './styles';
import Header from '../../components/Header';
import findRepoData from '../../services/findRepoData';

interface RepoProps {
  navigation: object;
}
interface DataProps {
  name: string;
  stargazers_count: number;
  description: string;
}

const Repos: React.FC<RepoProps> = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);
  const dataUser: any = useSelector(
    (state: {data_user: object}) => state.data_user,
  );

  useMemo(() => {
    setLoading(true);
    loadReposResults();
  }, [dataUser.login, dataUser.public_repos]);

  async function loadReposResults() {
    setRepos([]);
    let i = 0;
    const numberOfCalls = Math.trunc(dataUser.public_repos / 100 + 1);
    while (i < numberOfCalls) {
      try {
        const resultData = await findRepoData(dataUser.login, 'repos', i);
        if (resultData === '__ERRO__' || resultData === undefined) {
          Alert.alert('Esse repositório não existe.');
        } else {
          setRepos((prevArray) => [...prevArray, resultData]);
        }
      } catch (error) {
        console.log('Erro ao buscar repositório.');
      }
      i++;
      setLoading(false);
    }
  }

  console.log('data user ==>');
  console.log(dataUser);
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
              title={'repositórios'}
              numberOfTitle={dataUser.public_repos}
            />
            <ScrollView>
              {repos.map(function (data: []) {
                return data.map(function (data: DataProps) {
                  return (
                    <ReposListItem
                      key={data.name}
                      title={data.name.toUpperCase()}
                      numberOfStars={data.stargazers_count}
                      info={data.description}
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

export default Repos;
