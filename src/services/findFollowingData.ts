import Api from './api';

let resultsData: any;
let followingData: any;

const findFollowingData = async (
  nameUser: string,
  find: string,
  numberOfResults: number,
) => {
  try {
    // do {
    await Api.get(
      `users/${nameUser}/${find}?page=${numberOfResults}&per_page=100&type=owner`,
    ).then(async (response) => {
      resultsData = response.data;
    });

    followingData = resultsData.map(function (results) {
      return {
        login: results.login,
        avatar_url: results.avatar_url,
      };
    });

    return followingData;
  } catch (error) {
    console.log(error);
    console.log('Erro ao buscar dados!');
    return '__ERRO__';
  }
};

export default findFollowingData;
