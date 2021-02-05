import Api from './api';

let resultsData: any;
let repoData: any;

const findRepoData = async (
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

    repoData = resultsData.map(function (results) {
      return {
        name: results.name,
        stargazers_count: results.stargazers_count,
      };
    });

    return repoData;
  } catch (error) {
    console.log(error);
    console.log('Erro ao buscar dados!');
    return '__ERRO__';
  }
};

export default findRepoData;





/**
 * 
 * 
 * import Api from './api';

let resultsData: any;
let repoData: any;

const findRepoData = async (login: string) => {
  try {
    await Api.get(`users/${login}/repos?page=1&per_page=100`).then(
      async (response) => {
        resultsData = response.data;
      },
    );

    repoData = resultsData.map(function (results) {
      return {
        name: results.name,
        description: results.description,
        stargazers_count: results.stargazers_count,
      };
    });

    return repoData;
  } catch (error) {
    console.log('Erro ao buscar dados da repo!');
    return '__ERRO__';
  }
};

export default findRepoData;

 * 
 */