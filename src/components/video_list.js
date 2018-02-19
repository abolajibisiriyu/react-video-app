import React from 'react';

import VideListItem from './video_list_item';

const VideoList = props => {
  const videoItems = props.videos.map(video => {
    return (
      <VideListItem
        onVideoClick={props.onVideoSelect}
        key={video.etag}
        video={video}
      />
    );
  });
  return (
    <div className="col-md-4">
      <ul className="list-group">{videoItems}</ul>
    </div>
  );
};

export default VideoList;
