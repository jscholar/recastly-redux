var changeVideo = (video) => ({
  //TODO:  Return some action object to change the currently playing video.
  type: 'changeCurrentVideo',
  payload: {
    video: video
  }
});

export default changeVideo;
