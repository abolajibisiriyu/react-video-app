import React from 'react';

const VideoListItem = ({ video, onVideoClick }) => {
  console.log(video);
  const image_url = video.snippet.thumbnails.default.url;
  const title = video.snippet.title;
  return (
    <li onClick={() => onVideoClick(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img src={image_url} className="media-object" />
        </div>

        <div className="media-body">
          <div className="media-heading">{title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
