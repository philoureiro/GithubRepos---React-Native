import Api from './api';

interface RepositoryProps {
  login: string;
  name: string;
  email: string;
  location: string;
  company: string;
  bio: string;
  avatar_url: string;
  followers_url: string;
  following_url: string;
  organizations_url: string;
  starred_url: string;
  public_repos: string;
  public_gists: string;
  followers: string;
  following: string;
}

const separateData = (data: RepositoryProps) => {
  const atualData = {
    login: data.login,
    name: data.name,
    email: data.email,
    location: data.location,
    company: data.company,
    bio: data.bio,
    avatar_url: data.avatar_url,
    followers_url: data.followers_url,
    following_url: data.following_url,
    organizations_url: data.organizations_url,
    starred_url: data.starred_url,
    public_repos: data.public_repos,
    public_gists: data.public_gists,
    followers: data.followers,
    following: data.following,
  };
  return atualData;
};
let resultsData: RepositoryProps;

const findUserData = async (nameUser: string) => {
  try {
    await Api.get(`users/${nameUser}`).then(async (response) => {
      resultsData = separateData(response.data);
    });
    return resultsData;
  } catch (error) {
    console.log('Erro ao buscar dados!');
    return '__ERRO__';
  }
};

export default findUserData;
