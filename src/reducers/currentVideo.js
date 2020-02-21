import Redux from 'redux';
import initialVideos from './../data/exampleVideoData.js';

var currentVideoReducer = (state = initialVideos[0], action) => {
  switch (action.type) {

  case 'CHANGE_VIDEO':
    return action.video;
  default:
    return state;

  }
};

export default currentVideoReducer;
