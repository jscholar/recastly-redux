var changeVideoList = (videos) => ({
  //TODO:  Return some action object to change the list of videos in VideoList.
  type: 'changeVideoList',
  payload: {
    videos: videos
  }
});

export default changeVideoList;
