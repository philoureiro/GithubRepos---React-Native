import {
  SET_NAME_USER_SAVE_PAGE,
  SAVE_DATA_USER,
  SAVE_DATA_REPOS,
} from './actionTypes';

export const setNameUserSavePage = (nameUser: string) => ({
  type: SET_NAME_USER_SAVE_PAGE,
  nameUserSavePage: nameUser,
});

export const saveDataUser = (dataUser: object) => ({
  type: SAVE_DATA_USER,
  dataUser: dataUser,
});

export const saveDataRepos = (dataRepo: object) => ({
  type: SAVE_DATA_REPOS,
  dataRepo: dataRepo,
});
