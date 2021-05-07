import * as actionTypes from './constants';

const defaultState = {
  topBanners: []
}

function reducer(state = defaultState, action) {
  switch(action.CHANGE_TOP_BANNERS) {
    case actionTypes.CHANGE_TOP_BANNERS:
      return {...state, topBanners: []};
    default: 
      return state;
  }
}

export default reducer;