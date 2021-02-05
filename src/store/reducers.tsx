import {
  SET_NAME_USER_SAVE_PAGE,
  SAVE_DATA_USER,
  SAVE_DATA_REPOS,
} from './actionTypes';

interface ActionTypes {
  type: any;
  nameUserSavePage: string;
  dataUser: object;
  dataRepo: [];
}

const initialState = {
  name_user_save_page: '',
  data_user: {},
  data_repo: [],
};

export const mainReducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case SAVE_DATA_USER:
      return {...state, data_user: (state.data_user = action.dataUser)};

    case SAVE_DATA_REPOS:
      return {...state, data_repo: (state.data_repo = action.dataRepo)};

    case SET_NAME_USER_SAVE_PAGE:
      return {
        ...state,
        name_user_save_page: (state.name_user_save_page =
          action.nameUserSavePage),
      };

    default:
      return state;
  }
};
