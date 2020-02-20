import Redux from 'redux';

var currentVideoReducer = (state = {}, action) => {
  switch (action.type) {

  case 'changeCurrentVideo':
    return {
      currentVideo: action.payload.video
    };
  default:
    return state;

  }
};

export default currentVideoReducer;
