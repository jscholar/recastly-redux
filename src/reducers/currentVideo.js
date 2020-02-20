import Redux from 'redux';

var currentVideoReducer = (state = {}, action) => {
  switch (action.type) {

  case 'CHANGE_VIDEO':
    return {
      video: action.video
    };
  default:
    return state;

  }
};

export default currentVideoReducer;
