import Redux from 'redux';

var videoListReducer = (state = [], action) => {
  //TODO: define a reducer for the videoList field of our state.
  switch (action.type) {

  case 'changeVideoList':
    return {
      videos: action.payload.videos
    };
  default:
    return state;
    
  }
};

export default videoListReducer;
